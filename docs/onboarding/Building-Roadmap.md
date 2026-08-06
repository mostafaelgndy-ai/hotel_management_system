# Building Roadmap for Managing the 100% Confirmation

*Updated to match the simplified stack: single Next.js app (API routes / Server Actions), Prisma, PostgreSQL, NextAuth, DB-backed cart. No FastAPI, no Redis, no separate backend service.*

---

## The First 25%: Structure & UI Skeleton (7–15 days)

### Main route system:

- `/` for the main store (home)
- `/products` products listing (with query params for filters: `?category=&color=&size=&price_min=&price_max=`)
- `/[productId]` product details page
- `/[productId]#[reviewId]` deep link to a specific review on the product page
- `/cart`
- `/checkout`
- `/favorites`
- `/search?q=`
- `/login`
- `/register`
- `/profile` (customer "بروفايل" page — order history, saved info)
- `/orders/[orderId]` order tracking / status
- `/category/[slug]` category landing page
- `/about-us`
- `/privacy-policy`
- `/terms`
- `/contact-us`
- `/admin` admin dashboard home (protected route)
- `/admin/login` separate admin login screen
- `/admin/products` product management (list/add/edit)
- `/admin/products/[productId]/edit`
- `/admin/orders` order management
- `/admin/orders/[orderId]`
- `/admin/customers` customer management
- `/admin/coupons` coupon management
- `/admin/reports` best sellers / order count / total sales / monthly reports
- `/admin/settings` SEO fields (page titles/descriptions), general store settings
- ...etc

All routes above live inside `src/app/[locale]/...` (next-intl locale segment) except `/admin/*`, which sits outside the locale prefix since the dashboard is single-language internal tooling — confirm this with the client, but it saves translating admin UI.

### Main Components:

- User NavBar (logo, search bar, cart icon, favorites icon, login/profile, language switcher)
- User Footer (pages links, social links, contact info, copyright)
- Admin NavBar (store name, logged-in employee name, notifications bell, logout)
- Admin Sidebar (Products / Orders / Customers / Coupons / Reports / Settings)
- Admin Footer
- Filter (category / price range / color / size — used on `/products` and `/category/[slug]`)
- Search Bar (with live suggestions)
- Product Card (image, name, price, out-of-stock badge, quick "add to favorites")
- Product Grid / Product List (with pagination or infinite scroll)
- Breadcrumbs
- Language Switcher (AR / EN)
- Toast / In-site Notification component
- Loading Skeletons
- Pagination component
- Admin Data Table (reusable for products/orders/customers lists)

### Design system setup:

- Import brand identity from company profile: logo, primary blue palette, typography
- Tailwind config: custom colors, RTL-aware spacing/utility classes
- Base UI kit: buttons, inputs, badges, modals, cards — built once, reused everywhere

---

## The Second 25%: Backend Foundation & Data Layer (18–25 days)

*Shorter than the original estimate — no separate FastAPI service to scaffold, no Alembic setup, no Redis wiring. Prisma covers schema + migrations + types in one step.*

### Database schema (PostgreSQL via Prisma):

- `User` (id, name, email, passwordHash, provider, role, createdAt)
- `Address` (per-user shipping addresses)
- `Category` (id, nameAr, nameEn, slug, **parentId** — supports nested categories)
- `Product` (id, titleAr/En, descriptionAr/En, basePrice, categoryId, slug, isActive, **metaTitle/metaDescription** for SEO)
- `ProductVariant` (id, productId, size, color, sku, price, stock)
- `ProductImage` (id, productId, url, altAr/En, position)
- `Cart` / `CartItem` (supports both guest — via cookie token — and logged-in carts)
- `Favorite` (userId, productId) — **new**, wishlist support
- `Order` (id, orderNumber, userId (nullable for guest), **guestName/guestEmail/guestPhone** (for guest checkout), status, paymentMethod, paymentStatus, kashierRef, shippingFee, couponId, totalAmount, shippingCity, shippingAddr, phone, createdAt)
- `OrderItem` (orderId, variantId, quantity, unitPrice)
- `Coupon` (id, code, discountType, discountValue, expiryDate, usageLimit, timesUsed) — **new**
- `Review` (id, productId, userId, rating, comment, createdAt) — **new**
- `Shipment` (orderId, courierName, trackingNumber, status)
- `Notification` (id, userId, titleAr/En, bodyAr/En, isRead, createdAt) — in-site only

### Next.js project structure (replaces the old FastAPI layout):

- `src/app/api/` — route handlers (auth, products, cart, orders, coupons, reviews, favorites, webhooks/kashier, admin/*)
- `src/lib/` — Prisma client singleton, NextAuth config, cart helpers, Kashier helper, Resend helper, coupon validation logic
- `prisma/schema.prisma` — single source of truth for the schema above
- `src/lib/validations/` — Zod schemas (replaces Pydantic request/response models)
- `src/middleware.ts` — locale routing + `/admin` role guard (replaces FastAPI's JWT dependency injection)

### Auth system:

- Email/password registration & login (bcrypt via NextAuth Credentials provider — never plaintext)
- Google OAuth login
- Facebook OAuth login
- NextAuth session (JWT strategy) for logged-in users
- Guest checkout support: cart persisted via a `Cart` row keyed to a signed cookie token — no Redis needed
- `role` field on `User` (`CUSTOMER` / `EMPLOYEE` / `ADMIN`) reserved for future permission splits; currently just gates `/admin`

### Core API endpoints (first pass):

- Auth: register / login / oauth callback / session (`/api/auth/*` via NextAuth)
- Products: list (with filters: category, price, color, size), detail, search
- Categories: list, detail (including nested children)
- Cart: get / add item / update quantity / remove item (guest + logged-in)
- Favorites: add / remove / list

---

## The Third 25%: Core E-commerce Features (22–28 days)

### Checkout & payments:

- Kashier integration for online payment (cards, wallets, installments) — EGP only
- Cash on Delivery (COD) as a manual payment method with its own order status flow
- Order status flow: `PENDING_PAYMENT` → `PAID` / `COD_CONFIRMED` → `PROCESSING` → `SHIPPED` → `DELIVERED` / `CANCELLED`
- Shipping fee calculation, no tax logic (per requirements)
- Order confirmation triggers: in-site notification + transactional email (Resend)

### Shopping & discovery features:

- Coupon system: apply/validate coupon codes at checkout (`src/lib/coupons.ts` validation logic + admin CRUD)
- Favorites / wishlist: add/remove, persisted per logged-in user
- Search & filters fully wired end-to-end (price / category / color / size) between the `Filter` component and the products API
- Out-of-stock products still shown, clearly badged, per requirements
- Product reviews: submit rating + comment, display on `/[productId]#[reviewId]`

### Admin dashboard features:

- Product CRUD: add/edit name, description, price, images (multiple, via Cloudflare R2), category, variants (size/color/stock)
- Order management: view orders, update status, view customer info per order
- Customer management: view registered customers and their order history
- Coupon management: create/edit/deactivate coupons
- Reports: best-selling products, total order count, total sales, monthly sales reports (charts + tables)
- In-site notification center (order alerts, low-stock alerts — internal to the dashboard only, no external push/email marketing)

### Shipping integration:

- Confirm shipping courier with the client (e.g., Bosta, Mylerz) and integrate their tracking API
- Shipment status reflected on `/orders/[orderId]` for customers and `/admin/orders/[orderId]` for staff

---

## The Fourth 25%: Language, SEO & Launch (10–15 days)

### The Language:

- Main language system using **next-intl**
- Arabic (default) and English, full RTL/LTR layout switching
- All static page copy, product fields (`titleAr`/`titleEn`, `descriptionAr`/`descriptionEn`), and admin-entered content localized

### SEO:

- Editable meta title & description per page/product from `/admin/settings` and `/admin/products/[productId]/edit`
- Clean, human-readable URLs (slugs) for products and categories
- Auto-generated `sitemap.xml` and `robots.txt` (native Next.js `sitemap.ts` / `robots.ts` files — no extra library needed)
- Structured data (Product schema, JSON-LD) injected on product pages

### Static content pages:

- About Us, Privacy Policy, Terms, Contact Us — populated with real company content from the profile document

### Performance & hardening:

- Image optimization via `next/image` served from Cloudflare R2
- Data caching via Next.js's built-in fetch/route caching and `revalidate` tags (replaces Redis caching)
- Rate limiting on auth and checkout endpoints (e.g. `@upstash/ratelimit` with a free-tier Upstash Redis, or a simple in-memory/IP-based limiter if traffic is low — the only place Redis-like infra might still show up, and only if needed)

### Testing:

- Unit tests (Vitest) for pricing, coupon, and stock logic
- End-to-end tests (Playwright) for guest checkout, login checkout, and admin product/order flows

### Deployment:

- Docker Compose stack: **Next.js + PostgreSQL + Nginx** (three services, not five) on Hostinger VPS
- Nginx reverse proxy routes all traffic to the single Node process (PM2-managed)
- SSL via Hostinger's built-in SSL
- Domain connected once client confirms if they own one or need it registered

### Monitoring, backups & handoff:

- Automated daily PostgreSQL backups
- Basic uptime monitoring
- Final QA pass against every "نعم/لا" requirement in the clarification document
- Short training session/handoff doc for the single admin employee on using `/admin`

---

# Main Pro Features (Not Included in the Current Budget):

- Database Optimization (Partially Included) + ~3000–5000 EGP
- Performance Live Tracker + ~2000–3000 EGP
- Authentication Live Tracker for Optimizing the Security + ~2000–3000 EGP
- More Themes (the Current Budget Included only One Light Theme) + ~1000 EGP
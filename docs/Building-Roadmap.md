# Bulding roadmap for managin the 100% Confermation.

## The First 25%: Structure & UI Skeleton (7-15 days)

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
- ...ect

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

## The Second 25%: Backend Foundation & Data Layer (25-30 days)

### Database schema (PostgreSQL):

- `users` (id, name, email, hashed_password, oauth_provider, oauth_id, role, created_at)
- `categories` (id, name_ar, name_en, slug, parent_id)
- `products` (id, name_ar, name_en, description_ar, description_en, price, sku, category_id, is_available, meta_title, meta_description, slug)
- `product_variants` (id, product_id, size, color, stock_quantity)
- `product_images` (id, product_id, image_url, sort_order)
- `carts` / `cart_items` (supports both guest session-based carts and logged-in user carts)
- `favorites` (user_id, product_id)
- `orders` (id, user_id or guest_info, status, payment_method, payment_status, total, shipping_fee, coupon_id, created_at)
- `order_items` (order_id, product_variant_id, quantity, price_at_purchase)
- `coupons` (code, discount_type, discount_value, expiry_date, usage_limit)
- `reviews` (id, product_id, user_id, rating, comment, created_at)
- `shipments` (order_id, courier_name, tracking_number, status)

### FastAPI project structure:

- `/app/routers` (auth, products, categories, cart, orders, coupons, reviews, admin)
- `/app/models` (SQLAlchemy models matching schema above)
- `/app/schemas` (Pydantic request/response models)
- `/app/services` (business logic: pricing, stock checks, coupon validation)
- `/app/core` (config, security/hashing, JWT handling)
- Alembic migrations initialized and version-controlled

### Auth system:

- Email/password registration & login (bcrypt/argon2 password hashing — never plaintext)
- Google OAuth login
- Facebook OAuth login
- JWT-based session for logged-in users
- Guest checkout support: cart persisted via Redis-backed session/cookie, no forced account creation
- Role field on `users` reserved for future use (currently single manager + single employee, no split permissions required)

### Core API endpoints (first pass):

- Auth: register / login / oauth callback / me
- Products: list (with filters: category, price, color, size), detail, search
- Categories: list, detail
- Cart: get / add item / update quantity / remove item (guest + logged-in)
- Redis wired in for guest cart sessions and general caching

---

## The Third 25%: Core E-commerce Features (25-30 days)

### Checkout & payments:

- Kashier integration for online payment (cards, wallets) — EGP only
- Cash on Delivery (COD) as a manual payment method with its own order status flow
- Order status flow: `pending` → `confirmed` → `shipped` → `delivered` / `cancelled`
- Shipping fee calculation, no tax logic (per requirements)
- Order confirmation triggers: in-site notification + transactional email (Resend)

### Shopping & discovery features:

- Coupon system: apply/validate coupon codes at checkout (backend service + admin CRUD)
- Favorites / wishlist: add/remove, persisted per logged-in user
- Search & filters fully wired end-to-end (price / category / color / size) between the `Filter` component and product API
- Out-of-stock products still shown, clearly badged, per requirements
- Product reviews: submit rating + comment, display on `/[productId]#[reviewId]`

### Admin dashboard features:

- Product CRUD: add/edit name, description, price, images (multiple), category, variants (size/color/stock)
- Order management: view orders, update status, view customer info per order
- Customer management: view registered customers and their order history
- Coupon management: create/edit/deactivate coupons
- Reports: best-selling products, total order count, total sales, monthly sales reports (charts + tables)
- In-site notification center (order alerts, low-stock alerts — internal to the dashboard only, no external push/email marketing)

### Shipping integration:

- Confirm shipping courier with the client (e.g., Bosta, Mylerz) and integrate their tracking API
- Shipment status reflected on `/orders/[orderId]` for customers and `/admin/orders/[orderId]` for staff

---

## The Fourth 25%: Language, SEO & Launch (10-15 days)

### the Language:
- main language system using **next-intl**
- Arabic (default) and English, full RTL/LTR layout switching
- All static page copy, product fields (`name_ar`/`name_en`, `description_ar`/`description_en`), and admin-entered content localized

### SEO:

- Editable meta title & description per page/product from `/admin/settings` and `/admin/products/[productId]/edit`
- Clean, human-readable URLs (slugs) for products and categories
- Auto-generated `sitemap.xml` and `robots.txt`
- Structured data (Product schema) for product pages

### Static content pages:

- About Us, Privacy Policy, Terms, Contact Us — populated with real company content from the profile document

### Performance & hardening:

- Image optimization via `next/image` served from Cloudflare R2
- API response caching (Redis) for product listings/categories
- Rate limiting on auth and checkout endpoints

### Testing:

- Backend unit tests (pytest) for pricing, coupon, and stock logic
- End-to-end tests for guest checkout, login checkout, and admin product/order flows

### Deployment:

- Docker Compose stack (Next.js, FastAPI, PostgreSQL, Redis, Nginx) on Hostinger VPS
- Nginx reverse proxy routing `/` to Next.js and `/api` to FastAPI
- SSL via Hostinger's built-in SSL
- Domain connected once client confirms if they own one or need it registered

### Monitoring, backups & handoff:

- Automated daily PostgreSQL backups
- Basic uptime monitoring
- Final QA pass against every "نعم/لا" requirement in the clarification document
- Short training session/handoff doc for the single admin employee on using `/admin`

---

# Main Pro Features (Not Included in the Current Budget):

- Database Optimization (Partially Included) + ~3000-5000 EGP
- Performance Live Tracker + ~2000-3000 EGP
- Authintication  Live Tracker for Optimizing The Security + ~2000-3000 EGP 
- More Themes (the Current Budget Included only One Light Theme) + ~1000 EGP
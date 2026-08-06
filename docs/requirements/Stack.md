# Full Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend + Backend | **Next.js** (App Router, API routes / Server Actions) | One app handles pages, APIs, and admin — no separate backend service to deploy or sync |
| i18n | **next-intl** | Clean Arabic/English support with RTL/LTR switching |
| Styling | **Tailwind CSS** | Fast to match your existing logo/colors/design assets |
| Database | **PostgreSQL** | Handles relational data well: products, variants (size/color), orders, categories — supports filtering (price/category/color/size) natively |
| ORM/migrations | **Prisma** | Schema, migrations, and TypeScript types in one tool — no separate Python layer to maintain |
| Cart/sessions | **DB-backed cart (Postgres) + guest cookie ID** | Guest cart persistence (no forced login) without needing Redis at this scale |
| Auth | **NextAuth.js (Auth.js)** | Supports email/password *and* Google/Facebook OAuth login, built natively for Next.js |
| Payments | **Kashier** | Supports cards, wallets, and installments in EGP; pair with a manual "Cash on Delivery" order status for the cash option |
| Image/file storage | **Cloudflare R2** | Hostinger shared storage isn't great for scaling product images; R2 is cheap with no egress fees |
| Admin dashboard | **Custom pages inside Next.js** (`/admin`) protected by role check | Only 1 manager + 1 employee with no split permissions — a few well-built protected pages covering products, orders, customers, and reports is enough |
| Transactional email | **Resend** | For order confirmations/shipping updates. Doc says "in-site notifications only" for alerts, so no marketing automation needed |
| Shipping | Manual integration or a local courier's API (e.g., Bosta, Mylerz) | Doc says "شركة شحن" (a shipping company) handles delivery with status tracking — confirm which courier the client uses to integrate their tracking API |
| Hosting | **Hostinger VPS**, single Node process (PM2) behind Nginx | Shared hosting can't run Next.js as a live process; one runtime instead of two is simpler to deploy and keep alive |
| SSL | Hostinger's built-in SSL | Free, auto-renewing |

**What changed from the original:** FastAPI, SQLAlchemy/Alembic, Redis, and FastAPI-Users are all gone — replaced by Next.js's own API layer, Prisma, a DB-backed cart, and NextAuth. Same capabilities, one runtime instead of two.
# GOAL — WhatsApp-Based Mobile-First Store

> The single source of truth derived from the project `README.md`.
> This file defines **what** we build. `tasks.md` defines **how** we break it down.

---

## 1. Product Vision

Build a **mobile-first online store** where visitors browse products and, when they
want to buy, contact the seller directly via **WhatsApp**. There is **no online
payment**, **no checkout flow**, **no shipping company**, and **no order tracking system**.

The store replaces the traditional cart/checkout/payment infrastructure with a single
"WhatsApp to buy" action that opens a chat with the seller's number.

---

## 2. Core Requirements (from README.md)

| # | Requirement | Detail |
|---|-------------|--------|
| 1 | Mobile-first | Optimized primarily for phone screens. |
| 2 | No payment gateway | No Stripe / no online payment method. |
| 3 | WhatsApp payment channel | Buyer pays/settles via the seller's WhatsApp. |
| 4 | Seller number from env | The seller's number lives in `.env` as **`SELLER_PHONE`**. |
| 5 | 4 bottom nav icons | Four switching icons fixed at the bottom for navigation on phones. |
| 6 | No shipping company | Not applicable. |
| 7 | No shipping system | Not applicable. |
| 8 | Optional login | Login is **completely optional**; browsing/buying must work without an account. |
| 9 | Deploy to Vercel | Target production host. |
| 10 | Rule | **Never touch `.gitignore`.** |

---

## 3. Functional Requirements

### 3.1 Admin (URL: `/admin`)

- [ ] **Add new items** to the store (product name, description, price, image, availability, etc.).
- [ ] **Update the seller phone number** (persisted; used for the WhatsApp buy button).
- [ ] Manage existing items (edit / remove is implied by "add new items" — confirm scope).
- [ ] Admin area protected / gated (method to be defined — see Open Questions).

### 3.2 User / Visitor

- [ ] **See and open the items** in the store (list + detail view).
- [ ] On a product, click a **WhatsApp button** that opens a chat with the seller
      (`SELLER_PHONE`) pre-filled with a message about that product.
- [ ] No account required to browse or to start a WhatsApp purchase.

### 3.3 Navigation

- [ ] Fix **4 bottom navigation icons** (mobile) — which 4 pages/icons to be confirmed.
- [ ] Ensure a clean, mobile-first layout (Tailwind responsive).

---

## 4. Non-Functional / Technical Constraints

- **Framework:** Next.js (App Router) — note repo targets a newer Next.js with breaking changes.
- **DB / storage:** keep consistent with README simplicity. Reveals:
  - No online payment dependency (remove/disable Stripe).
  - No shipping/orders machinery required.
  - Login optional (auth may be removed or kept minimal).
- **Config preserved:** `SELLER_PHONE` must be read from `.env`.
- **Deployment:** Vercel.
- **Do not modify `.gitignore`.**

---

## 5. Relationship to Existing Code (Gap Analysis)

The current repo is a **much larger store** (Clerk auth, Stripe, cart/checkout/orders,
reviews/favorites, Vercel Blob, Neon). This goal is **simpler**. The following
existing features appear **out of scope** for this goal and should be removed or
simplified (this is a change from "goal" → "tasks", pending approval):

- Stripe payment + `/api/payment`, `/api/confirm` routes.
- Cart, Checkout, Orders pages.
- Sign-in / Sign-up / User-profile (login "optional" may mean removing forced auth).
- Reviews, Favorites.
- Shipping-related fields/logic.

> **This is the biggest decision for the team to approve**: do we **strip the repo down**
> to the WhatsApp-store only, or **start fresh** and keep the two ideas separate?

---

## 6. Open Questions (to resolve before finalizing `tasks.md`)

1. **What are the 4 bottom nav icons/pages?**
   Proposed default: `Home` · `Products` · `About` · `Contact`. Confirm.
2. **Admin protection method?**
   Without enforcing full auth, how do we secure `/admin`? (simple password/PIN,
   a lightweight login, or leave open for now?)
3. **Build out of the current repo, or start fresh?**
   The existing repo is heavily a Stripe/Clerk store. Confirm stripping vs. fresh scaffold.
4. **Data storage for products + seller phone?**
   Keep PostgreSQL/Prisma, or use a simpler store (JSON/file, SQLite)? (README is silent.)
5. **Image storage:** keep Vercel Blob, or allow URL-only images to keep it simple?
6. **Admin capabilities beyond add + update phone** — edit/delete existing items?

---

## 7. Definition of Done

- A visitor can browse products on mobile.
- Tapping "Buy via WhatsApp" opens a WhatsApp chat with `SELLER_PHONE`, message pre-filled with the product.
- `/admin` lets the admin add items and update the seller phone number.
- Exactly 4 bottom navigation icons for phones.
- No online payment, no shipping system.
- Login is not required.
- Deploys to Vercel.
- `.gitignore` untouched.
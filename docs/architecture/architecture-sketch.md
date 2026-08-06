# Project Architecture Sketch

## Folder Structure

```
store/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── app/
│   │   ├── [locale]/                    # next-intl locale segment (en / ar)
│   │   │   ├── layout.tsx               # sets dir="rtl"/"ltr" based on locale
│   │   │   ├── page.tsx                 # homepage
│   │   │   ├── products/
│   │   │   │   ├── page.tsx             # listing + filters (price/category/color/size)
│   │   │   │   └── [slug]/page.tsx      # product detail (editable title/description)
│   │   │   ├── cart/page.tsx
│   │   │   ├── checkout/page.tsx
│   │   │   ├── account/
│   │   │   │   ├── orders/page.tsx
│   │   │   │   └── settings/page.tsx
│   │   │   └── admin/                   # role-protected
│   │   │       ├── layout.tsx           # checks session.role === 'ADMIN' | 'EMPLOYEE'
│   │   │       ├── products/
│   │   │       ├── orders/
│   │   │       ├── customers/
│   │   │       └── reports/
│   │   │
│   │   └── api/
│   │       ├── auth/[...nextauth]/route.ts
│   │       ├── products/route.ts
│   │       ├── cart/route.ts
│   │       ├── checkout/route.ts
│   │       ├── webhooks/kashier/route.ts   # payment confirmation
│   │       └── admin/
│   │           ├── products/route.ts
│   │           ├── orders/route.ts
│   │           └── reports/route.ts
│   │
│   ├── components/
│   │   ├── ui/                          # buttons, inputs, etc (Tailwind)
│   │   ├── product/
│   │   ├── cart/
│   │   └── admin/
│   │
│   ├── lib/
│   │   ├── prisma.ts                    # Prisma client singleton
│   │   ├── auth.ts                      # NextAuth config
│   │   ├── cart.ts                      # guest-cart cookie helpers
│   │   ├── kashier.ts                   # payment helper functions
│   │   └── email.ts                     # Resend helpers
│   │
│   ├── i18n/
│   │   ├── request.ts
│   │   └── messages/
│   │       ├── en.json
│   │       └── ar.json
│   │
│   └── middleware.ts                    # locale routing + admin route guard
│
├── public/
├── .env
├── next.config.ts
└── package.json
```

---

## Database Schema (Prisma)

```prisma
// prisma/schema.prisma

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// ---------- Users & Auth ----------

enum Role {
  CUSTOMER
  EMPLOYEE
  ADMIN
}

model User {
  id            String    @id @default(cuid())
  email         String?   @unique
  passwordHash  String?               // null if OAuth-only
  name          String?
  phone         String?
  role          Role      @default(CUSTOMER)
  provider      String?               // "google" | "facebook" | "credentials"
  createdAt     DateTime  @default(now())

  orders        Order[]
  addresses     Address[]
  notifications Notification[]
}

model Address {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  label     String?              // "Home", "Work"
  city      String
  street    String
  phone     String
  isDefault Boolean  @default(false)
}

// ---------- Catalog ----------

model Category {
  id       String     @id @default(cuid())
  nameEn   String
  nameAr   String
  slug     String     @unique
  products Product[]
}

model Product {
  id            String        @id @default(cuid())
  titleEn       String
  titleAr       String
  descriptionEn String?
  descriptionAr String?
  slug          String        @unique
  basePrice     Decimal
  categoryId    String
  category      Category      @relation(fields: [categoryId], references: [id])
  images        ProductImage[]
  variants      ProductVariant[]
  isActive      Boolean       @default(true)
  createdAt     DateTime      @default(now())

  @@index([categoryId])
}

model ProductImage {
  id        String   @id @default(cuid())
  productId String
  product   Product  @relation(fields: [productId], references: [id])
  url       String              // Cloudflare R2 URL
  altEn     String?
  altAr     String?
  position  Int      @default(0)
}

model ProductVariant {
  id        String   @id @default(cuid())
  productId String
  product   Product  @relation(fields: [productId], references: [id])
  size      String?
  color     String?
  sku       String   @unique
  price     Decimal            // overrides basePrice if set
  stock     Int      @default(0)

  cartItems  CartItem[]
  orderItems OrderItem[]

  @@index([productId])
  @@index([size, color])
}

// ---------- Cart (guest + logged-in) ----------

model Cart {
  id         String     @id @default(cuid())
  userId     String?               // null for guest carts
  guestToken String?    @unique    // stored in cookie
  items      CartItem[]
  updatedAt  DateTime   @updatedAt
}

model CartItem {
  id        String         @id @default(cuid())
  cartId    String
  cart      Cart           @relation(fields: [cartId], references: [id])
  variantId String
  variant   ProductVariant @relation(fields: [variantId], references: [id])
  quantity  Int            @default(1)
}

// ---------- Orders ----------

enum OrderStatus {
  PENDING_PAYMENT
  PAID
  COD_CONFIRMED         // cash on delivery, confirmed by staff
  PROCESSING
  SHIPPED
  DELIVERED
  CANCELLED
}

enum PaymentMethod {
  KASHIER_CARD
  KASHIER_WALLET
  KASHIER_INSTALLMENT
  CASH_ON_DELIVERY
}

model Order {
  id            String        @id @default(cuid())
  orderNumber   String        @unique
  userId        String?
  user          User?         @relation(fields: [userId], references: [id])
  status        OrderStatus   @default(PENDING_PAYMENT)
  paymentMethod PaymentMethod
  kashierRef    String?                  // txn reference from webhook
  courierName   String?                  // e.g. "Bosta"
  trackingCode  String?
  totalAmount   Decimal
  shippingCity  String
  shippingAddr  String
  phone         String
  items         OrderItem[]
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt

  @@index([userId])
  @@index([status])
}

model OrderItem {
  id        String         @id @default(cuid())
  orderId   String
  order     Order          @relation(fields: [orderId], references: [id])
  variantId String
  variant   ProductVariant @relation(fields: [variantId], references: [id])
  quantity  Int
  unitPrice Decimal              // price at time of order
}

// ---------- Notifications (in-site only) ----------

model Notification {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  titleEn   String
  titleAr   String
  bodyEn    String?
  bodyAr    String?
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

---

## Notes on Design Decisions

- **Guest cart** uses a `guestToken` cookie tied to a `Cart` row with `userId = null`. On login, merge the guest cart into the user's cart (or create one) in a single transaction.
- **Bilingual fields** (`titleEn`/`titleAr`, `nameEn`/`nameAr`, etc.) are stored as separate columns rather than a JSON blob — simpler to query/filter/sort, and works cleanly with Prisma's typing.
- **Price snapshot** on `OrderItem.unitPrice` protects historical orders from later price changes on the product.
- **Role check** for `/admin` happens in `middleware.ts` reading the NextAuth session — no separate auth service needed.
- **Kashier webhook** (`/api/webhooks/kashier`) updates `Order.status` and `kashierRef` on payment confirmation; COD orders skip straight to `COD_CONFIRMED` when staff manually confirms in `/admin/orders`.

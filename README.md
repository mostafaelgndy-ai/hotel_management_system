# Next Store | E-Commerce Platform 3 - Next.js, TypeScript, Prisma, PostgreSQL, Vercel Blob, Clerk, Stripe Fullstack Project (including Admin Panel)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-green)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5-purple)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-orange)](https://www.postgresql.org/)
[![Vercel Blob Storage](https://img.shields.io/badge/Vercel%20Blob%20Storage-1-yellow)](https://vercel.com/docs/storage/vercel-blob)
[![Clerk](https://img.shields.io/badge/Clerk-5-blue)](https://clerk.com/)
[![Stripe](https://img.shields.io/badge/Stripe-16-green)](https://stripe.com/)

A beautifully designed, high-performance e-commerce platform built with Next.js 14, TypeScript, Prisma, PostgreSQL, Vercel Blob Storage, Clerk authentication, Stripe payments, and shadcn/ui. Next Store offers a seamless online shopping experience with fast checkout, secure payments, and a curated selection of products.

- **Live-Demo:** [https://store-next-beta.vercel.app/](https://store-next-beta.vercel.app/)

![Screenshot 2025-06-14 at 14 56 42](https://github.com/user-attachments/assets/4b133e1c-73ab-42c6-a31a-1370738e1f65)
![Screenshot 2025-06-14 at 14 57 07](https://github.com/user-attachments/assets/d3f7ead5-1833-432d-bbc0-c26637668c38)
![Screenshot 2025-06-14 at 14 58 00](https://github.com/user-attachments/assets/0c685a53-9237-4976-b459-7c85dde78501)
![Screenshot 2025-06-14 at 14 59 55](https://github.com/user-attachments/assets/ddd94197-4947-43ff-936a-6610845d18f7)
![Screenshot 2025-06-14 at 15 00 18](https://github.com/user-attachments/assets/e663e154-23b0-401b-8b8c-debe6071ae89)
![Screenshot 2025-06-14 at 15 00 40](https://github.com/user-attachments/assets/cbea298a-9ae3-4648-a0ce-328878a24279)
![Screenshot 2025-06-14 at 15 00 51](https://github.com/user-attachments/assets/4746c5d4-cd07-4216-8a0c-d921b7ec1f0f)
![Screenshot 2025-06-14 at 15 01 26](https://github.com/user-attachments/assets/cdecde19-de05-43a2-a280-f174b8deffc6)

---

## 📋 Table of Contents

- [Features & Functionalities](#-features--functionalities)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables Setup](#-environment-variables-setup)
- [Database Setup](#️-database-setup)
- [API Endpoints](#-api-endpoints)
- [Routes & Pages](#️-routes--pages)
- [Components Guide](#-components-guide)
- [Server Actions](#-server-actions)
- [How It Works](#-how-it-works)
- [Reusing Components](#️-reusing-components)
- [Deployment](#-deployment)
- [Keywords](#️-keywords)
- [Educational Value](#-educational-value)
- [Learning Resources](#-learning-resources)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

---

## 🚀 Features & Functionalities

### Core Features

- **🛍️ Product Management**
  - Browse products with grid and list views
  - Search and filter products by name or company
  - Featured products showcase on homepage
  - Detailed product pages with images, descriptions, and reviews
  - Admin CRUD operations for products

- **🛒 Shopping Cart**
  - Add/remove items from cart
  - Update item quantities
  - Real-time cart total calculations
  - Persistent cart per user session

- **💳 Secure Checkout**
  - Stripe embedded checkout integration
  - Secure payment processing
  - Order confirmation and tracking

- **⭐ Favorites System**
  - Save favorite products
  - Quick access to saved items
  - Toggle favorites with one click

- **📝 Product Reviews**
  - Submit product reviews with ratings (1-5 stars)
  - View all reviews for each product
  - Average rating calculation
  - Review management (view and delete your reviews)

- **👤 User Authentication**
  - Clerk-powered authentication
  - Multiple sign-in options (Google, GitHub, Email)
  - Protected routes and admin access control
  - User profile management

- **👨‍💼 Admin Dashboard**
  - Admin-only product management
  - Sales overview and analytics
  - Order management
  - Image upload and management

- **🎨 Modern UI/UX**
  - Dark mode support
  - Responsive design (mobile-first)
  - Beautiful shadcn/ui components
  - Smooth animations and transitions
  - Loading states and error handling

- **📸 Image Management**
  - Upload product images to Vercel Blob Storage
  - Automatic image optimization
  - Image deletion on product removal

---

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Radix UI** - Unstyled, accessible component primitives
- **next-themes** - Dark mode implementation
- **Embla Carousel** - Carousel component for hero section
- **React Icons** - Icon library
- **React Share** - Social sharing functionality

### Backend & Database

- **Prisma ORM** - Type-safe database access
- **NeonDB** - Serverless PostgreSQL database
- **Next.js Server Actions** - Server-side data mutations
- **Next.js API Routes** - RESTful API endpoints

### Authentication & Payments

- **Clerk** - Authentication and user management
- **Stripe** - Payment processing and checkout

### Storage & Deployment

- **Vercel Blob Storage** - Image and file storage
- **Vercel** - Hosting and deployment platform

### Development Tools

- **Zod** - Schema validation
- **ESLint** - Code linting
- **TypeScript** - Static type checking

---

## 📁 Project Structure

```bash
nextjs-store/
├── app/                          # Next.js App Router directory
│   ├── about/                    # About page
│   ├── admin/                    # Admin dashboard routes
│   │   ├── layout.tsx           # Admin layout with sidebar
│   │   ├── products/            # Product management
│   │   │   ├── [id]/           # Dynamic product routes
│   │   │   │   └── edit/      # Edit product page
│   │   │   ├── create/         # Create product page
│   │   │   ├── loading.tsx    # Loading state
│   │   │   └── page.tsx        # Products list page
│   │   ├── sales/              # Sales dashboard
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   └── Sidebar.tsx         # Admin sidebar component
│   ├── api/                     # API routes
│   │   ├── confirm/            # Stripe payment confirmation
│   │   │   └── route.ts
│   │   └── payment/             # Stripe checkout session
│   │       └── route.ts
│   ├── cart/                    # Shopping cart page
│   │   └── page.tsx
│   ├── checkout/                # Checkout page
│   │   └── page.tsx
│   ├── favorites/               # User favorites page
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── orders/                  # User orders page
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── products/                # Products pages
│   │   ├── [id]/               # Single product page
│   │   │   └── page.tsx
│   │   ├── loading.tsx
│   │   └── page.tsx            # Products list page
│   ├── reviews/                 # Reviews page
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── favicon.ico              # Site favicon
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── providers.tsx             # Context providers
│   └── theme-provider.tsx        # Theme context provider
├── components/                   # Reusable components
│   ├── cart/                    # Cart-related components
│   │   ├── CartItemColumns.tsx
│   │   ├── CartItemsList.tsx
│   │   ├── CartTotals.tsx
│   │   └── ThirdColumn.tsx
│   ├── form/                    # Form components
│   │   ├── Buttons.tsx
│   │   ├── CheckboxInput.tsx
│   │   ├── FormContainer.tsx
│   │   ├── FormInput.tsx
│   │   ├── ImageInput.tsx
│   │   ├── ImageInputContainer.tsx
│   │   ├── PriceInput.tsx
│   │   └── TextAreaInput.tsx
│   ├── global/                  # Global utility components
│   │   ├── Container.tsx
│   │   ├── EmptyList.tsx
│   │   ├── LoadingContainer.tsx
│   │   ├── LoadingTable.tsx
│   │   └── SectionTitle.tsx
│   ├── home/                    # Homepage components
│   │   ├── FeaturedProducts.tsx
│   │   ├── Hero.tsx
│   │   └── HeroCarousel.tsx
│   ├── navbar/                  # Navigation components
│   │   ├── CartButton.tsx
│   │   ├── DarkMode.tsx
│   │   ├── LinksDropdown.tsx
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   ├── NavSearch.tsx
│   │   ├── SignOutLink.tsx
│   │   └── UserIcon.tsx
│   ├── products/                # Product-related components
│   │   ├── FavoriteToggleButton.tsx
│   │   ├── FavoriteToggleForm.tsx
│   │   ├── ProductsContainer.tsx
│   │   ├── ProductsGrid.tsx
│   │   └── ProductsList.tsx
│   ├── reviews/                 # Review components
│   │   ├── Comment.tsx
│   │   ├── ProductReviews.tsx
│   │   ├── Rating.tsx
│   │   ├── RatingInput.tsx
│   │   ├── ReviewCard.tsx
│   │   └── SubmitReview.tsx
│   ├── single-product/          # Single product page components
│   │   ├── AddToCart.tsx
│   │   ├── BreadCrumbs.tsx
│   │   ├── ProductRating.tsx
│   │   ├── SelectProductAmount.tsx
│   │   └── ShareButton.tsx
│   └── ui/                      # shadcn/ui components
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── checkbox.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── popover.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── skeleton.tsx
│       ├── table.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       └── use-toast.ts
├── lib/                         # Utility libraries
│   └── utils.ts                 # Utility functions (cn, etc.)
├── prisma/                      # Prisma configuration
│   ├── schema.prisma            # Database schema
│   ├── seed.js                  # Database seeding script
│   └── products.json            # Sample product data
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   │   ├── hero1.jpg
│   │   ├── hero2.jpg
│   │   ├── hero3.jpg
│   │   ├── hero4.jpg
│   │   └── product-*.jpg
│   └── logo.png                 # Site logo
├── utils/                       # Utility functions
│   ├── actions.ts               # Server actions
│   ├── db.ts                    # Prisma client instance
│   ├── format.ts                # Formatting utilities
│   ├── links.ts                 # Navigation links
│   ├── schemas.ts               # Zod validation schemas
│   ├── supabase.ts              # Image upload/delete (Vercel Blob)
│   └── types.ts                 # TypeScript type definitions
├── .env                         # Environment variables (not committed)
├── .env.local                   # Local environment variables (not committed)
├── middleware.ts                 # Next.js middleware (Clerk auth)
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/your-username/nextjs-store.git
cd nextjs-store
```

1. **Install dependencies**

```bash
npm install
```

1. **Set up environment variables**

Create `.env` and `.env.local` files in the root directory (see [Environment Variables Setup](#-environment-variables-setup) section below).

1. **Set up the database**

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed the database (optional)
node prisma/seed.js
```

1. **Run the development server**

```bash
npm run dev
```

1. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🔐 Environment Variables Setup

This project requires several environment variables to function properly. Create two files: `.env` and `.env.local` in the root directory.

### `.env` File

This file contains non-sensitive configuration variables:

```env
# NeonDB Database Connection
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"
DIRECT_URL="postgresql://user:password@host:port/database?sslmode=require"

# Admin User ID (Clerk)
ADMIN_USER_ID="user_xxxxxxxxxxxxx"

# Website URL
NEXT_PUBLIC_WEBSITE_URL="https://your-domain.vercel.app/"

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_xxxxxxxxxxxxx"
STRIPE_SECRET_KEY="sk_test_xxxxxxxxxxxxx"
# Optional: For webhook verification
# STRIPE_WEBHOOK_SECRET="whsec_xxxxxxxxxxxxx"
```

### `.env.local` File

This file contains sensitive secrets (never commit to git):

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_xxxxxxxxxxxxx"
CLERK_SECRET_KEY="sk_test_xxxxxxxxxxxxx"

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_xxxxxxxxxxxxx"
```

### How to Get Each Environment Variable

#### 1. NeonDB Database Connection

1. Go to [Neon Console](https://console.neon.tech/)
2. Create a new project or select an existing one
3. Go to **Connection Details**
4. Copy the **Pooled connection** string → Use for `DATABASE_URL`
5. Copy the **Direct connection** string → Use for `DIRECT_URL`

**Format:**

```env
DATABASE_URL="postgresql://user:password@host-pooler.region.aws.neon.tech/dbname?sslmode=require"
DIRECT_URL="postgresql://user:password@host.region.aws.neon.tech/dbname?sslmode=require"
```

#### 2. Clerk Authentication

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application or select an existing one
3. Go to **API Keys** section
4. Copy **Publishable Key** → Use for `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
5. Copy **Secret Key** → Use for `CLERK_SECRET_KEY`
6. To get `ADMIN_USER_ID`:
   - Sign in to your application
   - Go to **Users** section in Clerk dashboard
   - Click on your user
   - Copy the **User ID** → Use for `ADMIN_USER_ID`

#### 3. Stripe Payments

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to **Developers** → **API keys**
3. Copy **Publishable key** → Use for `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
4. Copy **Secret key** → Use for `STRIPE_SECRET_KEY`
5. For webhooks (optional):
   - Go to **Developers** → **Webhooks**
   - Create a webhook endpoint
   - Copy the **Signing secret** → Use for `STRIPE_WEBHOOK_SECRET`

#### 4. Vercel Blob Storage

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to **Storage** tab (top navigation)
4. Click **Create** next to **Blob**
5. Name your blob store (e.g., `product-images`)
6. Click **Connect** to connect it to your project
7. The `BLOB_READ_WRITE_TOKEN` will be automatically added to your Vercel environment variables
8. Copy the token from Vercel dashboard → **Settings** → **Environment Variables**
9. Add it to your local `.env.local` file

#### 5. Website URL

Set `NEXT_PUBLIC_WEBSITE_URL` to your production domain:

```env
NEXT_PUBLIC_WEBSITE_URL="https://your-domain.vercel.app/"
```

### Important Notes

- **Never commit** `.env` or `.env.local` files to version control
- Both files are already in `.gitignore`
- Use quotes around values that contain special characters
- For production, add all variables to your Vercel project settings

---

## 🗄️ Database Setup

### Prisma Schema

The project uses Prisma ORM with the following models:

- **Product** - Stores product information
- **Favorite** - User favorite products
- **Review** - Product reviews and ratings
- **Cart** - Shopping cart
- **CartItem** - Individual cart items
- **Order** - Customer orders

### Database Commands

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database (development)
npx prisma db push

# Create a migration (production)
npx prisma migrate dev --name migration_name

# Seed the database
node prisma/seed.js

# Open Prisma Studio (database GUI)
npx prisma studio
```

### Database Schema Overview

```prisma
model Product {
  id          String     @id @default(uuid())
  name        String
  company     String
  description String
  featured    Boolean
  image       String
  price       Int
  clerkId     String
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
  favorites   Favorite[]
  reviews     Review[]
  cartItems   CartItem[]
}

model Favorite {
  id        String   @id @default(uuid())
  clerkId   String
  productId String
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Review {
  id            String   @id @default(uuid())
  clerkId       String
  productId     String
  rating        Int
  comment       String
  authorName    String
  authorImageUrl String
  product       Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model Cart {
  id            String     @id @default(uuid())
  clerkId       String
  cartItems     CartItem[]
  numItemsInCart Int       @default(0)
  cartTotal     Int        @default(0)
  shipping      Int        @default(5)
  tax           Int        @default(0)
  taxRate       Float      @default(0.1)
  orderTotal    Int        @default(0)
  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt
}

model CartItem {
  id        String   @id @default(uuid())
  productId String
  cartId    String
  amount    Int
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  cart      Cart     @relation(fields: [cartId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Order {
  id         String   @id @default(uuid())
  clerkId    String
  products   Int      @default(0)
  orderTotal Int      @default(0)
  tax        Int      @default(0)
  shipping   Int      @default(0)
  email      String
  isPaid     Boolean  @default(false)
  createdAt  DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## 🔌 API Endpoints

The project includes two API routes for Stripe payment processing:

### 1. POST `/api/payment`

Creates a Stripe checkout session for payment processing.

**Request Body:**

```json
{
  "orderId": "order-uuid",
  "cartId": "cart-uuid"
}
```

**Response:**

```json
{
  "clientSecret": "cs_test_xxxxxxxxxxxxx"
}
```

**Usage Example:**

```typescript
const response = await fetch("/api/payment", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ orderId, cartId }),
});
const { clientSecret } = await response.json();
```

### 2. GET `/api/confirm?session_id={CHECKOUT_SESSION_ID}`

Confirms payment and updates order status after Stripe checkout completion.

**Query Parameters:**

- `session_id` - Stripe checkout session ID

**Response:**

- Redirects to `/orders` page on success

**How It Works:**

1. Retrieves the Stripe checkout session
2. Updates order status to `isPaid: true` if payment is complete
3. Deletes the cart after successful payment
4. Redirects user to orders page

---

## 🛣️ Routes & Pages

### Public Routes

- **`/`** - Homepage with hero section and featured products
- **`/about`** - About page
- **`/products`** - Products listing page with search functionality
- **`/products/[id]`** - Single product detail page
- **`/cart`** - Shopping cart page
- **`/checkout`** - Checkout page with Stripe embedded checkout
- **`/favorites`** - User's favorite products (requires authentication)
- **`/orders`** - User's order history (requires authentication)
- **`/reviews`** - User's submitted reviews (requires authentication)

### Admin Routes (Protected)

- **`/admin/sales`** - Sales dashboard and analytics
- **`/admin/products`** - Product management list
- **`/admin/products/create`** - Create new product
- **`/admin/products/[id]/edit`** - Edit existing product

### Route Protection

All routes are protected by Clerk middleware. Admin routes additionally check for `ADMIN_USER_ID` match.

**Middleware Configuration:**

```typescript
// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!_next|favicon.ico|public).*)"],
};
```

---

## 🧩 Components Guide

### Component Categories

#### 1. Global Components (`components/global/`)

##### Container.tsx

- Wrapper component for consistent page layout
- Usage: `<Container className="py-20">{children}</Container>`

##### LoadingContainer.tsx

- Loading state component with skeleton UI
- Usage: `<LoadingContainer />`

##### EmptyList.tsx

- Displays empty state messages
- Usage: `<EmptyList resourceName="products" />`

##### SectionTitle.tsx

- Consistent section heading component
- Usage: `<SectionTitle text="Featured Products" />`

#### 2. Form Components (`components/form/`)

##### FormContainer.tsx

- Wrapper for form elements with consistent styling
- Usage: `<FormContainer title="Create Product">{form}</FormContainer>`

##### FormInput.tsx

- Reusable text input component
- Usage: `<FormInput name="name" label="Product Name" />`

##### PriceInput.tsx

- Specialized input for price with currency formatting
- Usage: `<PriceInput name="price" label="Price" />`

##### TextAreaInput.tsx

- Textarea component for longer text inputs
- Usage: `<TextAreaInput name="description" label="Description" />`

##### ImageInput.tsx

- File input for image uploads
- Usage: `<ImageInput />`

##### CheckboxInput.tsx

- Checkbox component with label
- Usage: `<CheckboxInput name="featured" label="Featured Product" />`

#### 3. Product Components (`components/products/`)

##### ProductsContainer.tsx

- Container that handles product fetching and layout switching
- Usage: `<ProductsContainer layout="grid" search={searchTerm} />`

##### ProductsGrid.tsx

- Grid layout for product display
- Usage: `<ProductsGrid products={products} />`

##### ProductsList.tsx

- List layout for product display
- Usage: `<ProductsList products={products} />`

##### FavoriteToggleButton.tsx

- Button to toggle favorite status
- Usage: `<FavoriteToggleButton productId={productId} />`

#### 4. Cart Components (`components/cart/`)

##### CartItemsList.tsx

- Displays all items in the cart
- Usage: `<CartItemsList cartItems={cartItems} />`

##### CartTotals.tsx

- Displays cart totals (subtotal, tax, shipping, total)
- Usage: `<CartTotals cart={cart} />`

##### CartItemColumns.tsx

- Column components for cart item display
- Usage: `<FirstColumn name={name} image={image} />`

#### 5. Review Components (`components/reviews/`)

##### ProductReviews.tsx

- Displays all reviews for a product
- Usage: `<ProductReviews productId={productId} />`

##### SubmitReview.tsx

- Form component for submitting reviews
- Usage: `<SubmitReview productId={productId} />`

##### ReviewCard.tsx

- Individual review card component
- Usage: `<ReviewCard review={review} />`

##### Rating.tsx

- Star rating display component
- Usage: `<Rating rating={4.5} />`

#### 6. Navbar Components (`components/navbar/`)

##### Navbar.tsx

- Main navigation bar component
- Usage: Automatically included in root layout

##### NavSearch.tsx

- Search input in navbar
- Usage: Included in Navbar

##### CartButton.tsx

- Cart icon button with item count
- Usage: Included in Navbar

##### DarkMode.tsx

- Dark mode toggle button
- Usage: Included in Navbar

##### LinksDropdown.tsx

- Dropdown menu for navigation links
- Usage: Included in Navbar

#### 7. UI Components (`components/ui/`)

These are shadcn/ui components. You can add more using:

```bash
npx shadcn-ui@latest add [component-name]
```

Common components used:

- `Button` - Styled button component
- `Card` - Card container component
- `Input` - Text input component
- `Table` - Table component
- `Toast` - Toast notification system
- `Skeleton` - Loading skeleton component

---

## ⚡ Server Actions

Server Actions are defined in `utils/actions.ts`. They handle all server-side data mutations.

### Product Actions

#### fetchFeaturedProducts()

```typescript
const products = await fetchFeaturedProducts();
// Returns: Product[] - All products where featured: true
```

#### fetchAllProducts({ search })

```typescript
const products = await fetchAllProducts({ search: "lamp" });
// Returns: Product[] - Filtered products by search term
```

#### fetchSingleProduct(productId)

```typescript
const product = await fetchSingleProduct("product-uuid");
// Returns: Product - Single product or redirects if not found
```

#### createProductAction(prevState, formData)

```typescript
// Server action for creating a product
// Handles image upload, validation, and database insertion
```

#### updateProductAction(prevState, formData)

```typescript
// Server action for updating product details
```

#### updateProductImageAction(prevState, formData)

```typescript
// Server action for updating product image
// Handles old image deletion and new image upload
```

#### deleteProductAction(prevState)

```typescript
// Server action for deleting a product
// Also deletes associated image from storage
```

### Cart Actions

#### fetchCartItems()

```typescript
const itemCount = await fetchCartItems();
// Returns: number - Number of items in cart
```

#### addToCartAction(prevState, formData)

```typescript
// Server action for adding items to cart
// Creates cart if doesn't exist, updates totals
```

#### updateCartItemAction({ amount, cartItemId })

```typescript
// Server action for updating cart item quantity
```

#### removeCartItemAction(prevState, formData)

```typescript
// Server action for removing item from cart
```

### Favorite Actions

#### fetchFavoriteId({ productId })

```typescript
const favoriteId = await fetchFavoriteId({ productId });
// Returns: string | null - Favorite ID if exists
```

#### toggleFavoriteAction(prevState)

```typescript
// Server action for toggling favorite status
```

#### fetchUserFavorites()

```typescript
const favorites = await fetchUserFavorites();
// Returns: Favorite[] with product data
```

### Review Actions

#### createReviewAction(prevState, formData)

```typescript
// Server action for creating a product review
```

#### fetchProductReviews(productId)

```typescript
const reviews = await fetchProductReviews("product-uuid");
// Returns: Review[] - All reviews for a product
```

#### fetchProductRating(productId)

```typescript
const { rating, count } = await fetchProductRating("product-uuid");
// Returns: { rating: string, count: number }
```

#### deleteReviewAction(prevState)

```typescript
// Server action for deleting a review
```

### Order Actions

#### createOrderAction(prevState, formData)

```typescript
// Server action for creating an order
// Deletes unpaid orders, creates new order
```

#### fetchUserOrders()

```typescript
const orders = await fetchUserOrders();
// Returns: Order[] - All paid orders for user
```

#### fetchAdminOrders()

```typescript
const orders = await fetchAdminOrders();
// Returns: Order[] - All paid orders (admin only)
```

---

## 🔄 How It Works

### Authentication Flow

1. User visits the site
2. Clerk middleware checks authentication status
3. Protected routes require sign-in
4. After sign-in, user session is maintained
5. Admin routes check `ADMIN_USER_ID` match

### Product Management Flow

1. **Create Product:**
   - Admin fills form with product details
   - Image is uploaded to Vercel Blob Storage
   - Image URL is returned and stored in database
   - Product is created with all details

2. **Update Product:**
   - Admin edits product details
   - If image is updated, old image is deleted
   - New image is uploaded and URL updated
   - Product record is updated in database

3. **Delete Product:**
   - Product is deleted from database
   - Associated image is deleted from storage
   - Related favorites, reviews, and cart items are cascade deleted

### Shopping Cart Flow

1. User adds product to cart
2. Cart is created if doesn't exist
3. Cart item is added or quantity updated
4. Cart totals are recalculated (subtotal, tax, shipping, total)
5. Cart persists across sessions per user

### Checkout Flow

1. User clicks checkout from cart
2. Order is created with cart details
3. Stripe checkout session is created via `/api/payment`
4. User completes payment in embedded Stripe checkout
5. After payment, `/api/confirm` is called
6. Order status is updated to `isPaid: true`
7. Cart is deleted
8. User is redirected to orders page

### Image Upload Flow

1. User selects image file
2. File is validated (size, type)
3. Image is uploaded to Vercel Blob Storage using `uploadImage()`
4. Public URL is returned
5. URL is stored in database
6. Image is served from Vercel Blob CDN

### Review System Flow

1. User views product page
2. If user hasn't reviewed, review form is shown
3. User submits rating and comment
4. Review is validated and saved
5. Product rating is recalculated
6. Review appears on product page

---

## ♻️ Reusing Components

### How to Reuse Components in Other Projects

#### 1. Copy Component Files

Simply copy the component file and its dependencies:

```bash
# Example: Reusing the Container component
cp components/global/Container.tsx your-project/components/
```

#### 2. Install Required Dependencies

Check `package.json` for required packages:

```bash
npm install tailwind-merge clsx
```

#### 3. Update Imports

Update import paths to match your project structure:

```typescript
// Before
import Container from "@/components/global/Container";

// After (if using different path)
import Container from "../components/Container";
```

#### 4. Component Usage Examples

##### Container Component

```typescript
import Container from "@/components/global/Container";

export default function MyPage() {
  return (
    <Container className="py-20">
      <h1>My Content</h1>
    </Container>
  );
}
```

##### Form Components

```typescript
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createProductAction } from "@/utils/actions";

export default function CreateForm() {
  return (
    <FormContainer title="Create Item">
      <form action={createProductAction}>
        <FormInput name="name" label="Name" />
        <button type="submit">Submit</button>
      </form>
    </FormContainer>
  );
}
```

##### Product Grid

```typescript
import ProductsGrid from "@/components/products/ProductsGrid";

export default async function ProductsPage() {
  const products = await fetchProducts();
  return <ProductsGrid products={products} />;
}
```

##### Loading States

```typescript
import { Suspense } from "react";
import LoadingContainer from "@/components/global/LoadingContainer";
import ProductsGrid from "@/components/products/ProductsGrid";

export default function ProductsPage() {
  return (
    <Suspense fallback={<LoadingContainer />}>
      <ProductsGrid products={products} />
    </Suspense>
  );
}
```

### Adapting Components

Most components are designed to be reusable. To adapt them:

1. **Update Types:** Modify TypeScript interfaces to match your data structure
2. **Update Actions:** Replace server actions with your own data fetching logic
3. **Update Styling:** Adjust Tailwind classes to match your design system
4. **Remove Dependencies:** Remove Clerk-specific code if not using Clerk

---

## 🚀 Deployment

### Deploying to Vercel

1. **Push to GitHub**

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

1. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click **Add New Project**
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

1. **Configure Environment Variables**
   - Go to **Settings** → **Environment Variables**
   - Add all variables from `.env` and `.env.local`
   - Set for all environments (Production, Preview, Development)

1. **Deploy**
   - Vercel will automatically deploy
   - Your site will be live at `your-project.vercel.app`

### Build Commands

The project includes a custom build script:

```json
{
  "scripts": {
    "build": "npx prisma generate && next build"
  }
}
```

This ensures Prisma Client is generated before building.

### Post-Deployment Checklist

- [ ] All environment variables are set in Vercel
- [ ] Database is accessible from Vercel
- [ ] Stripe keys are set (use production keys)
- [ ] Clerk keys are set
- [ ] Vercel Blob Storage is connected
- [ ] Domain is configured (if using custom domain)
- [ ] Test all major features (cart, checkout, admin)

---

## 🏷️ Keywords

**Technologies:**

- Next.js 14
- React 18
- TypeScript
- Prisma ORM
- NeonDB
- PostgreSQL
- Vercel Blob Storage
- Clerk Authentication
- Stripe Payments
- Tailwind CSS
- shadcn/ui
- Radix UI
- Zod Validation
- Server Actions
- App Router

**Features:**

- E-commerce
- Online Store
- Shopping Cart
- Product Management
- Payment Processing
- User Authentication
- Admin Dashboard
- Product Reviews
- Favorites System
- Image Upload
- Dark Mode
- Responsive Design

**Concepts:**

- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- API Routes
- Server Actions
- Type-Safe Database
- Form Validation
- Error Handling
- Loading States

---

## 🎓 Educational Value

This project demonstrates:

1. **Modern Next.js Patterns:**
   - App Router architecture
   - Server Components vs Client Components
   - Server Actions for mutations
   - API Routes for external integrations

2. **Type Safety:**
   - TypeScript throughout
   - Prisma type generation
   - Zod schema validation

3. **Database Design:**
   - Relational database modeling
   - Cascade deletions
   - Efficient queries

4. **Authentication & Authorization:**
   - Clerk integration
   - Protected routes
   - Role-based access (admin)

5. **Payment Integration:**
   - Stripe embedded checkout
   - Payment confirmation flow
   - Order management

6. **File Storage:**
   - Vercel Blob Storage
   - Image upload handling
   - Public URL generation

7. **UI/UX Best Practices:**
   - Responsive design
   - Dark mode
   - Loading states
   - Error handling
   - Form validation

8. **Code Organization:**
   - Component reusability
   - Separation of concerns
   - Utility functions
   - Type definitions

---

## 📚 Learning Resources

### Next.js

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

### Prisma

- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma with Next.js](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)

### Clerk

- [Clerk Documentation](https://clerk.com/docs)
- [Clerk with Next.js](https://clerk.com/docs/quickstarts/nextjs)

### Stripe

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)

### Vercel Blob

- [Vercel Blob Documentation](https://vercel.com/docs/storage/vercel-blob)

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Database Connection Error

- Verify `DATABASE_URL` and `DIRECT_URL` are correct
- Check if database is accessible
- Ensure SSL mode is set correctly

#### 2. Image Upload Fails

- Verify `BLOB_READ_WRITE_TOKEN` is set
- Check Vercel Blob store is connected
- Ensure token has read/write permissions

#### 3. Authentication Not Working

- Verify Clerk keys are correct
- Check middleware configuration
- Ensure Clerk app is properly configured

#### 4. Stripe Payment Fails

- Verify Stripe keys are correct
- Check API route is accessible
- Ensure return URL is correct

#### 5. Build Fails

- Run `npx prisma generate` before build
- Check all environment variables are set
- Verify all dependencies are installed

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request#   u n i t e d - a f r i c a  
 
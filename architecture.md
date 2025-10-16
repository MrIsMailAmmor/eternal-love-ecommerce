eternal-love/
│
├─ public/
│   ├─ images/
│   └─ favicon.ico
│
├─ app/
│   ├─ layout/                 # Global layouts
│   │   ├─ default.vue
│   │   ├─ auth.vue
│   │   └─ landing.vue
│   │
│   ├─ pages/                  # Feature-driven page routing
│   │   ├─ landing/
│   │   │   └─ index.vue
│   │   ├─ auth/
│   │   │   ├─ login.vue
│   │   │   └─ register.vue
│   │   ├─ products/
│   │   │   ├─ index.vue       # Products list
│   │   │   └─ [id].vue        # Product details
│   │   └─ account/
│   │       └─ profile.vue
│   │
│   ├─ components/             # Reusable UI components (shared across features)
│   │   ├─ ui/                 # Buttons, Inputs, Cards
│   │   ├─ layout/             # Header, Footer, Navbar
│   │   └─ sections/           # Landing sections (Hero, FeaturedCollections, BestSellers)
│   │
│   ├─ features/               # Feature-specific modules (state, composables, components)
│   │   ├─ auth/
│   │   │   ├─ components/     # LoginForm, RegisterForm
│   │   │   ├─ composables/    # useAuth.ts
│   │   │   └─ store/          # auth.store.ts (Pinia)
│   │   │
│   │   ├─ products/
│   │   │   ├─ components/     # ProductCard, ProductList
│   │   │   ├─ composables/    # useProducts.ts, useCart.ts
│   │   │   └─ store/          # products.store.ts, cart.store.ts
│   │   │
│   │   ├─ landing/
│   │   │   ├─ components/     # Hero, FeaturedCollections, Testimonials
│   │   │   └─ composables/    # useFeaturedProducts.ts
│   │   │
│   │   └─ account/
│   │       └─ components/     # ProfileCard, AccountSettings
│   │
│   ├─ composables/            # Global shared composables (theme, toast, modal)
│   │
│   ├─ plugins/                # Nuxt plugins (i18n, Axios, Toast)
│   │
│   └─ types/                  # TypeScript interfaces for features
│       ├─ auth.ts
│       ├─ product.ts
│       └─ order.ts
│
├─ nuxt.config.ts
├─ tailwind.config.ts
├─ package.json
└─ tsconfig.json

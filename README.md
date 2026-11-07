I looked through the repo. This is not “plain JS frontend”; it is a **Vue 3 + Ionic + TypeScript + Pinia + Vite** business app. If you learn in this order, you’ll understand most of what is happening here.

**Priority 0: What This App Is**
1. This is a single page app, not many separate HTML pages.
2. `index.html` loads the app.
3. `src/main.ts` starts Vue, Ionic, Pinia, i18n, router, and mounts the app.
4. `src/App.vue` is the root layout.
5. `src/router/index.ts` decides which screen/page opens for each URL.

**Priority 1: JavaScript Basics**
Learn these first, because they appear everywhere:

1. Variables: `const`, `let`
2. Objects: `{ key: value }`
3. Arrays: `[]`, `.map()`, `.filter()`, `.find()`, `.reduce()`
4. Functions: normal functions and arrow functions
5. Imports/exports: `import`, `export`
6. Conditions: `if`, `else`, ternary `condition ? a : b`
7. Loops, especially array loops
8. Destructuring: `const { x } = obj`
9. Optional chaining: `user?.name`
10. Nullish/default values: `value || ''`, `value ?? fallback`
11. Template strings: `` `orders/${orderId}` ``
12. Promises and async code: `async`, `await`, `try/catch/finally`

These are used heavily in stores, services, views, components, and tests.

**Priority 2: TypeScript Basics**
This repo uses TypeScript, so learn:

1. What types are
2. `string`, `number`, `boolean`, `any`
3. Arrays like `Order[]`
4. Interfaces
5. Type aliases
6. Function return types
7. Union types like `"idle" | "loading" | "loaded" | "error"`
8. Generic-ish syntax you’ll see in Vue/Pinia
9. Why files like `src/types/order.ts` exist

Important folder: `src/types`.

**Priority 3: Vue Single File Components**
Most UI files are `.vue` files. Learn the structure:

1. `<template>`: HTML-like UI
2. `<script setup lang="ts">`: logic
3. `<style scoped>`: CSS for that component
4. Component imports
5. Component props
6. Component events
7. Slots

Good file to study: `src/views/OrderSearch.vue`

**Priority 4: Vue Template Syntax**
Used everywhere in `.vue` files:

1. `{{ value }}` for showing data
2. `v-if` for conditional rendering
3. `v-else`, `v-else-if`
4. `v-for` for lists
5. `:prop="value"` for dynamic props
6. `@click="functionName"` for events
7. `v-model` for two-way form binding
8. `:key` in lists
9. `<slot />` for reusable components

Example file: `src/components/common/SearchFilterCard.vue`

**Priority 5: Vue Reactivity**
This is core frontend logic in this repo:

1. `ref()` for reactive single values
2. `.value` usage
3. `computed()` for derived values
4. `watch()` for reacting to changes
5. `onMounted()` for running code when screen/component opens
6. `onUnmounted()` / `onBeforeUnmount()`
7. `storeToRefs()` for Pinia store state

You’ll see this constantly in `src/views` and `src/components`.

**Priority 6: Ionic Vue**
The UI is built mostly with Ionic components, not raw HTML.

Learn these components:

1. `ion-page`
2. `ion-header`
3. `ion-toolbar`
4. `ion-title`
5. `ion-content`
6. `ion-list`
7. `ion-item`
8. `ion-label`
9. `ion-button`
10. `ion-input`
11. `ion-select`
12. `ion-checkbox`
13. `ion-modal`
14. `ion-popover`
15. `ion-alert`
16. `ion-toast`
17. `ion-infinite-scroll`
18. `ion-progress-bar`
19. `ion-badge`
20. `ion-menu`, `ion-split-pane`

Important folders: `src/views`, `src/components`.

**Priority 7: Routing**
This app has many pages:

1. What a route is
2. Route path: `/orders/:orderId`
3. Route name
4. Route params
5. `router.push()`
6. Route guards: `beforeEnter`
7. Global guards: `router.beforeEach`
8. Redirects
9. Permission checks through route metadata

Main file: `src/router/index.ts`

**Priority 8: Pinia Stores**
This is one of the most important parts of the repo.

Learn:

1. What global state is
2. `defineStore()`
3. `state`
4. `getters`
5. `actions`
6. Calling store actions from views
7. Reading store state in components
8. `storeToRefs()`
9. Persisted state

Important stores:

1. `src/store/user.ts`: login/user/profile/permissions
2. `src/store/order.ts`: order search and workflow queues
3. `src/store/orderDetail.ts`: full order detail screen data
4. `src/store/customer.ts`: customer detail
5. `src/store/orderTask.ts`: task queues
6. `src/store/seed.ts`: reference data like statuses/enums/geo
7. `src/store/productStore.ts`: selected product store
8. `src/store/productCache.ts`: cached product data

**Priority 9: API Calls**
The frontend talks to backend APIs.

Learn:

1. HTTP basics: GET, POST, PUT
2. Request params
3. Request body/data
4. Response objects
5. Error handling with `try/catch`
6. Loading states
7. API wrapper usage: `api({ url, method, params, data })`
8. Solr search payloads
9. Normalizing backend data into frontend data

Important folders:

1. `src/services`
2. `src/composables`
3. `src/store`

Good files:

1. `src/services/order.ts`
2. `src/composables/useOrderDetail.ts`
3. `src/services/customer.ts`
4. `src/services/OrderService.ts`

**Priority 10: App Folder Structure**
Learn what each folder means:

1. `src/views`: full pages/screens
2. `src/components`: reusable UI pieces
3. `src/components/common`: generic shared UI
4. `src/components/orders`: order-specific UI
5. `src/components/tasks`: task cards/modals
6. `src/components/fulfillment`: facility/shipping/routing UI
7. `src/components/inventory`: inventory UI
8. `src/components/settings`: settings UI
9. `src/components/layout`: app menu/layout
10. `src/store`: Pinia global state
11. `src/services`: backend/API logic
12. `src/composables`: reusable Vue logic
13. `src/utils`: helper functions
14. `src/types`: TypeScript data shapes
15. `src/router`: navigation
16. `src/locales`: translations
17. `src/theme`: CSS variables and app styling
18. `src/authorization`: permission constants
19. `src/dev`: development-only helpers
20. `tests`: unit tests
21. `docs`: project notes/design/API docs
22. `scripts`: API probing/seeding/helper scripts

**Priority 11: Components vs Views**
Very important distinction:

1. A `view` is usually a full screen/page.
2. A `component` is a reusable piece inside a page.
3. A modal is also a component.
4. Views call stores and compose components.
5. Components receive `props`, emit events, and sometimes call stores/services.

Example:

1. `OrderSearch.vue` is a page.
2. `SearchFilterCard.vue` is a reusable component.
3. `EditShippingMethodModal.vue` is a modal component.

**Priority 12: Props and Events**
Used in components:

1. `defineProps`
2. `defineEmits`
3. Passing data from parent to child
4. Sending events from child to parent
5. `v-model` on custom components
6. Slots

Study common components first: `src/components/common`.

**Priority 13: Forms and UI State**
Heavily used here:

1. Search inputs
2. Filters
3. Date filters
4. Select dropdowns
5. Checkboxes
6. Bulk selection
7. Modal forms
8. Loading indicators
9. Empty states
10. Error states
11. Toasts
12. Alerts/confirmation dialogs

Good pages:

1. `OrderSearch.vue`
2. `WorkflowOrderList.vue`
3. `CreateOrder.vue`
4. `CustomerDetail.vue`
5. `OrderDetail.vue`

**Priority 14: Permissions and Auth**
This repo checks what the user can access.

Learn:

1. Login state
2. Auth guard
3. Route permissions
4. `hasPermission()`
5. Permission constants
6. Conditional UI based on permission

Files:

1. `src/router/index.ts`
2. `src/store/user.ts`
3. `src/authorization/permissions.ts`

**Priority 15: Data Transformation**
A lot of frontend logic here is reshaping backend data.

Learn:

1. Mapping raw API data into UI objects
2. Grouping data
3. Summing totals
4. Filtering lists
5. Sorting
6. Creating lookup maps like `{ [id]: item }`
7. Handling missing backend fields safely

This is heavy in:

1. `src/store/orderDetail.ts`
2. `src/store/customer.ts`
3. `src/services/OrderService.ts`
4. `src/services/order.ts`

**Priority 16: Async Patterns**
Used constantly:

1. Loading flags
2. Error strings
3. `try/catch/finally`
4. `Promise.all`
5. `Promise.allSettled`
6. Debouncing search with `setTimeout`
7. Infinite scroll pagination
8. Refreshing data after mutation

**Priority 17: CSS**
You don’t need advanced CSS first, but learn:

1. Class selectors
2. Flexbox
3. CSS variables
4. Scoped styles in Vue
5. Ionic CSS variables
6. Responsive CSS with `@media`
7. Layout spacing

Files:

1. `src/theme/variables.css`
2. `src/theme/work-card.css`
3. component `<style scoped>` blocks

**Priority 18: Vite and Build Tooling**
Learn after you understand app code:

1. What Vite does
2. `npm run dev`
3. `npm run build`
4. Path aliases: `@` means `src`
5. `@common` points to shared code outside this app
6. Environment variables: `import.meta.env`
7. `vite.config.js`

File: `vite.config.js`

**Priority 19: Internationalization**
The app uses translations.

Learn:

1. `translate('text')`
2. Locale JSON files
3. Dynamic translated strings
4. `src/locales/en-US.json`
5. `src/locales/es-ES.json`

**Priority 20: Testing**
Tests exist for stores, components, views, utils, router, and services.

Learn:

1. What unit tests are
2. Vitest basics
3. `describe`, `it`, `expect`
4. Mocking APIs/stores
5. Reading tests to understand intended behavior

Important folder: `tests`.

**Priority 21: Domain Knowledge**
Once frontend basics make sense, learn the business concepts:

1. Orders
2. Order detail
3. Returns
4. Customers
5. Ship groups
6. Shipments
7. Facilities
8. Product stores
9. Inventory
10. Fraud tasks
11. Hold tasks
12. Bad address tasks
13. Swap orders
14. Brokering
15. Fulfillment timeline
16. Seed/reference data
17. Permissions

Docs folder helps here, especially:

1. `docs/Scope.md`
2. `docs/DataModel.md`
3. `docs/OrderDetailStore.md`
4. `docs/OrderDetailDataBinding.md`
5. `docs/API_REQUIREMENTS.md`

**Best Learning Order For You**
1. JavaScript basics
2. TypeScript basics
3. Vue `.vue` files
4. Vue template syntax
5. Vue reactivity: `ref`, `computed`, `watch`, `onMounted`
6. Ionic components
7. Router
8. Pinia stores
9. API calls
10. Folder structure
11. Props/events/components
12. Async loading/error handling
13. Forms and modals
14. Permissions
15. Data transformation
16. CSS basics
17. Tests
18. Domain/business logic

If you want a practical path through this exact repo, start by reading these in order:

1. `src/main.ts`
2. `src/App.vue`
3. `src/router/index.ts`
4. `src/views/OrderSearch.vue`
5. `src/store/order.ts`
6. `src/services/order.ts`
7. `src/components/common/SearchFilterCard.vue`
8. `src/store/orderDetail.ts`
9. `src/views/OrderDetail.vue`

That path will teach you the app’s skeleton first, then one real feature end-to-end.

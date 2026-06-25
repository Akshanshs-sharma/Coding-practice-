Got it. Here's the balanced version — theory + code together for every concept:

---

# JavaScript Fundamentals — Day 1 Notes

---

## 1. Variables

A variable is a named container in memory that holds a value. In Java you declare the type explicitly like `int age = 22`. In JavaScript you just declare the container and JS figures out the type automatically.

JavaScript has three keywords — `const`, `let`, `var`.

**const** — value cannot be reassigned. Use this by default.
```js
const name = "Akshansh"
const age = 22
name = "Someone"  // ❌ ERROR — cannot reassign const
```

**let** — value can be reassigned. Use only when value needs to change.
```js
let score = 0
score = 10  // ✅ allowed
```

**var** — old way, never use it. Has buggy scoping behavior explained later.
```js
var phoneNumber = 1234567890  // works but avoid entirely
```

| | Reassign? | Block scoped? | Use it? |
|---|---|---|---|
| `const` | ❌ No | ✅ Yes | ✅ Default choice |
| `let` | ✅ Yes | ✅ Yes | ✅ When value changes |
| `var` | ✅ Yes | ❌ No | ❌ Never |

---

## 2. Printing Output

Like `System.out.println` in Java.
```js
console.log("Hello")
console.log(name, age)    // print multiple values at once
```

---

## 3. Template Strings

In Java string concatenation with `+` gets messy. JavaScript has a cleaner alternative — template strings. Written with backticks (key above Tab), variables embedded using `${}`.

```js
const name = "Akshansh"
const age = 22

// old way — messy
console.log("My name is " + name + " and I am " + age + " years old")

// modern way — use this always
console.log(`My name is ${name} and I am ${age} years old`)
```

Common mistake — using regular quotes makes `${}` print literally:
```js
console.log("My name is ${name}")   // prints: My name is ${name}
console.log(`My name is ${name}`)   // prints: My name is Akshansh
```

Used in your codebase like this:
```js
`orders/${orderId}`          // building API URLs
`${firstName} ${lastName}`   // displaying full names
```

---

## 4. Data Types

JavaScript has basic types. Unlike Java you never write the type when declaring — JS infers it from the value.

```js
const name = "Akshansh"   // string — any text
const age = 22             // number — JS has no int/float/double separation
const isPaid = false       // boolean — true or false
const nothing = null       // null — intentionally empty, you set this yourself
const notSet = undefined   // undefined — declared but never assigned, JS sets this
```

Check type at runtime using `typeof`:
```js
console.log(typeof "hello")    // "string"
console.log(typeof 42)         // "number"
console.log(typeof true)       // "boolean"
```

JavaScript does automatic type conversion which causes bugs:
```js
console.log("5" + 2)    // "52" — treated as string, not math!
console.log("5" - 2)    // 3   — treated as math
console.log("5" * 2)    // 10  — treated as math
```

This unpredictable behavior is one reason TypeScript exists — it catches these mistakes before the code runs.

You can manually convert types:
```js
const str = "42"
const num = Number(str)     // "42" → 42
const num2 = parseInt(str)  // "42" → 42

const n = 42
const s = String(n)         // 42 → "42"
const s2 = n.toString()     // 42 → "42"
```

---

## 5. Scoping

Scope defines where a variable is accessible from. JavaScript has three levels — file, function, and block — each nested inside the other.

**File scope** — declared at top level, accessible everywhere in the file.
**Function scope** — declared inside a function, accessible only inside that function.
**Block scope** — declared inside `{}`, accessible only inside that block.

```js
const a = 10              // file scope — available everywhere

function doSomething() {
    const b = 20          // function scope — only inside this function

    if (true) {
        const c = 30      // block scope — only inside this if block

        console.log(a)    // ✅ file scope visible here
        console.log(b)    // ✅ function scope visible here
        console.log(c)    // ✅ own block visible
    }

    console.log(a)        // ✅ works
    console.log(b)        // ✅ works
    console.log(c)        // ❌ ERROR — block ended, c is gone
}

console.log(a)            // ✅ works
console.log(b)            // ❌ ERROR — function ended, b is gone
```

This is identical to Java. The only difference is `var` which ignores block boundaries:

```js
if (true) {
    var x = 10            // leaks out of block
    let y = 20            // stays inside block
}

console.log(x)            // ✅ 10 — var leaked out
console.log(y)            // ❌ ERROR — let respected block
```

Java has nothing like `var` — Java variables always respect their block. This leaking behavior is exactly why `var` causes bugs and was replaced.

---

## 6. Scope Chain

When JS looks for a variable it searches upward through scopes until it finds it or runs out:

```
current block → parent block → function → file → ERROR
```

```js
const a = 10

function test() {
    if (true) {
        // no a declared here or in function
        console.log(a)    // ✅ walks up chain, finds file scope a = 10
    }
}
```

Think of it like a person asking "do I have this?" — if not, ask the parent, then grandparent, until someone has it or nobody does.

---

## 7. Shadowing

When you declare a variable with the same name in an inner scope, it hides the outer variable temporarily. The outer variable is NOT changed — it just becomes invisible inside that inner scope.

```js
const a = 10              // outer a

if (true) {
    const a = 20          // inner a — shadows outer a inside this block
    console.log(a)        // 20 — sees inner a
}

console.log(a)            // 10 — outer a unchanged, inner a is gone
```

Java does NOT allow this — redeclaring same variable name in same function scope is a compile error in Java. JS allows it with `const` and `let`.

---

## 8. Temporal Dead Zone (TDZ)

When JS enters a block, it scans ahead and reserves all `const`/`let` variable names for that block. But those variables are not usable until their actual declaration line is reached. The gap between block start and declaration line is called the Temporal Dead Zone.

```js
const a = 10

if (true) {
    console.log(a)    // ❌ ERROR — TDZ!
                      // JS reserved 'a' for this block but it's not ready yet
                      // outer a is blocked out
    const a = 20      // a becomes ready here
    console.log(a)    // ✅ 20
}
```

`var` has no TDZ but gives `undefined` instead, which is also confusing:
```js
if (true) {
    console.log(x)    // undefined — no error, but not 10 either
    var x = 10
    console.log(x)    // 10
}
```

Simple rule — always declare before you use. TDZ never affects you then.

---

## 9. Cross-file Scope — Export and Import

JS does not automatically share variables across files. You must explicitly mark what is public using `export`, and explicitly bring it in using `import`. Everything not exported is private to that file.

```js
// user.js
const userName = "Akshansh"     // not exported — private to this file
export const age = 22           // exported — other files can use this
```

```js
// main.js
import { age } from './user.js'
console.log(age)         // ✅ 22
console.log(userName)    // ❌ ERROR — was never exported
```

| JS | Java equivalent |
|---|---|
| `export` | `public` |
| not exported | `private` |
| `import` | using another class's public method |

This is how every file in your codebase communicates. Example from your actual repo:
```js
// src/services/order.ts
export const fetchOrders = async () => { ... }

// src/store/order.ts
import { fetchOrders } from '@/services/order'
```

---

## 10. Objects

An object stores related data as key-value pairs. Think of it like a `HashMap<String, Object>` in Java, or like a single row of data where each column has a name.

Objects are one of the most important concepts in JavaScript — almost every piece of data in your codebase is an object or a collection of objects.

**Creating an object** — wrap key-value pairs in `{}`, separated by commas:
```js
const order = {
    orderId: "HC14",
    customerName: "Akshansh Sharma",
    amount: 1000,
    quantity: 2
}
```

**Reading values** — use dot notation normally, bracket notation when the key is dynamic:
```js
console.log(order.orderId)          // HC14
console.log(order.customerName)     // Akshansh Sharma

const key = "amount"
console.log(order[key])             // 1000 — bracket notation for dynamic keys
```

**Updating and adding keys** — even `const` objects allow this because `const` locks the reference, not the contents:
```js
order.amount = 2000           // update existing key
order.status = "Pending"      // add brand new key dynamically
```

This is like `final` in Java — the reference is locked but the object's contents can change:
```java
final Order order = new Order();
order.setAmount(2000);    // ✅ allowed
order = new Order();      // ❌ ERROR — final reference
```

**Nested object** — an object inside another object, accessed by chaining dots:
```js
order.address = {
    street: "123 Main St",
    city: "Brooklyn",
    state: "NY",
    zipCode: "11201"
}

console.log(order.address.city)      // Brooklyn
console.log(order.address.zipCode)   // 11201
```

**Array of objects inside an object** — a list where each item is itself an object. Array index starts at 0:
```js
order.items = [
    { productId: "P001", productName: "Laptop", price: 1000, quantity: 2 },
    { productId: "P002", productName: "Mouse",  price: 20,   quantity: 1 }
]

console.log(order.items[0].productName)   // Laptop — first item
console.log(order.items[1].productName)   // Mouse  — second item
```

A real order object in your codebase looks almost identical to what you built:
```js
// src/types/order.ts
{
    orderId: "HC14",
    customer: {
        name: "Akshansh",
        address: { city: "Indore" }
    },
    items: [
        { productId: "P001", quantity: 2 }
    ],
    status: "PENDING"
}
```

---

**What's next:** Arrays and array methods — `.map()`, `.filter()`, `.find()`, `.reduce()`. These are used in almost every file in your codebase to process lists of orders, items, and customers.

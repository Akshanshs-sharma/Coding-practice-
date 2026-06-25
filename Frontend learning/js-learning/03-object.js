const order = {
    orderId: "HC14",
    customerName: "Akshansh Sharma",
    amount: 1000,
    quantity:2
}

console.log(order)

console.log(order.orderId)
console.log(order.customerName)
console.log(order.amount)
console.log(order.quantity)

order.status = "Pending"

console.log(order)

order.address = {
    street: "123 Main St",
    city: "Brooklyn",
    state: "NY",
    zipCode: "11201" 
}

console.log(order)

order.items = [ 
    {
        productId: "P001",
        productName: "Laptop",
        price: 1000,
        quantity: 2
    },
    {
        productId: "P002",
        productName: "Mouse",
        price: 20,
        quantity: 1
    }
]

console.log(order)

order.items[2] = {
    productId: "P003",
    productName: "Keyboard",
    quantity: 1
}
console.log(order.items[2].productName)

order.amount = order.items[0].price * order.items[0].quantity + order.items[1].price * order.items[1].quantity + order.items[2].price * order.items[2].quantity

console.log(order)
const order = {
    orderId: "HC14",
    customerName: "Akshansh Sharma",
    amount: 1000,
    quantity:2
}

const { orderId , customerName , amount , quantity } = order 

console.log(orderId)
console.log(customerName)
console.log(amount)
console.log(quantity)

const { orderId : id , customerName : name , amount : totalAmount , quantity : totalQuantity } = order

console.log(id)
console.log(name)
console.log(totalAmount)
console.log(totalQuantity)

const { status = "Pending" } = order

console.log(status)

const { address : orderAddress = { street: "123 Main St", city: "Brooklyn", state: "NY", zipCode: "11201" } } = order

console.log(orderAddress)

console.log(order.address)

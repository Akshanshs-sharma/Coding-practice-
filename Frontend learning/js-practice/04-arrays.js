
// an array is an ordered list of values
const statuses = ["PENDING", "SHIPPED", "DELIVERED"]
const prices = [1000, 20, 50]

// array of objects — most common in your codebase
const orders = [
    { orderId: "HC14", amount: 1000, status: "PENDING",   isPaid: false },
    { orderId: "HC15", amount: 500,  status: "SHIPPED",   isPaid: true  },
    { orderId: "HC16", amount: 750,  status: "DELIVERED", isPaid: true  },
    { orderId: "HC17", amount: 300,  status: "PENDING",   isPaid: false }
]


console.log(orders[1].length)
console.log(orders.length)

statuses.push("CANCELLED")

statuses.splice(1,0,"RETURNED")  // insert "RETURNED" at index 1

console.log(statuses)

console.log(statuses.length)

prices.pop()
prices.pop()
console.log(prices.pop())
prices.pop()

const newLength = statuses.push("RETURNED")
console.log(newLength)   // 5



//  .map() method is used to create a new array by transforming each element of the original array

const orderIdsAndStatuses = orders.map( (order) => { 
            return { 
                    id : order.orderId,
                    status : order.status
            } 
}) 

console.log(orderIdsAndStatuses)


// .filter() method is used to create a new array containing only the elements that satisfy a certain condition

const pendingOrders = orders.filter( (order) => order.status === "PENDING" )
console.log(pendingOrders)


const pendingOrders1 = orders.filter( (order) => order.status === "Pending" )
console.log(pendingOrders1)


const pendingOrderIds = orders
                            .filter( (order) => order.status === "PENDING" )
                            .map( (filteredOrder) => filteredOrder.orderId )

console.log(pendingOrderIds)

// .find() method is used to find the first element in an array that satisfies a certain condition

const firstAmountLessThan500 = orders.find((order) => order.amount < 500).orderId
console.log(firstAmountLessThan500)

const firstAmountGreaterThan1000 = orders.find((order) => order.amount > 1000)?.orderId

if(firstAmountGreaterThan1000 != undefined && firstAmountGreaterThan1000 != null) {
    console.log(firstAmountGreaterThan1000)
} else {
    console.log("No order found with amount greater than 1000")
}

console.log(firstAmountGreaterThan1000)


console.log(null == undefined)  // true
console.log(null === undefined) // false


// .reduce() method is used to reduce an array to a single value by applying a function to each element of the array

const totalAmount = orders.reduce( ((currentTotal, order) => currentTotal + order.amount ), 0)

console.log(totalAmount) 

const kaddu = orders.reduce( ((currentTotal, order) => currentTotal + order.amount ), "kaddu")

console.log(kaddu)

const totalAmountOfOrderGreaterThan500 = orders.filter( (order) => order.amount > 500).reduce( ((currentTotal,order) => currentTotal + order.amount),0)

console.log(totalAmountOfOrderGreaterThan500)
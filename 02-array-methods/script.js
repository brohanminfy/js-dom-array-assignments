// script.js
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];
//easy
const inStockProducts = products.filter((product)=>{
    return product["inStock"]===true
})
console.log("////////////////////////// Easy-1 ///////////////")

console.log(inStockProducts)

const bookProducts = products.filter((product)=>{
    return product["category"]==="Books"
})
console.log("////////////////////////// Easy-2 ///////////////")

console.log(bookProducts)

//medium 

const productNames = products.map((product)=>{
    return product["name"]
})
console.log("////////////////////////// Medium-1 ///////////////")

console.log(productNames)

const productNamePrice = products.map((product)=>{
    return `${product['name']} - $${product['price']}`
})

console.log("////////////////////////// Medium-2 ///////////////")

console.log(productNamePrice)

//hard

const totalPrice = products.reduce((totalSum,current)=>{
    return totalSum+current['price']
},0)
console.log("////////////////////////// Hard-1 ///////////////")

console.log(totalPrice)

const filteredProducts = products.filter((product)=>{
    return product['category']==="Electronics" && product['inStock']===true
})

const electronicsName = filteredProducts.map((product)=>{
    return product['name']
})
console.log("////////////////////////// Hard-2 ///////////////")

console.log(electronicsName)
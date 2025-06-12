const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];
//easy
const productList = document.getElementById("product-list")
const productName = products.map((product)=>{
    return `<li>${product["name"]}</li>`
})
// console.log(productName)
productList.innerHTML = productName.join('')

//medium
const productNamePrice = products.map((product)=>{
    return `<li class="product-item"> <h3>${product["name"]}</h3><p>$${product["price"]}</p></li>`
})
productList.innerHTML = productNamePrice.join('')

//hard

productList.innerHTML="" 

products.forEach((product)=>{
   const listElement =  document.createElement('li')
   const headerProduct = document.createElement('h3')
   const priceProduct = document.createElement('p')
   headerProduct.textContent= product['name']
   priceProduct.textContent = `$${product['price']}`
    if(product['inStock']===false){
   listElement.classList.add('out-of-stock')
    }
   switch(product['category']){
    case "Electronics":
        listElement.classList.add('category-electronics')
        break
    case "Books":
        listElement.classList.add('category-books')
   }
    listElement.classList.add()
   listElement.append(headerProduct)
   listElement.append(priceProduct)
   productList.append(listElement)
})

const mainElement = document.getElementById("app-container")
const summaryProducts = document.createElement('div')

const totalSum = products.reduce((sum,current)=>{
    if(current['inStock']===true){
    return sum + current['price']
    }
    else{
        return sum
    }
},0)

summaryProducts.innerHTML=`<b>Total Value of In-Stock Items: $${totalSum} </b>`
summaryProducts.classList.add("summary")
mainElement.append(summaryProducts)
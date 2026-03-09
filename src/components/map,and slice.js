// let numbers = [1,2,3,4,5,6]
// numbers.slice(0,3)
// console.log  (numbers)
// // console.log(numbers)



const products = [
  { id: 1, name: "Shirt", price: 20 },
  { id: 2, name: "Shoes", price: 50 },
  { id: 3, name: "Watch", price: 100 },
  { id: 4, name: "Bag", price: 80 },
  { id: 5, name: "Hat", price: 15 },
];


const latestProducts = products=products.slice(0,3)

console.log("Latest Products")
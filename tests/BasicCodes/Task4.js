let products = [
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 800, quantity: 1 },
  { name: "Monitor", price: 15000, quantity: 1 }
];

console.log('---------------------------');

// Calculate total cost of each product
for (let i = 0; i < products.length; i++) {
  let totalCost = products[i].price * products[i].quantity;
  console.log(products[i].name + " total:", totalCost);
}

console.log('---------------------------');

// Calculate grand total
let grandTotal = 0;

for (let i = 0; i < products.length; i++) {
  grandTotal += products[i].price * products[i].quantity;
}

console.log("Grand Total:", grandTotal);

console.log('---------------------------');

// Find most expensive product
let mostExpensive = products[0];

for (let i = 1; i < products.length; i++) {
  if (products[i].price > mostExpensive.price) {
    mostExpensive = products[i];
  }
}

console.log("Most expensive product:", mostExpensive.name);
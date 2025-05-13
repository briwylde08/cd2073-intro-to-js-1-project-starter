// Products offered in the Fruit Stand

const products = [
  {
    name: "Cherry",
    price: 4.65,
    quantity: 0,
    productId: 5,
    image: "../images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 1.49,
    quantity: 0,
    productId: 7,
    image: "../images/orange.jpg"
  },
  {
    name: "Strawberry",
    price: 8.64,
    quantity: 0,
    productId: 9,
    image: "../images/strawberry.jpg"
  }
];

// Hold items in the cart

const cart = [];

// Add products to cart

function addProductToCart(productId) {
  let product = products.find(function(product) {
    return product.productId === productId;
  });

  if (!product) return;
  product.quantity += 1;

  if (!cart.includes(product)) {
    cart.push(product);
  }
}

// Increase quantity of products already in the cart

function increaseQuantity(productId) {
  const product = products.find(function(product) {
    return product.productId === productId;
  });

  if (!product) return;
  ++product.quantity;
}

// Decrease quantity of products in the cart
// If quantity is 0, remove the product from the cart

function decreaseQuantity(productId) {
  const product = products.find(function(product) {
    return product.productId === productId;
  });

  if (!product) return;
  --product.quantity;

  if (product.quantity === 0) {
    removeProductFromCart(productId);
  }
}

// Remove the product from the cart regardless of quantity

function removeProductFromCart(productId) {
  const cartSlot = cart.findIndex(function(product) {
    return product.productId === productId;
  });

  if (cartSlot !== -1) {
    cart[cartSlot].quantity = 0;
    cart.splice(cartSlot, 1);
  }
}

// Calculate & return grand total of the cart

function cartTotal() {
  let totalPrice = 0;
  
  for (let b = 0; b < cart.length; b++) {
    totalPrice += cart[b].quantity * cart[b].price;
    }
  return totalPrice;
}

//Process payment and return remaining balance

function pay(amount) {
  const total = cartTotal();
  const remainingBalance = amount - total;
  return remainingBalance;
}

//Empty the cart

function emptyCart() {
  cart.length = 0;
  totalPaid = 0;
}

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}

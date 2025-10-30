// cart.js
// Load cart from localStorage if exists
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product) {
  const existing = cart.find(item => item.name === product.name);
  if(existing) {
    existing.qty += 1;
  } else {
    cart.push({...product, qty: 1});
  }
  saveCart();
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function renderCart() {
  const tbody = $("#cartItems");
  tbody.empty();
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    tbody.append(`
      <tr>
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>${item.qty}</td>
        <td>$${itemTotal}</td>
        <td><button class="btn btn-sm btn-danger remove-btn" data-index="${index}">Remove</button></td>
      </tr>
    `);
  });

  $("#cartTotal").text(total);

  // Remove button event
  $(".remove-btn").click(function() {
    const index = $(this).data("index");
    removeFromCart(index);
  });
}

// Add to cart button events
$(document).ready(function() {
  // Render cart on page load (works in cart.html)
  renderCart();

  // Checkout button
$(document).ready(function() {
    $("#checkoutBtn").click(function() {
      if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      // Example behavior: alert total and clear cart
      const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      alert(`Thank you for your purchase! Total: $${total}`);
      
      // Clear cart
      cart = [];
      saveCart();
      renderCart();
    });
  });

  $(".add-to-cart").click(function() {
    const card = $(this).closest('.card');
    const name = card.find('.card-title').text();
    const price = parseFloat(card.find('.fw-bold').text().replace('$',''));
    addToCart({name, price});
    alert(`${name} added to cart!`);
  });
});
let cart = [];
window.onload = function(){
  const lsjson = this.localStorage.getItem('cart');
  if (lsjson){
    cart = JSON.parse(lsjson);
    renderCart();
  }
}

function addToCart(name, price,id) {
  cart.push({ name, price,id });
  saveCart();
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;

      const div = document.createElement('div');
      div.classList.add('cart-item');
      div.innerHTML = `
        <span>${item.name} - $${item.price.toFixed(2)}</span>
        <button onclick="removeFromCart(${index})">✕</button>
      `;
      cartItemsContainer.appendChild(div);
    });

    cartTotalContainer.textContent = `Total: $${total.toFixed(2)} per person`;
  }
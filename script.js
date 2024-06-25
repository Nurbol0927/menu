let totalPrice = 0;

function addToCart(button) {
    const dish = button.parentElement;
    const price = parseInt(dish.getAttribute('data-price'));
    const name = dish.querySelector('p').textContent;
    
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    cartItem.textContent = name + ' - ' + price + ' Som.';
    cartItems.appendChild(cartItem);
    
    totalPrice += price;
    document.getElementById('total-price').textContent = totalPrice;
}

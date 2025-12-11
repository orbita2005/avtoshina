// Shopping cart functionality
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
});

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartEmpty = document.getElementById('cart-empty');
    const cartContent = document.getElementById('cart-content');
    const cartItems = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        if (cartEmpty) cartEmpty.style.display = 'block';
        if (cartContent) cartContent.style.display = 'none';
        return;
    }
    
    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartContent) cartContent.style.display = 'block';
    
    if (cartItems) {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">🛞</div>
                <div class="cart-item-info">
                    <h3>${item.tireName}</h3>
                    <p>O'lcham: ${item.tireSize}</p>
                    <p>Mavsum: ${item.tireSeason}</p>
                    <div class="cart-item-price">${item.price.toLocaleString()} so'm</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    O'chirish
                </button>
            </div>
        `).join('');
    }
    
    updateCartSummary(cart);
}

function updateCartSummary(cart) {
    const totalItems = cart.length;
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    
    const totalItemsEl = document.getElementById('total-items');
    const totalPriceEl = document.getElementById('total-price');
    
    if (totalItemsEl) totalItemsEl.textContent = totalItems;
    if (totalPriceEl) totalPriceEl.textContent = totalPrice.toLocaleString() + ' so\'m';
}

function removeFromCart(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    loadCart();
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(el => {
        el.textContent = cart.length;
    });
}

function checkout() {
    if (!isLoggedIn()) {
        alert('Iltimos, avval tizimga kiring!');
        window.location.href = 'login.html';
        return;
    }
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Savat bo\'sh!');
        return;
    }
    
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const order = {
        id: Date.now(),
        date: new Date().toLocaleString('uz-UZ'),
        items: cart,
        total: totalPrice,
        status: 'Yangi'
    };
    
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart
    localStorage.removeItem('cart');
    
    alert('Buyurtmangiz qabul qilindi! Jami: ' + totalPrice.toLocaleString() + ' so\'m');
    window.location.href = 'orders.html';
}

function isLoggedIn() {
    return !!localStorage.getItem('currentUser');
}


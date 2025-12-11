// Orders functionality
document.addEventListener('DOMContentLoaded', function() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }
    
    loadOrders();
});

function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const ordersEmpty = document.getElementById('orders-empty');
    const ordersList = document.getElementById('orders-list');
    
    if (orders.length === 0) {
        if (ordersEmpty) ordersEmpty.style.display = 'block';
        if (ordersList) ordersList.style.display = 'none';
        return;
    }
    
    if (ordersEmpty) ordersEmpty.style.display = 'none';
    if (ordersList) {
        ordersList.style.display = 'block';
        ordersList.innerHTML = orders.reverse().map(order => `
            <div class="order-card">
                <div class="order-header">
                    <div>
                        <span class="order-id">Buyurtma #${order.id}</span>
                        <div class="order-date">${order.date}</div>
                    </div>
                    <div>
                        <span style="background: #10b981; color: white; padding: 0.5rem 1rem; border-radius: 5px;">
                            ${order.status}
                        </span>
                    </div>
                </div>
                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-item">
                            <span>${item.tireName} (${item.tireSize})</span>
                            <span>${item.price.toLocaleString()} so'm</span>
                        </div>
                    `).join('')}
                </div>
                <div class="order-total">
                    <span>Jami:</span>
                    <span>${order.total.toLocaleString()} so'm</span>
                </div>
            </div>
        `).join('');
    }
}

function isLoggedIn() {
    return !!localStorage.getItem('currentUser');
}

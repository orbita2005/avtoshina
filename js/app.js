// General app functionality
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    checkAuth();
    loadPopularCars();
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(el => {
        el.textContent = cart.length;
    });
}

function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    const authLinks = document.getElementById('auth-links');
    const userLinks = document.getElementById('user-links');
    const usernameDisplay = document.getElementById('username-display');
    
    if (currentUser) {
        const user = JSON.parse(currentUser);
        if (authLinks) authLinks.style.display = 'none';
        if (userLinks) userLinks.style.display = 'block';
        if (usernameDisplay) usernameDisplay.textContent = user.name;
    } else {
        if (authLinks) authLinks.style.display = 'block';
        if (userLinks) userLinks.style.display = 'none';
    }
}

function loadPopularCars() {
    const popularCarsContainer = document.getElementById('popular-cars');
    if (!popularCarsContainer) return;
    
    const cars = getCarsData();
    const popularCars = cars.slice(0, 6);
    
    popularCarsContainer.innerHTML = popularCars.map(car => `
        <div class="car-card" onclick="selectCar(${car.id})">
            <div class="car-image">🚗</div>
            <div class="car-info">
                <h3>${car.brand} ${car.model}</h3>
                <p>${car.type}</p>
                <span class="car-year">${car.year} yil</span>
            </div>
        </div>
    `).join('');
}

function selectCar(carId) {
    localStorage.setItem('selectedCar', carId);
    window.location.href = 'tires.html';
}

function getCarsData() {
    return JSON.parse(localStorage.getItem('carsData')) || [];
}

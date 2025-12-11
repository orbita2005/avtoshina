// Tires display functionality
document.addEventListener('DOMContentLoaded', function() {
    loadTires();
});

function loadTires() {
    const selectedCarId = localStorage.getItem('selectedCar');
    const noSelection = document.getElementById('no-selection');
    const tiresContainer = document.getElementById('tires-container');
    const carInfo = document.getElementById('selected-car-info');
    
    if (!selectedCarId) {
        if (noSelection) noSelection.style.display = 'block';
        if (tiresContainer) tiresContainer.style.display = 'none';
        return;
    }
    
    const cars = JSON.parse(localStorage.getItem('carsData')) || [];
    const car = cars.find(c => c.id == selectedCarId);
    
    if (car && carInfo) {
        carInfo.textContent = `${car.brand} ${car.model} (${car.year}) - Mos Shinalar`;
    }
    
    const tiresData = JSON.parse(localStorage.getItem('tiresData')) || {};
    const tires = tiresData[selectedCarId] || [];
    
    if (noSelection) noSelection.style.display = 'none';
    if (tiresContainer) {
        tiresContainer.style.display = 'grid';
        tiresContainer.innerHTML = tires.map(tire => `
            <div class="tire-card">
                <div class="tire-image">🛞</div>
                <div class="tire-info">
                    <h3>${tire.name}</h3>
                    <div class="tire-specs">
                        <p><strong>O\'lcham:</strong> ${tire.size}</p>
                        <p><strong>Mavsum:</strong> ${tire.season}</p>
                    </div>
                    <div class="tire-price">${tire.price.toLocaleString()} so'm</div>
                    <div class="tire-actions">
                        <button class="btn-add-cart" onclick="addToCart(${tire.id}, ${selectedCarId})">
                            Savatga qo'shish
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function addToCart(tireId, carId) {
    if (!isLoggedIn()) {
        alert('Iltimos, avval tizimga kiring!');
        window.location.href = 'login.html';
        return;
    }
    
    const tiresData = JSON.parse(localStorage.getItem('tiresData')) || {};
    const tires = tiresData[carId] || [];
    const tire = tires.find(t => t.id === tireId);
    
    if (!tire) return;
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = {
        id: Date.now(),
        tireId: tire.id,
        tireName: tire.name,
        tireSize: tire.size,
        tireSeason: tire.season,
        price: tire.price,
        carId: carId
    };
    
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(el => {
        el.textContent = cart.length;
    });
    
    alert('Shina savatga qo\'shildi!');
}

function isLoggedIn() {
    return !!localStorage.getItem('currentUser');
}


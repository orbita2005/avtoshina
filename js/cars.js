// Cars data and functionality
const carsData = [
    { id: 1, brand: 'Toyota', model: 'Camry', type: 'Sedan', year: 2020 },
    { id: 2, brand: 'Toyota', model: 'RAV4', type: 'SUV', year: 2021 },
    { id: 3, brand: 'Toyota', model: 'Corolla', type: 'Sedan', year: 2019 },
    { id: 4, brand: 'Toyota', model: 'Highlander', type: 'SUV', year: 2022 },
    { id: 5, brand: 'Honda', model: 'Accord', type: 'Sedan', year: 2020 },
    { id: 6, brand: 'Honda', model: 'CR-V', type: 'SUV', year: 2021 },
    { id: 7, brand: 'Honda', model: 'Civic', type: 'Sedan', year: 2019 },
    { id: 8, brand: 'Honda', model: 'Pilot', type: 'SUV', year: 2022 },
    { id: 9, brand: 'Nissan', model: 'Altima', type: 'Sedan', year: 2020 },
    { id: 10, brand: 'Nissan', model: 'Rogue', type: 'SUV', year: 2021 },
    { id: 11, brand: 'Nissan', model: 'Sentra', type: 'Sedan', year: 2019 },
    { id: 12, brand: 'Nissan', model: 'Pathfinder', type: 'SUV', year: 2022 },
    { id: 13, brand: 'Ford', model: 'F-150', type: 'Pickup', year: 2021 },
    { id: 14, brand: 'Ford', model: 'Explorer', type: 'SUV', year: 2020 },
    { id: 15, brand: 'Ford', model: 'Mustang', type: 'Coupe', year: 2022 },
    { id: 16, brand: 'Ford', model: 'Escape', type: 'SUV', year: 2021 },
    { id: 17, brand: 'Chevrolet', model: 'Silverado', type: 'Pickup', year: 2021 },
    { id: 18, brand: 'Chevrolet', model: 'Equinox', type: 'SUV', year: 2020 },
    { id: 19, brand: 'Chevrolet', model: 'Malibu', type: 'Sedan', year: 2019 },
    { id: 20, brand: 'Chevrolet', model: 'Tahoe', type: 'SUV', year: 2022 },
    { id: 21, brand: 'BMW', model: '3 Series', type: 'Sedan', year: 2021 },
    { id: 22, brand: 'BMW', model: 'X5', type: 'SUV', year: 2022 },
    { id: 23, brand: 'Mercedes-Benz', model: 'C-Class', type: 'Sedan', year: 2021 },
    { id: 24, brand: 'Mercedes-Benz', model: 'GLE', type: 'SUV', year: 2022 },
    { id: 25, brand: 'Audi', model: 'A4', type: 'Sedan', year: 2021 },
    { id: 26, brand: 'Audi', model: 'Q5', type: 'SUV', year: 2022 },
    { id: 27, brand: 'Hyundai', model: 'Elantra', type: 'Sedan', year: 2020 },
    { id: 28, brand: 'Hyundai', model: 'Tucson', type: 'SUV', year: 2021 },
    { id: 29, brand: 'Kia', model: 'Optima', type: 'Sedan', year: 2020 },
    { id: 30, brand: 'Kia', model: 'Sportage', type: 'SUV', year: 2021 }
];

// Initialize cars data in localStorage
if (!localStorage.getItem('carsData')) {
    localStorage.setItem('carsData', JSON.stringify(carsData));
}

// Tires data for each car (3-4 tires per car)
const tiresData = {
    1: [
        { id: 101, name: 'Michelin Primacy MXM4', size: '215/60R16', price: 850000, season: 'Yozgi' },
        { id: 102, name: 'Bridgestone Turanza EL400', size: '215/60R16', price: 780000, season: 'Yozgi' },
        { id: 103, name: 'Continental ContiProContact', size: '215/60R16', price: 720000, season: 'Yozgi' },
        { id: 104, name: 'Goodyear Assurance', size: '215/60R16', price: 690000, season: 'Yozgi' }
    ],
    2: [
        { id: 201, name: 'Michelin Latitude Tour HP', size: '225/65R17', price: 1200000, season: 'Yozgi' },
        { id: 202, name: 'Bridgestone Dueler H/L Alenza', size: '225/65R17', price: 1100000, season: 'Yozgi' },
        { id: 203, name: 'Continental CrossContact LX2', size: '225/65R17', price: 1050000, season: 'Yozgi' }
    ],
    3: [
        { id: 301, name: 'Michelin Energy Saver A/S', size: '205/55R16', price: 650000, season: 'Yozgi' },
        { id: 302, name: 'Bridgestone Ecopia EP422', size: '205/55R16', price: 600000, season: 'Yozgi' },
        { id: 303, name: 'Continental PureContact', size: '205/55R16', price: 580000, season: 'Yozgi' },
        { id: 304, name: 'Goodyear EfficientGrip', size: '205/55R16', price: 550000, season: 'Yozgi' }
    ],
    4: [
        { id: 401, name: 'Michelin Latitude Sport 3', size: '235/65R18', price: 1500000, season: 'Yozgi' },
        { id: 402, name: 'Bridgestone Dueler H/P Sport', size: '235/65R18', price: 1400000, season: 'Yozgi' },
        { id: 403, name: 'Continental CrossContact UHP', size: '235/65R18', price: 1350000, season: 'Yozgi' }
    ],
    5: [
        { id: 501, name: 'Michelin Primacy MXM4', size: '235/45R18', price: 950000, season: 'Yozgi' },
        { id: 502, name: 'Bridgestone Turanza EL400-02', size: '235/45R18', price: 880000, season: 'Yozgi' },
        { id: 503, name: 'Continental ContiProContact', size: '235/45R18', price: 820000, season: 'Yozgi' }
    ],
    6: [
        { id: 601, name: 'Michelin Latitude Cross', size: '235/60R18', price: 1300000, season: 'Yozgi' },
        { id: 602, name: 'Bridgestone Dueler H/L Alenza Plus', size: '235/60R18', price: 1200000, season: 'Yozgi' },
        { id: 603, name: 'Continental CrossContact LX20', size: '235/60R18', price: 1150000, season: 'Yozgi' },
        { id: 604, name: 'Goodyear Assurance WeatherReady', size: '235/60R18', price: 1100000, season: 'Yozgi' }
    ],
    7: [
        { id: 701, name: 'Michelin Energy Saver', size: '215/55R16', price: 680000, season: 'Yozgi' },
        { id: 702, name: 'Bridgestone Ecopia EP422 Plus', size: '215/55R16', price: 630000, season: 'Yozgi' },
        { id: 703, name: 'Continental PureContact LS', size: '215/55R16', price: 610000, season: 'Yozgi' }
    ],
    8: [
        { id: 801, name: 'Michelin Latitude Tour HP', size: '245/60R18', price: 1450000, season: 'Yozgi' },
        { id: 802, name: 'Bridgestone Dueler H/L Alenza', size: '245/60R18', price: 1350000, season: 'Yozgi' },
        { id: 803, name: 'Continental CrossContact LX2', size: '245/60R18', price: 1300000, season: 'Yozgi' }
    ],
    9: [
        { id: 901, name: 'Michelin Primacy MXM4', size: '215/60R16', price: 820000, season: 'Yozgi' },
        { id: 902, name: 'Bridgestone Turanza EL400', size: '215/60R16', price: 760000, season: 'Yozgi' },
        { id: 903, name: 'Continental ContiProContact', size: '215/60R16', price: 710000, season: 'Yozgi' },
        { id: 904, name: 'Goodyear Assurance', size: '215/60R16', price: 680000, season: 'Yozgi' }
    ],
    10: [
        { id: 1001, name: 'Michelin Latitude Cross', size: '225/65R17', price: 1250000, season: 'Yozgi' },
        { id: 1002, name: 'Bridgestone Dueler H/L Alenza Plus', size: '225/65R17', price: 1150000, season: 'Yozgi' },
        { id: 1003, name: 'Continental CrossContact LX20', size: '225/65R17', price: 1100000, season: 'Yozgi' }
    ],
    11: [
        { id: 1101, name: 'Michelin Energy Saver A/S', size: '205/55R16', price: 640000, season: 'Yozgi' },
        { id: 1102, name: 'Bridgestone Ecopia EP422', size: '205/55R16', price: 590000, season: 'Yozgi' },
        { id: 1103, name: 'Continental PureContact', size: '205/55R16', price: 570000, season: 'Yozgi' }
    ],
    12: [
        { id: 1201, name: 'Michelin Latitude Sport 3', size: '235/65R18', price: 1480000, season: 'Yozgi' },
        { id: 1202, name: 'Bridgestone Dueler H/P Sport', size: '235/65R18', price: 1380000, season: 'Yozgi' },
        { id: 1203, name: 'Continental CrossContact UHP', size: '235/65R18', price: 1330000, season: 'Yozgi' },
        { id: 1204, name: 'Goodyear Wrangler All-Terrain', size: '235/65R18', price: 1280000, season: 'Yozgi' }
    ],
    13: [
        { id: 1301, name: 'Michelin LTX A/T2', size: '275/65R18', price: 1800000, season: 'Yozgi' },
        { id: 1302, name: 'Bridgestone Dueler A/T Revo 3', size: '275/65R18', price: 1700000, season: 'Yozgi' },
        { id: 1303, name: 'Continental TerrainContact A/T', size: '275/65R18', price: 1650000, season: 'Yozgi' }
    ],
    14: [
        { id: 1401, name: 'Michelin Latitude Tour HP', size: '235/65R18', price: 1420000, season: 'Yozgi' },
        { id: 1402, name: 'Bridgestone Dueler H/L Alenza', size: '235/65R18', price: 1320000, season: 'Yozgi' },
        { id: 1403, name: 'Continental CrossContact LX2', size: '235/65R18', price: 1270000, season: 'Yozgi' }
    ],
    15: [
        { id: 1501, name: 'Michelin Pilot Sport 4S', size: '255/40R19', price: 2200000, season: 'Yozgi' },
        { id: 1502, name: 'Bridgestone Potenza RE050A', size: '255/40R19', price: 2100000, season: 'Yozgi' },
        { id: 1503, name: 'Continental ExtremeContact Sport', size: '255/40R19', price: 2050000, season: 'Yozgi' },
        { id: 1504, name: 'Goodyear Eagle F1 Asymmetric', size: '255/40R19', price: 2000000, season: 'Yozgi' }
    ],
    16: [
        { id: 1601, name: 'Michelin Latitude Cross', size: '225/65R17', price: 1220000, season: 'Yozgi' },
        { id: 1602, name: 'Bridgestone Dueler H/L Alenza Plus', size: '225/65R17', price: 1120000, season: 'Yozgi' },
        { id: 1603, name: 'Continental CrossContact LX20', size: '225/65R17', price: 1070000, season: 'Yozgi' }
    ],
    17: [
        { id: 1701, name: 'Michelin LTX A/T2', size: '275/55R20', price: 1950000, season: 'Yozgi' },
        { id: 1702, name: 'Bridgestone Dueler A/T Revo 3', size: '275/55R20', price: 1850000, season: 'Yozgi' },
        { id: 1703, name: 'Continental TerrainContact A/T', size: '275/55R20', price: 1800000, season: 'Yozgi' },
        { id: 1704, name: 'Goodyear Wrangler All-Terrain Adventure', size: '275/55R20', price: 1750000, season: 'Yozgi' }
    ],
    18: [
        { id: 1801, name: 'Michelin Latitude Cross', size: '225/65R17', price: 1240000, season: 'Yozgi' },
        { id: 1802, name: 'Bridgestone Dueler H/L Alenza Plus', size: '225/65R17', price: 1140000, season: 'Yozgi' },
        { id: 1803, name: 'Continental CrossContact LX20', size: '225/65R17', price: 1090000, season: 'Yozgi' }
    ],
    19: [
        { id: 1901, name: 'Michelin Primacy MXM4', size: '215/60R16', price: 830000, season: 'Yozgi' },
        { id: 1902, name: 'Bridgestone Turanza EL400', size: '215/60R16', price: 770000, season: 'Yozgi' },
        { id: 1903, name: 'Continental ContiProContact', size: '215/60R16', price: 720000, season: 'Yozgi' }
    ],
    20: [
        { id: 2001, name: 'Michelin Latitude Sport 3', size: '265/70R17', price: 1600000, season: 'Yozgi' },
        { id: 2002, name: 'Bridgestone Dueler H/P Sport', size: '265/70R17', price: 1500000, season: 'Yozgi' },
        { id: 2003, name: 'Continental CrossContact UHP', size: '265/70R17', price: 1450000, season: 'Yozgi' }
    ],
    21: [
        { id: 2101, name: 'Michelin Pilot Sport 4', size: '225/45R18', price: 1800000, season: 'Yozgi' },
        { id: 2102, name: 'Bridgestone Potenza RE050A', size: '225/45R18', price: 1700000, season: 'Yozgi' },
        { id: 2103, name: 'Continental ExtremeContact Sport', size: '225/45R18', price: 1650000, season: 'Yozgi' },
        { id: 2104, name: 'Goodyear Eagle F1 Asymmetric 5', size: '225/45R18', price: 1600000, season: 'Yozgi' }
    ],
    22: [
        { id: 2201, name: 'Michelin Latitude Sport 3', size: '275/45R20', price: 2400000, season: 'Yozgi' },
        { id: 2202, name: 'Bridgestone Dueler H/P Sport', size: '275/45R20', price: 2300000, season: 'Yozgi' },
        { id: 2203, name: 'Continental CrossContact UHP', size: '275/45R20', price: 2250000, season: 'Yozgi' }
    ],
    23: [
        { id: 2301, name: 'Michelin Pilot Sport 4', size: '225/50R17', price: 1900000, season: 'Yozgi' },
        { id: 2302, name: 'Bridgestone Potenza RE050A', size: '225/50R17', price: 1800000, season: 'Yozgi' },
        { id: 2303, name: 'Continental ExtremeContact Sport', size: '225/50R17', price: 1750000, season: 'Yozgi' }
    ],
    24: [
        { id: 2401, name: 'Michelin Latitude Sport 3', size: '275/50R20', price: 2450000, season: 'Yozgi' },
        { id: 2402, name: 'Bridgestone Dueler H/P Sport', size: '275/50R20', price: 2350000, season: 'Yozgi' },
        { id: 2403, name: 'Continental CrossContact UHP', size: '275/50R20', price: 2300000, season: 'Yozgi' },
        { id: 2404, name: 'Goodyear Eagle F1 Asymmetric SUV', size: '275/50R20', price: 2250000, season: 'Yozgi' }
    ],
    25: [
        { id: 2501, name: 'Michelin Pilot Sport 4', size: '245/45R18', price: 2000000, season: 'Yozgi' },
        { id: 2502, name: 'Bridgestone Potenza RE050A', size: '245/45R18', price: 1900000, season: 'Yozgi' },
        { id: 2503, name: 'Continental ExtremeContact Sport', size: '245/45R18', price: 1850000, season: 'Yozgi' }
    ],
    26: [
        { id: 2601, name: 'Michelin Latitude Sport 3', size: '235/60R18', price: 2100000, season: 'Yozgi' },
        { id: 2602, name: 'Bridgestone Dueler H/P Sport', size: '235/60R18', price: 2000000, season: 'Yozgi' },
        { id: 2603, name: 'Continental CrossContact UHP', size: '235/60R18', price: 1950000, season: 'Yozgi' }
    ],
    27: [
        { id: 2701, name: 'Michelin Energy Saver A/S', size: '205/55R16', price: 660000, season: 'Yozgi' },
        { id: 2702, name: 'Bridgestone Ecopia EP422', size: '205/55R16', price: 610000, season: 'Yozgi' },
        { id: 2703, name: 'Continental PureContact', size: '205/55R16', price: 590000, season: 'Yozgi' },
        { id: 2704, name: 'Goodyear EfficientGrip', size: '205/55R16', price: 560000, season: 'Yozgi' }
    ],
    28: [
        { id: 2801, name: 'Michelin Latitude Cross', size: '225/60R17', price: 1280000, season: 'Yozgi' },
        { id: 2802, name: 'Bridgestone Dueler H/L Alenza Plus', size: '225/60R17', price: 1180000, season: 'Yozgi' },
        { id: 2803, name: 'Continental CrossContact LX20', size: '225/60R17', price: 1130000, season: 'Yozgi' }
    ],
    29: [
        { id: 2901, name: 'Michelin Primacy MXM4', size: '215/60R16', price: 840000, season: 'Yozgi' },
        { id: 2902, name: 'Bridgestone Turanza EL400', size: '215/60R16', price: 780000, season: 'Yozgi' },
        { id: 2903, name: 'Continental ContiProContact', size: '215/60R16', price: 730000, season: 'Yozgi' }
    ],
    30: [
        { id: 3001, name: 'Michelin Latitude Cross', size: '225/60R17', price: 1260000, season: 'Yozgi' },
        { id: 3002, name: 'Bridgestone Dueler H/L Alenza Plus', size: '225/60R17', price: 1160000, season: 'Yozgi' },
        { id: 3003, name: 'Continental CrossContact LX20', size: '225/60R17', price: 1110000, season: 'Yozgi' },
        { id: 3004, name: 'Goodyear Assurance WeatherReady', size: '225/60R17', price: 1060000, season: 'Yozgi' }
    ]
};

// Initialize tires data in localStorage
if (!localStorage.getItem('tiresData')) {
    localStorage.setItem('tiresData', JSON.stringify(tiresData));
}

document.addEventListener('DOMContentLoaded', function() {
    loadCars();
    populateFilters();
});

function loadCars() {
    const container = document.getElementById('cars-container');
    if (!container) return;
    
    const cars = JSON.parse(localStorage.getItem('carsData')) || carsData;
    container.innerHTML = cars.map(car => `
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

function populateFilters() {
    const cars = JSON.parse(localStorage.getItem('carsData')) || carsData;
    const brands = [...new Set(cars.map(c => c.brand))];
    const years = [...new Set(cars.map(c => c.year))].sort((a, b) => b - a);
    
    const brandFilter = document.getElementById('brand-filter');
    const yearFilter = document.getElementById('year-filter');
    
    if (brandFilter) {
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
        });
    }
    
    if (yearFilter) {
        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearFilter.appendChild(option);
        });
    }
}

function filterCars() {
    const brand = document.getElementById('brand-filter').value;
    const type = document.getElementById('type-filter').value;
    const year = document.getElementById('year-filter').value;
    
    const cars = JSON.parse(localStorage.getItem('carsData')) || carsData;
    let filtered = cars;
    
    if (brand) filtered = filtered.filter(c => c.brand === brand);
    if (type) filtered = filtered.filter(c => c.type === type);
    if (year) filtered = filtered.filter(c => c.year == year);
    
    const container = document.getElementById('cars-container');
    container.innerHTML = filtered.map(car => `
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

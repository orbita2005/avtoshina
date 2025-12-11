// Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    checkAuth();
});

function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const phone = document.getElementById('reg-phone').value;
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;
    
    const messageDiv = document.getElementById('register-message');
    
    if (password !== confirm) {
        messageDiv.textContent = 'Parollar mos kelmadi!';
        messageDiv.className = 'message error';
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(u => u.email === email)) {
        messageDiv.textContent = 'Bu email allaqachon ro\'yxatdan o\'tgan!';
        messageDiv.className = 'message error';
        return;
    }
    
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        password
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    messageDiv.textContent = 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz!';
    messageDiv.className = 'message success';
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    const messageDiv = document.getElementById('login-message');
    
    if (!user) {
        messageDiv.textContent = 'Email yoki parol noto\'g\'ri!';
        messageDiv.className = 'message error';
        return;
    }
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    messageDiv.textContent = 'Muvaffaqiyatli kirdingiz!';
    messageDiv.className = 'message success';
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function isLoggedIn() {
    return !!localStorage.getItem('currentUser');
}

function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    const authLinks = document.getElementById('auth-links');
    const userLinks = document.getElementById('user-links');
    const usernameDisplay = document.getElementById('username-display');
    
    if (currentUser) {
        const user = JSON.parse(currentUser);
        if (authLinks) authLinks.style.display = 'none';
        if (userLinks) {
            userLinks.style.display = 'block';
            if (usernameDisplay) usernameDisplay.textContent = user.name;
        }
    } else {
        if (authLinks) authLinks.style.display = 'block';
        if (userLinks) userLinks.style.display = 'none';
    }
}

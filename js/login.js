const loginForm = document.querySelector('#login-form');
const errorMessage = document.querySelector('#error-message');

const localLogin = (usernameInput, passwordInput) => {
    if (!usernameInput || !passwordInput) return null;

    if (usernameInput.trim().toLowerCase() === 'admin') {
        return {
            username: 'admin',
            role: 'admin',
            displayName: 'מנהל מערכת',
            permissions: ['editCars', 'viewStats', 'manageUsers'],
            redirect: 'admin-panel.html',
            success: true
        };
    }

    return {
        username: usernameInput,
        role: 'user',
        displayName: usernameInput,
        permissions: ['viewCars'],
        redirect: '../homepage.html',
        success: true
    };
};

const storedUserRole = localStorage.getItem('userRole');
const resolveUrl = (relativePath) => new URL(relativePath, window.location.href).href;

if (storedUserRole === 'admin') {
    window.location.replace(resolveUrl('admin-panel.html'));
} else if (storedUserRole === 'user') {
    window.location.replace(resolveUrl('../homepage.html'));
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMessage.textContent = '';

    const usernameInput = document.querySelector('#username').value.trim();
    const passwordInput = document.querySelector('#password').value.trim();
    const confirmPasswordInput = document.querySelector('#confirm-password').value.trim();

    if (passwordInput !== confirmPasswordInput) {
        errorMessage.textContent = 'הסיסמאות אינן תואמות';
        return;
    }

    let response = null;
    let fallbackMode = false;

    try {
        const res = await fetch('https://kosovskymira.prodocstalmidim.com/webhook-test/fdbcbbb6-023e-4cfe-bcd8-ff855f99183f', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: usernameInput, password: passwordInput })
        });

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        response = { ...data };

        if (response.success === undefined && response.isAdmin !== undefined) {
            response.success = true;
            response.role = response.isAdmin ? 'admin' : 'user';
            response.redirect = response.isAdmin ? 'admin-panel.html' : '../homepage.html';
            response.displayName = response.isAdmin ? 'מנהל מערכת' : usernameInput;
            response.permissions = response.isAdmin ? ['editCars', 'viewStats', 'manageUsers'] : ['viewCars'];
        }
    } catch (err) {
        fallbackMode = true;
        response = localLogin(usernameInput, passwordInput);
    }

    if (!response || !response.success) {
        errorMessage.textContent = fallbackMode ? 'אין חיבור לשרת וההתחברות המקומית נכשלה' : 'שם משתמש או סיסמה שגויים';
        return;
    }

    if (!response.role) {
        errorMessage.textContent = 'תשובה לא תקינה מהשרת';
        return;
    }

    localStorage.setItem('userRole', response.role);
    localStorage.setItem('username', response.displayName || usernameInput);
    localStorage.setItem('permissions', JSON.stringify(response.permissions || []));
    localStorage.setItem('loginTime', new Date().toISOString());

    window.location.replace(resolveUrl(response.redirect || '../homepage.html'));
});
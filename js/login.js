const loginForm = document.querySelector('#login-form');
const errorMessage = document.querySelector('#error-message');
console.log("LOGIN JS LOADED");

const fallbackUsers = [
    {
        username: 'admin',
        password: '1234',
        role: 'admin',
        displayName: 'מנהל מערכת',
        permissions: ['editCars', 'viewStats', 'manageUsers'],
        redirect: 'admin-panel.html'
    },
    {
        username: 'user',
        password: '1234',
        role: 'user',
        displayName: 'משתמש',
        permissions: ['viewCars'],
        redirect: '../homepage.html'
    }
];

const localLogin = (usernameInput, passwordInput) => {
    const user = fallbackUsers.find(user => user.username === usernameInput && user.password === passwordInput);
    return user ? { ...user, success: true } : null;
};

const isTemplatePlaceholder = (value) => typeof value === 'string' && (value.includes('{{') || value.includes('}}') || value.includes('$json'));

const normalizeDisplayName = (value, fallback) => {
    if (typeof value !== 'string') return fallback;
    const trimmed = value.trim();
    return trimmed && !isTemplatePlaceholder(trimmed) ? trimmed : fallback;
};

const storedUserRole = localStorage.getItem('userRole');
const resolveUrl = (relativePath) => new URL(relativePath, window.location.href).href;

if (storedUserRole === 'admin') {
    window.location.replace(resolveUrl('admin-panel.html'));
} else if (storedUserRole === 'user') {
    window.location.replace(resolveUrl('../homepage.html'));
}

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorMessage.textContent = "";

    const usernameInput = document.querySelector('#username').value.trim();
    const passwordInput = document.querySelector('#password').value.trim();
    console.log('login submit', { username: usernameInput, password: passwordInput });

    let response = null;
    let responseBody = null;
    let fallbackMode = false;

    try {
        const res = await fetch("https://kosovskymira.prodocstalmidim.com/webhook-test/fdbcbbb6-023e-4cfe-bcd8-ff855f99183f", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: usernameInput,
                password: passwordInput
            })
        });

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        console.log('login response', data);

        response = { ...data };
        responseBody = response.body || response.data || {};

        if (response.success === undefined && responseBody.success !== undefined) {
            response.success = responseBody.success;
        }
        if (!response.role && responseBody.role) {
            response.role = responseBody.role;
        }
        if (!response.displayName && responseBody.username) {
            response.displayName = responseBody.username;
        }
        if (!response.permissions && Array.isArray(responseBody.permissions)) {
            response.permissions = responseBody.permissions;
        }
        if (!response.redirect && responseBody.redirect) {
            response.redirect = responseBody.redirect;
        }

        if (response.success === undefined && response.isAdmin !== undefined) {
            response.success = true;
            response.role = response.isAdmin ? 'admin' : 'user';
            response.redirect = response.isAdmin ? 'admin-panel.html' : '../homepage.html';
            response.displayName = response.isAdmin ? 'מנהל מערכת' : usernameInput;
            response.permissions = response.isAdmin ? ['editCars', 'viewStats', 'manageUsers'] : ['viewCars'];
        }

        if (!response.success) {
            errorMessage.textContent = response.error || 'שם משתמש או סיסמה שגויים';
            return;
        }

    } catch (err) {
        console.warn('התחברות דרך n8n נכשלה, ננסה התחברות מקומית', err);
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

    const safeDisplayName = normalizeDisplayName(
        response.displayName || response.username || responseBody?.username || responseBody?.displayName,
        usernameInput
    );

    localStorage.setItem('userRole', response.role);
    localStorage.setItem('username', safeDisplayName);
    localStorage.setItem('permissions', JSON.stringify(response.permissions || []));
    localStorage.setItem('loginTime', new Date().toISOString());

    const redirectUrl = response.redirect || '../homepage.html';
    window.location.replace(resolveUrl(redirectUrl));
});
const currentUserRole = localStorage.getItem('userRole');

if (currentUserRole !== 'admin') {
    window.location.href = 'login.html';
}

const displayName = localStorage.getItem('username') || 'מנהל מערכת';

document.getElementById('admin-welcome').textContent = `ברוך הבא, ${displayName}`;


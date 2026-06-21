const currentUserRole = localStorage.getItem('userRole');

if (currentUserRole !== 'admin') {
    window.location.href = 'login.html';
}

const displayName = localStorage.getItem('username') || 'מנהל מערכת';
const permissions = JSON.parse(localStorage.getItem('permissions') || '[]');

document.getElementById('admin-welcome').textContent = `ברוך הבא, ${displayName}`;
document.getElementById('admin-permissions').textContent = `הרשאות: ${permissions.length ? permissions.join(', ') : 'אין הרשאות'};`;


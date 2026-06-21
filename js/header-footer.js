const userRole = localStorage.getItem("userRole") || "guest";
const username = localStorage.getItem("username") || "";

const currentPath = window.location.pathname.replace(/\\/g, "/");//rejex
const isInHtmlFolder = currentPath.includes("/html/") || currentPath.endsWith("/html") || currentPath.includes("/html\\");
const rootPrefix = isInHtmlFolder ? "../" : "";
const htmlPrefix = isInHtmlFolder ? "" : "html/";

// סימון דף פעיל בהדר
const isHomepage = currentPath.includes("homepage.html") || currentPath.endsWith("/");
const isAllCars = currentPath.includes("all-cars.html");
const isContactUs = currentPath.includes("contact-us.html");

// 1. בניית קישורי הניווט עם נתיבים יחסיים לפי מיקום העמוד
let navLinks = `
    <a href="${rootPrefix}homepage.html" ${isHomepage ? 'class="active"' : ''}>דף הבית</a>
    <a href="${htmlPrefix}all-cars.html" ${isAllCars ? 'class="active"' : ''}>קטלוג רכבים</a>
    <a href="${htmlPrefix}contact-us.html" ${isContactUs ? 'class="active"' : ''}>צור קשר</a>
    ${userRole === "admin" ? `<a href="${htmlPrefix}admin-panel.html" style="color: #ffcc00; font-weight: bold;">🔐 ניהול רכבים</a>` : ''}
`;

// 2. בניית אזור ההתחברות/התנתקות בשורה אחת
let authArea = userRole === "guest"
    ? `<a href="${htmlPrefix}login.html" class="auth-btn" style="background-color: #007bff; color: white;">התחבר</a>`
    : `<div class="user-info-area"><span class="user-greeting">שלום, ${username}</span><a href="#" id="nav-logout" class="auth-btn" style="background-color: #ff3333; color: white;">התנתק</a></div>`;

const headerElement = document.getElementById("main-header");
const footerElement = document.getElementById("main-footer");

if (headerElement) {
    headerElement.innerHTML = `
        <div class="logo"><img src="${rootPrefix}images/logo.png" alt="logo"></div>
        <nav class="nav">${navLinks}</nav>
        <div class="auth-container">${authArea}</div>
    `;
}

if (footerElement) {
    footerElement.innerHTML = `
        <div class="footer-container">
            <div class="footer-column">
                <h4>דגמים</h4>
                <ul class="ul-footer"><li><a href="${htmlPrefix}all-cars.html">כל הדגמים</a></li></ul>
            </div>
            <div class="footer-column">
                <h4>שירות</h4>
                <ul class="ul-footer">
                    <li><a href="${htmlPrefix}demo-page.html">שירות לקוחות</a></li>
                    <li><a href="${htmlPrefix}demo-page.html">מחירון חלפים</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>אודות</h4>
                <ul class="ul-footer">
                    <li><a href="${htmlPrefix}demo-page.html">אודות החברה</a></li>
                    <li><a href="${htmlPrefix}https://www.alljobs.co.il/" >דרושים</a></li>
                </ul>
            </div>
        </div>
    `;
}

// 4. האזנה קצרה לכפתור התנתקות (אם הוא קיים על המסך)
document.getElementById("nav-logout")?.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = `${rootPrefix}homepage.html`;
});
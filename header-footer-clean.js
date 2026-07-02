const userRole = localStorage.getItem("userRole") || "guest";
const username = localStorage.getItem("username") || "";
const currentPath = window.location.pathname.replace(/\\/g, "/");
const isInHtmlFolder = currentPath.includes("/html/") || currentPath.endsWith("/html") || currentPath.endsWith("/html/");
const rootPrefix = isInHtmlFolder ? "../" : "";
const htmlPrefix = isInHtmlFolder ? "" : "html/";
const fragmentPath = isInHtmlFolder ? "header-footer.html" : "html/header-footer.html";
const isHomepage = currentPath.includes("homepage.html") || currentPath.endsWith("/") || currentPath.endsWith("/index.html");
const isAllCars = currentPath.includes("all-cars.html");
const isContactUs = currentPath.includes("contact-us.html");
const navLinks = `
  <a href="${rootPrefix}homepage.html" ${isHomepage ? 'class="active"' : ''}>דף הבית</a>
  <a href="${htmlPrefix}all-cars.html" ${isAllCars ? 'class="active"' : ''}>קטלוג רכבים</a>
  <a href="${htmlPrefix}contact-us.html" ${isContactUs ? 'class="active"' : ''}>צור קשר</a>
  ${userRole === "admin" ? `<a href="${htmlPrefix}admin-panel.html" style="color: #ffcc00; font-weight: bold;">🔐 ניהול רכבים</a>` : ''}
`;
const authArea = userRole === "guest"
  ? `<a href="${htmlPrefix}login.html" class="auth-btn">התחבר</a>`
  : `<div class="user-info-area"><span class="user-greeting">שלום, ${username}</span><a href="#" id="nav-logout" class="auth-btn">התנתק</a></div>`;
const headerElement = document.getElementById("main-header");
const footerElement = document.getElementById("main-footer");
(function addCss() {
  const href = `${rootPrefix}css/header-footer.css`;
  if (!document.querySelector(`link[href="${href}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }
})();
(async function loadFragment() {
  try {
    const resp = await fetch(fragmentPath, {cache: "no-store"});
    if (!resp.ok) throw new Error("fragment not found");
    const text = await resp.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const headerTpl = doc.getElementById("header-template")?.innerHTML ?? "";
    const footerTpl = doc.getElementById("footer-template")?.innerHTML ?? "";
    if (headerElement) {
      headerElement.innerHTML = headerTpl;
      const logoImg = headerElement.querySelector("#logo-img");
      const logoAnchor = headerElement.querySelector(".logo");
      if (logoImg) logoImg.src = `${rootPrefix}images/logo.png`;
      if (logoAnchor) logoAnchor.href = `${rootPrefix}homepage.html`;
      const nav = headerElement.querySelector(".nav");
      if (nav) nav.innerHTML = navLinks;
      const authContainer = headerElement.querySelector(".auth-container");
      if (authContainer) authContainer.innerHTML = authArea;
    }
    if (footerElement) {
      footerElement.innerHTML = footerTpl;
      footerElement.querySelectorAll("[data-link-all-cars]").forEach(el => el.href = `${htmlPrefix}all-cars.html`);
      footerElement.querySelectorAll("[data-link-service]").forEach(el => el.href = `${htmlPrefix}demo-page.html`);
      footerElement.querySelectorAll("[data-link-about]").forEach(el => el.href = `${htmlPrefix}demo-page.html`);
    }
    addLogoutListener();
  } catch (err) {
    console.warn("header-footer load failed:", err);
    if (headerElement) {
      headerElement.innerHTML = `
        <a href="${rootPrefix}homepage.html" class="logo"><img id="logo-img" src="${rootPrefix}images/logo.png" alt="logo"></a>
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
              <li><a href="https://www.alljobs.co.il/">דרושים</a></li>
            </ul>
          </div>
        </div>
      `;
    }
    addLogoutListener();
  }
})();
function addLogoutListener() {
  headerElement?.querySelector("#nav-logout")?.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = `${rootPrefix}homepage.html`;
  });
}
// ...existing code...

const fullname=document.querySelector('#fullname');
const email=document.querySelector('#email')
const tel=document.querySelector('#tel');
const payment_method=document.querySelector('#payment_method');
const message=document.querySelector('#massage');
const formElement = document.querySelector('#order-form'); 

document.addEventListener("DOMContentLoaded", () => {
    const carSelect = document.getElementById('car-select');
    carsArr.forEach(car => {
        const option = document.createElement('option');
        
        option.value = car.nameCAR; 
        
        // הטקסט שהמשתמש יראה בעיניים בתוך הרשימה
        option.textContent = `${car.nameCAR} `;
        
        // הוספת האופציה לתוך ה-select
        carSelect.appendChild(option);
    })
});

formElement.addEventListener('submit', (e) => {
    e.preventDefault(); // מונע מהעמוד להתרענן
    
    // יצירת אובייקט עם כל הנתונים הנוכחיים מהשדות
    const formData = {
        fullname: fullname.value,
        email: email.value,
        tel: tel.value,
        payment_method: payment_method.value,
        message: message.value,
        car: document.getElementById('car-select').value // הערך שנבחר ברשימה
    };
    
    // שמירה ב-localStorage כאובייקט טקסטואלי (JSON)
    localStorage.setItem('lastCarOrder', JSON.stringify(formData));
    
    // ---- הוספה: קריאה לפונקציה שממלאת ומציגה את הטבלה ----
    displayOrderSummary(formData);
    
    alert('הנתונים נשמרו בהצלחה והוצגו בטבלה!');
});

// פונקציה  להצגת הנתונים בטבלה
function displayOrderSummary(data) {
    const tableBody = document.getElementById('table-body');
    const container = document.getElementById('summary-container');
    
    // כתיבת ה-HTML של השורות ישירות בצורה פשוטה
    tableBody.innerHTML = `
        <tr><td>שם מלא</td><td>${data.fullname}</td></tr>
        <tr><td>כתובת אימייל</td><td>${data.email}</td></tr>
        <tr><td>מספר טלפון</td><td>${data.tel}</td></tr>
        <tr><td>רכב נבחר</td><td>${data.car}</td></tr>
        <tr><td>אמצעי תשלום</td><td>${data.payment_method}</td></tr>
        <tr><td>הודעה/הערות</td><td>${data.message || 'אין'}</td></tr>
    `;
    
    // הצגת מיכל הטבלה
    container.style.display = 'block';
}

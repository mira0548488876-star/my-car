
// מטרת הקובץ: להציג את פרטי הרכב הנבחר לפי ה-שנמצא בכתובת האתרID
// מחכה שהדף יסיים לטעון, ורק אז מתחיל לעבוד עם האלמנטים
document.addEventListener("DOMContentLoaded", function () {

    // שלב 1: לוקח את ה-id מתוך הכתובת אחרי סימן ?
    // דוגמה: car.html?id=111 => carId יהיה "111"
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get("id");
    const currentCar = carsArr.find(function (car) {
        return car.idCar === carId;
    });
    // שלב 5: מוצא את התמונה בדף ומכניס לה את הנתיב של התמונה של הרכב
    const imgElement = document.querySelector(".item-img");
        imgElement.src = "../images/" + currentCar.categoryCar + "/" + currentCar.img;
        imgElement.alt = currentCar.nameCAR;
    // שלב 6: מוצא את כותרת הרכב ומציב את שם הרכב ושנת הייצור
    const titleElement = document.querySelector(".item-title");

        titleElement.textContent = currentCar.nameCAR + " - שנת " + currentCar.year;


    // שלב 7: מוצא את המחיר ומציג אותו בפורמט כסף עם סימן ₪
    // toLocaleString() מוסיף פסיקים למספרים
    const priceElement = document.querySelector(".item-price span");

        priceElement.textContent = "₪" + currentCar.priceCar.toLocaleString();


    // שלב 8: מוצא את התיאור ומכניס אותו לתוך הפסקה המתאימה
    const descElement = document.querySelector(".item-description");

        descElement.textContent = currentCar.description;
    // שלב 9: מוצא את שם המוכר ומציג אותו
    const sellerNameElement = document.getElementById("seller-name");
        sellerNameElement.textContent = currentCar.sellerName;
    // שלב 10: מוצא את טלפון המוכר ומציג אותו
    const sellerPhoneElement = document.getElementById("seller-phone");

        sellerPhoneElement.textContent = currentCar.sellerPhone;

    // שלב 11: בודק את מצב הרכב ומציג אותו בעברית
    const carStateElement = document.getElementById("car-state");

        if (currentCar.categoryState === "new") {
            carStateElement.textContent = "חדש מהחברה";
        } else {
            carStateElement.textContent = "יד שנייה (כמו חדש)";
        }
});
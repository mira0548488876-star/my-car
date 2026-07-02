const allEcars = document.querySelector('.all-e-cars');
const showCars = (arr) => {
    allEcars.innerHTML = ""; // מניעת שכפול רכבים

    arr.forEach(x => {

        const div = document.createElement('div');
        div.className = `single-img-e ${x.categoryCar}`;

        const bu = document.createElement('button')
        bu.addEventListener('click', () => {
            div.remove()
        })
        bu.innerText = "הסר"
        div.innerHTML = `
            <a href="car.html?id=${x.idCar}" class="car-card-link">
                <div class="car-image-wrapper">
                    <img src="../images/${x.categoryCar}/${x.img}" alt="${x.nameCAR}">
                </div>
                </a>
                <div class="car-details-preview">
                    <h3>${x.nameCAR}</h3>
                    <p class="car-year">שנת ייצור: ${x.year || 'לא צוין'}</p>
                    <p class="car-price">₪${x.priceCar ? x.priceCar.toLocaleString() : 'ללא מחיר'}</p>
                    </div>
                    
                    `;
        if (localStorage.getItem('userRole') == "admin") {
            div.append(bu)

        }

        allEcars.append(div);

    });
}
showCars(carsArr);


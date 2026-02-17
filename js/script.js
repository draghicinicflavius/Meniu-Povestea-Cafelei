function toggleMenu() {
    const nav = document.getElementById('mobile-nav');
    nav.classList.toggle('active');
}

function showPage(pageId) {
    // 1. Ascunde toate paginile
    const allPages = document.querySelectorAll('.page-content, #intro-screen');
    allPages.forEach(page => {
        page.classList.remove('active-page');
        // Dacă folosim clase CSS corecte, nu mai e nevoie de style.display manual aici
        // dar pentru siguranță, CSS-ul face treaba grea acum.
    });

    // 2. Arată pagina dorită
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active-page');
    }

    // 3. Închide meniul
    toggleMenu();
}
const desertData = [
    { name: "Cheesecake cu fructe", img: "images/cheesecake.jpg", price: "18.00 LEI" },
    { name: "Lava Cake", img: "images/lava-cake.jpg", price: "22.00 LEI" },
    { name: "Tiramisu", img: "images/tiramisu.jpg", price: "20.00 LEI" }
];

let currentDesertIndex = 0;

function changeDesert(direction) {
    currentDesertIndex += direction;

    if (currentDesertIndex >= desertData.length) currentDesertIndex = 0;
    if (currentDesertIndex < 0) currentDesertIndex = desertData.length - 1;

    const nameElement = document.getElementById('desert-name');
    const imgElement = document.getElementById('desert-img');
    const priceElement = document.getElementById('desert-price');

    // Actualizarea sincronizată a tuturor elementelor
    nameElement.innerText = desertData[currentDesertIndex].name;
    imgElement.src = desertData[currentDesertIndex].img;
    priceElement.innerText = desertData[currentDesertIndex].price;
}
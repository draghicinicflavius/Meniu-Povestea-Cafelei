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
    { 
        name: "PISTACHIO DOME", 
        img: "images/pistachio.jpg", 
        price: "20.00 LEI",
        weight: "100 g",
        desc: "mousse de fistic pe blat de vanilie cu sos de fructe de padure"
    },
    { 
        name: "TIRAMISU", 
        img: "images/tiramisu.jpg", 
        price: "20.00 LEI",
        weight: "120 g",
        desc: "faimosul desert italian cu crema fina de mascarpone si espresso"
    },
    { 
        name: "LAVA CAKE", 
        img: "images/lava-cake.jpg", 
        price: "20.00 LEI",
        weight: "120 g",
        desc: "blat dens de cacao cu inima fierbinte de ciocolata"
    },
    { 
        name: "CHEESECAKE", 
        img: "images/cheesecake.jpg", 
        price: "20.00 LEI",
        weight: "135 g",
        desc: "un tort rezistibil cu textura fina de branza si blat de biscuiti"
    },
    { 
        name: "SORBET DE LĂMÂIE", 
        img: "images/lemon-sorbet.jpg", 
        price: "25.00 LEI",
        weight: "90 g",
        desc: "sorbet revigorant de lamaie servit in coaja fructului"
    }
];

let currentDesertIndex = 0;

function changeDesert(direction) {
    currentDesertIndex += direction;
    if (currentDesertIndex >= desertData.length) currentDesertIndex = 0;
    if (currentDesertIndex < 0) currentDesertIndex = desertData.length - 1;

    const current = desertData[currentDesertIndex];
    
    document.getElementById('desert-name').innerText = current.name;
    document.getElementById('desert-img').src = current.img;
    document.getElementById('desert-price').innerText = current.price;
    document.getElementById('desert-weight').innerText = current.weight;
    document.getElementById('desert-desc').innerText = current.desc;
}
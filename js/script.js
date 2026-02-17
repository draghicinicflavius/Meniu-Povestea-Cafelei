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
        img: "images/pistachio.png", 
        price: "20.00 LEI",
        weight: "100 g",
        desc: "mousse de fistic pe blat de vanilie cu sos intens de fistic și glazură crocantă de ciocolată cu fistic"
    },
    { 
        name: "TIRAMISU", 
        img: "images/tiramisu.jfif", 
        price: "20.00 LEI",
        weight: "100 g",
        desc: "faimosul desert italian ce combină crema fină de mascarpone, cu blatul plin de gustul unui expresso"
    },
    { 
        name: "LAVA CAKE", 
        img: "images/lava-cake.jpg", 
        price: "20.00 LEI",
        weight: "120 g",
        desc: "un blat dens de cacao ce învelește o inimă fierbinte din cea mai fină ciocolată"
    },
    { 
        name: "BISCOTTINO", 
        img: "images/biscotino.jpg", 
        price: "25.00 LEI",
        weight: "90 g",
        desc: "delicatețea laptelui și biscuiții crocanți Oreo, regăsiți într-o formulă delicioasă"
    },
    { 
        name: "APPLE CAKE", 
        img: "images/applecake.jpg", 
        price: "25.00 LEI",
        weight: "116 g",
        desc: "o bucată din gustul copilăriei, redescoperită în mărul cu scorțișoară, crema de vanilie și blatul de biscuiți"
    },
    { 
        name: "CHEESECAKE", 
        img: "images/cheesecake.jpg", 
        price: "20.00 LEI",
        weight: "133 g",
        desc: "un tort irezistibil cu textură fină din cremă de branza si blat de biscuiți"
    },
    { 
        name: "BAILEYS CAKE", 
        img: "images/baileys.jfif", 
        price: "20.00 LEI",
        weight: "100 g",
        desc: "mousse-ul cu lichior și sos de caramel, în glazură de ciocolată, oferă o experiență gustativă desăvârșită"
    },
    { 
        name: "SORBET DE LĂMÂIE", 
        img: "images/lemon-sorbet.jpg", 
        price: "25.00 LEI",
        weight: "90 g",
        desc: "sorbet revigorant de lamaie servit in coaja fructului"
    },
    { 
        name: "ÎNGHEȚATĂ CARAMEL SĂRAT", 
        img: "images/caramel.jpg", 
        price: "20.00 LEI",
        weight: "90 g",
        desc: "înghețată cu caramel sărat și cu caramele toffee"
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
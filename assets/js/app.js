// TODO: SECRETO DEL LOGO 1
const secretDiv = document.getElementById('logo-secret');
let clickCount = 0;

secretDiv.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount === 10) {
        arrowRight();
        clickCount = 0;
    }
});

function arrowRight() {
    const logo = document.querySelector('.logo');
    logo.src = './assets/img/login.svg'; // Cambia la ruta de la nueva imagen
    logo.style.width = '30px';
}

/* ===================================================
   ===================================================
   =================================================== */


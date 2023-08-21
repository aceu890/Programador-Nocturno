// TODO: MODAL LOGIN
const openModal = document.querySelector('.hero_cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
});

// closeModal.addEventListener('click', (e) => {
//     e.preventDefault();
//     modal.classList.remove('modal--show');
// });

/* ===================================================
   ===================================================
   =================================================== */

// TODO: LOGIN

const power = document.getElementById('power');

power.addEventListener('click', function () {
    const loginForm = document.getElementById("login-form");

        const user = loginForm.user.value;
        const password = loginForm.password.value;

        if (user === "admin" && password === "admin") {
            alert("Acceso aprobado")
    
        } else {
            alert("Error al autenticarse")
        }
   
});

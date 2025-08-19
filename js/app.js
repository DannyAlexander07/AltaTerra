document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA PARA EL HEADER SCROLLED ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- LÓGICA PARA EL MENÚ HAMBURGUESA ---
    const navMenu = document.getElementById('header-nav');
    const navToggle = document.getElementById('header-toggle');
    const body = document.body;

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-open');
            body.classList.toggle('nav-open'); // Para la animación de la 'X'
        });
    }
    
    // --- LÓGICA PARA EL AÑO DEL COPYRIGHT ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

});
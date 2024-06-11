
// navbar toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('translate-x-0');
        mobileMenu.classList.toggle('opacity-100');
        mobileMenu.classList.toggle('-translate-x-full');
        mobileMenu.classList.toggle('opacity-0');
        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
    });
});





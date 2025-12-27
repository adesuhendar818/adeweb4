const menuToggle = document.querySelector('.menu-toggle input');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('slide');
})
const toggleBtn = document.querySelector('.navbar_toogleBtn')
const menu = document.querySelector('.navbar_menu')
const login = document.querySelector('.navbar_login')

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    login.classList.toggle('active');
});
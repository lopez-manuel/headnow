const products = document.getElementById('products');
const productsMenu = document.querySelector('.products-menu');
const navMenu = document.getElementById('nav-menu');
const menuMobileButton = document.querySelector('.mobile-menu');


products.addEventListener('click',toggleProductsMenu);
productsMenu.addEventListener('mouseleave',toggleProductsMenu);
menuMobileButton.addEventListener('click', toggleNavMenu);

function toggleProductsMenu(){
    productsMenu.classList.toggle('inactive');
    navMenu.classList.remove('show-navbar-menu-container');
}

function toggleNavMenu (){
    navMenu.classList.toggle('show-navbar-menu-container');
}
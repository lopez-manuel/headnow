const products = document.getElementById('products');
const productsMenu = document.querySelector('.products-menu');
const mobileCartIcon = document.querySelector('.mobile-cart-icon');
const mobileCartContainer = document.querySelector('.mobile-cart-container');
const navMenu = document.getElementById('nav-menu');
const menuMobileButton = document.querySelector('.mobile-menu');


products.addEventListener('click',toggleProductsMenu);
//products.addEventListener('mouseover',toggleProductsMenu);
productsMenu.addEventListener('mouseleave',toggleProductsMenu);
mobileCartIcon.addEventListener('click', toggleMobileCartContainer);
menuMobileButton.addEventListener('click', toggleNavMenu);

function toggleProductsMenu(){
    productsMenu.classList.toggle('inactive');
    navMenu.classList.remove('show-navbar-menu-container');
}

function toggleMobileCartContainer(){
    mobileCartContainer.classList.toggle('inactive');
}

function toggleNavMenu (){
    navMenu.classList.toggle('show-navbar-menu-container');
}
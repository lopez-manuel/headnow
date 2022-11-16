const products = document.getElementById('products');
const productsMenu = document.querySelector('.products-menu');
const mobileCartIcon = document.querySelector('.mobile-cart-icon');
const mobileCartContainer = document.querySelector('.mobile-cart-container');
const navMenu = document.getElementById('nav-menu');
const menuMobileButton = document.querySelector('.mobile-menu');
const mobileProfileIcon = document.querySelector('.mobile-profile-icon')
const profileContainer = document.querySelector('.profile-container')


products.addEventListener('click',toggleProductsMenu);
//products.addEventListener('mouseover',toggleProductsMenu);
productsMenu.addEventListener('mouseleave',toggleProductsMenu);
mobileCartIcon.addEventListener('click', toggleMobileCartContainer);
menuMobileButton.addEventListener('click', toggleNavMenu);
mobileProfileIcon.addEventListener('click', showProfileContainer)

function toggleProductsMenu(){
    productsMenu.classList.toggle('inactive');
    navMenu.classList.remove('show-navbar-menu-container');
}

function toggleMobileCartContainer(){
    mobileCartContainer.classList.toggle('inactive');
    profileContainer.classList.remove('profile-container-animation')
}

function toggleNavMenu (){
    navMenu.classList.toggle('show-navbar-menu-container');
}

function showProfileContainer(){
    profileContainer.classList.toggle('profile-container-animation')
    mobileCartContainer.classList.add('inactive')
}
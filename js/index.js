const products = document.getElementById('products');
const productsMenu = document.querySelector('.products-menu')
const mobileCartIcon = document.querySelector('.mobile-cart-icon')
const mobileCartContainer = document.querySelector('.mobile-cart-container')


products.addEventListener('click',toggleProductsMenu)
//products.addEventListener('mouseover',toggleProductsMenu)
productsMenu.addEventListener('mouseleave',toggleProductsMenu)
mobileCartIcon.addEventListener('click', toggleMobileCartContainer)

function toggleProductsMenu(){
    productsMenu.classList.toggle('inactive')
}

function toggleMobileCartContainer(){
    mobileCartContainer.classList.toggle('inactive')
}
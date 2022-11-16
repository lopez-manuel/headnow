const mobileCartIcon = document.querySelector('.mobile-cart-icon');
const mobileCartContainer = document.querySelector('.mobile-cart-container');
const mobileProfileIcon = document.querySelector('.mobile-profile-icon')
const profileContainer = document.querySelector('.profile-container')



mobileCartIcon.addEventListener('click', toggleMobileCartContainer);
mobileProfileIcon.addEventListener('click', showProfileContainer);


function toggleMobileCartContainer(){
    mobileCartContainer.classList.toggle('inactive');
    profileContainer.classList.remove('profile-container-animation')
}

function showProfileContainer(){
    profileContainer.classList.toggle('profile-container-animation')
    mobileCartContainer.classList.add('inactive')
}
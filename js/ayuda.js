const orders = document.getElementById('orders');
const howToBuyContainer = document.querySelector('.how-to-buy-container')
const payments = document.getElementById('payments');
const paymentsContainer = document.querySelector('.payments-container')
const prices = document.getElementById('prices');
const pricesContainer = document.querySelector('.prices-container')
const shipping = document.getElementById('shipping')
const shippingContainer = document.querySelector('.shipping-container')
const refund = document.getElementById('refund')
const refundContainer = document.querySelector('.refund-container')
const account = document.getElementById('account')
const accountContainer = document.querySelector('.account-container')




orders.addEventListener('click', showHowToBuyContainer)
payments.addEventListener('click', showPaymentsContainer)
prices.addEventListener('click', showPricesContainer)
shipping.addEventListener('click', showShippingContainer)
refund.addEventListener('click', showRefundContainer)
account.addEventListener('click', showAccountContainer)





function showHowToBuyContainer(e){
    e.preventDefault()
    howToBuyContainer.classList.remove('inactive')
    paymentsContainer.classList.add('inactive')
    pricesContainer.classList.add('inactive')
    shippingContainer.classList.add('inactive')
    refundContainer.classList.add('inactive')
    accountContainer.classList.add('inactive');
}

function showPaymentsContainer(e){
    e.preventDefault()
    howToBuyContainer.classList.add('inactive')
    paymentsContainer.classList.remove('inactive')
    pricesContainer.classList.add('inactive')
    shippingContainer.classList.add('inactive')
    refundContainer.classList.add('inactive')
    accountContainer.classList.add('inactive');
}

function showPricesContainer(e){
    e.preventDefault()
    howToBuyContainer.classList.add('inactive')
    paymentsContainer.classList.add('inactive')
    pricesContainer.classList.remove('inactive')
    shippingContainer.classList.add('inactive')
    refundContainer.classList.add('inactive')
    accountContainer.classList.add('inactive');
}

function showShippingContainer(e){
    e.preventDefault()
    howToBuyContainer.classList.add('inactive')
    paymentsContainer.classList.add('inactive')
    pricesContainer.classList.add('inactive')
    shippingContainer.classList.remove('inactive')
    refundContainer.classList.add('inactive')
    accountContainer.classList.add('inactive');
}

function showRefundContainer(e){
    e.preventDefault()
    howToBuyContainer.classList.add('inactive');
    paymentsContainer.classList.add('inactive');
    pricesContainer.classList.add('inactive');
    shippingContainer.classList.add('inactive');
    refundContainer.classList.remove('inactive');
    accountContainer.classList.add('inactive');
}

function showAccountContainer(e){
    e.preventDefault();
    howToBuyContainer.classList.add('inactive');
    paymentsContainer.classList.add('inactive');
    pricesContainer.classList.add('inactive');
    shippingContainer.classList.add('inactive');
    refundContainer.classList.add('inactive');
    accountContainer.classList.remove('inactive');
}
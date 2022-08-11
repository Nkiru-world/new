const header = document.querySelector('header')
const sectionOne = document.querySelector('.ankaraimg')

const sectionOneOptions = { 
    rootMargin: "-450px 0px 0px 0px"
}

const sectionOneObserver = new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('header-scrolled')
        } else{
            header.classList.remove('header-scrolled')
        }
    })
}
, sectionOneOptions)

sectionOneObserver.observe(sectionOne)

//======================== RESPONSIVE NAVBAR ========================

const primaryNav = document.getElementById('nav')
const navToggle = document.querySelector('.mobile-nav-bar-toggle')

navToggle.addEventListener('click' , () =>{
    // primaryNav.style.transform = 'translateX(0)';
    let visibility = primaryNav.getAttribute('data-visible')
    let navIconsToggle = navToggle.getAttribute('aria-expanded')
    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})



//======================== FOR MY CART ========================

// let cartIcons = document.querySelector('#cart-icon')
// let cart = document.querySelector('.cart')
// let closeCart = document.querySelector('#close-cart')
// let body = document.querySelector('body')

// cartIcons.addEventListener('click', function carttt(){
//     cart.classList.add('active')
//     // document.body.style.backgroundColor = "green"
//     closeCart.addEventListener('click', function cartt(){
//         cart.classList.remove('active') 
//     })
// })



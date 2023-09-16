const searchBtn = document.querySelector('#search-btn')
const searchContanier = document.querySelector('.search-contanier')
const menuBar = document.querySelector('#menu-bar')
const navSection = document.querySelector('.nav-sec')
const loginBtn = document.querySelector('#login-btn')
const loginForm = document.querySelector('.login-container')
const loginCloseBar = document.querySelector('#login-closeBar')
const videoBtn = document.querySelectorAll('.video-btn')

window.onscroll = () => {
    searchBtn.classList.remove('fa-times')
    searchContanier.classList.remove('active')
}
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times')
    searchContanier.classList.toggle('active')
})

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times')
    navSection.classList.toggle('active')
})
loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active')
})

loginCloseBar.addEventListener('click', () => {
    loginForm.classList.remove('active')
})

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})

const swiper = new Swiper('.review', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: "true",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }

    },


});
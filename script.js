const slider = document.querySelector('.cards-slider');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let autoSlideInterval;

function updateSliderWidth() {
    const cardWidth = cards[0].offsetWidth + 20; // 10px margin on each side
    slider.style.width = `${cardWidth * cards.length}px`;
}

function showCard(index) {
    const cardWidth = cards[0].offsetWidth + 20; // Adjust for margin
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextCard() {
    currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
    showCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
    showCard(currentIndex);
}

prevBtn.addEventListener('click', () => {
    prevCard();
    resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
    nextCard();
    resetAutoSlide();
});

function startAutoSlide() {
    autoSlideInterval = setInterval(nextCard, 3000); // Change the card every 3 seconds
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

document.addEventListener('DOMContentLoaded', () => {
    // Your existing ScrollReveal code here
    ScrollReveal().reveal('.first .right', {
        delay: 300,
        origin: 'left',
        distance: '50px',
        opacity: 0,
        duration: 1500,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.third .detail', {
        delay: 300,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        duration: 2000,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.fourth .card', {
        delay: 500,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        duration: 2000,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.fifth form', {
        delay: 500,
        origin: 'top',
        distance: '50px',
        opacity: 0,
        duration: 1500,
        easing: 'ease-in-out'
    });
});

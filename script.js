// Scroll event listener to change header background and add shadow on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ScrollReveal animations
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('' , { origin: 'top' });
ScrollReveal().reveal('.image img, .image2 img, .image3 img, .glowing-circle', { origin: 'bottom' }); 
ScrollReveal().reveal('.home-sci ', { origin: 'left' }); 
ScrollReveal().reveal('.home-content p, .home-content h1, .btn', { origin: 'right' }); 

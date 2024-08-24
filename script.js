ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
})

// .img-slider
ScrollReveal().reveal('.logo, .imagelogo' , { origin: 'top' });
ScrollReveal().reveal('.image img, .image2 img, .image3 img, .glowing-circle', { origin: 'bottom' }); 
ScrollReveal().reveal('.home-sci ', { origin: 'left' }); 
ScrollReveal().reveal('.navbar a, .home-content p, .home-content h1, .btn', { origin: 'right' }); 
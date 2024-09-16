// STICKY TRANSPARENT NAVBAR

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// HAMBURGER MENU CODE

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const menuOverlay = document.getElementById('menu-overlay');
const menuIconList = menuIcon.querySelector('.bx-list-ul');
const menuIconX = menuIcon.querySelector('.bx-x');
const navLinks = document.querySelectorAll('.navbar a');  

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    menuIcon.classList.toggle('active');
    menuIconList.classList.toggle('hidden');
    menuIconX.classList.toggle('hidden');
});

menuOverlay.addEventListener('click', () => {
    closeMenu();
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

function closeMenu() {
    navbar.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuIcon.classList.remove('active');
    menuIconList.classList.remove('hidden');
    menuIconX.classList.remove('hidden');
}

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // OFFSET SCROLL BEHAVIOUR SMOOTH #HOME LINKS

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetElement = document.querySelector(this.getAttribute('href'));
        const offset = 120; 

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

// PRICING SWITCHER

// Grab the toggle switch and pricing elements
const toggleInput = document.querySelector('#check');
const standardPrice = document.querySelector('#standard');
const proPrice = document.querySelector('#pro');
const elitePrice = document.querySelector('#elite');

// Add an event listener to the toggle switch
toggleInput.addEventListener('change', function() {
    // If the toggle is checked, switch to yearly pricing
    if (this.checked) {
        // Set yearly prices
        standardPrice.innerHTML = '600';
        proPrice.innerHTML = '840';
        elitePrice.innerHTML = '1,080';
    } else {
        // Set back to monthly prices
        standardPrice.innerHTML = '50';
        proPrice.innerHTML = '70';
        elitePrice.innerHTML = '90';
    }
});


const priceLabels = document.querySelectorAll('.price-label');

// Define monthly and yearly label texts
const labels = {
    monthly: 'Per month',
    yearly: 'Per year'
};

// Add an event listener to the toggle switch
toggleInput.addEventListener('change', function() {
    // Update labels based on the toggle state
    priceLabels.forEach(label => {
        label.textContent = this.checked ? labels.yearly : labels.monthly;
    });
});



// PREVENT RIGHT CLICKS


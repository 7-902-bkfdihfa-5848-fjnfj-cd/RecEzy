window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

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

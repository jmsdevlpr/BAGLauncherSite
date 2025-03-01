// script.js

// Initialize AOS for scroll animations
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
});

// Fade out loader when page loads
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Offset for fixed header
            behavior: 'smooth'
        });
    });
});

// Optional: Add a subtle background animation (e.g., floating particles)
// This could be expanded with a library like particles.js, but here's a simple version
const hero = document.querySelector('.hero');
for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    hero.appendChild(particle);
}
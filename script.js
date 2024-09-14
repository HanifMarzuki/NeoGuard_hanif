// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonial Slider Functionality
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalSlides = testimonials.length;

function showSlide(index) {
    testimonials.forEach((testimonial, idx) => {
        testimonial.style.display = idx === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initialize the slider
showSlide(currentSlide);

// Auto Slide Change every 5 seconds
setInterval(nextSlide, 5000);

// Scroll Down Arrow Animation (Bounce)
document.querySelector('.scroll-down').addEventListener('click', function () {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

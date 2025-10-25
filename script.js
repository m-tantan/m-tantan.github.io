// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling (for demo purposes)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    // Note: Replace the form action with actual form handling service
    // For now, this allows the form to submit to the specified action URL
    console.log('Form submitted');
});

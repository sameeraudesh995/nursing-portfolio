document.addEventListener('DOMContentLoaded', function() {
    // Theme switcher functionality
    const themeTeal = document.getElementById('theme-teal');
    const themePurple = document.getElementById('theme-purple');
    const themeBlue = document.getElementById('theme-blue');

    themeTeal.addEventListener('click', function() {
        document.body.className = '';
    });

    themePurple.addEventListener('click', function() {
        document.body.className = 'purple-theme';
    });

    themeBlue.addEventListener('click', function() {
        document.body.className = 'blue-theme';
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to sections when they come into view
    const sections = document.querySelectorAll('.portfolio-section');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
});
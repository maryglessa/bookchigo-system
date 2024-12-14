document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.main-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
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

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-item, .problem-solution-item, .pricing-card, .feature-card').forEach(item => {
        observer.observe(item);
    });

    // Hero image parallax effect
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            heroImage.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        });
    }

    // Feature images hover effect
    const featureImages = document.querySelectorAll('.feature-image img');
    featureImages.forEach(img => {
        img.addEventListener('mouseenter', () => img.style.transform = 'scale(1.05)');
        img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
    });

    // Floating books animation
    const books = document.querySelectorAll('.book');
    books.forEach((book, index) => {
        book.style.setProperty('--rotation', `${(index * 10) - 15}deg`);
    });

    // Parallax effect for background circles
    document.addEventListener('mousemove', (e) => {
        const circles = document.querySelectorAll('.circle');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        circles.forEach((circle, index) => {
            const speed = (index + 1) * 2;
            const x = (mouseX * speed);
            const y = (mouseY * speed);
            circle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Pricing toggle functionality
    const pricingToggle = document.querySelector('.pricing-toggle');
    const prices = document.querySelectorAll('.price');

    if (pricingToggle) {
        pricingToggle.addEventListener('change', () => {
            prices.forEach(price => {
                price.classList.toggle('annual');
            });
        });
    }

    // Video modal functionality
    const videoContainer = document.querySelector('.video-container');
    const videoIframe = videoContainer?.querySelector('iframe');

    if (videoContainer && videoIframe) {
        videoContainer.addEventListener('click', () => {
            videoContainer.classList.add('active');
            videoIframe.src += "&autoplay=1";
        });

        document.addEventListener('click', (e) => {
            if (videoContainer.classList.contains('active') && !videoContainer.contains(e.target)) {
                videoContainer.classList.remove('active');
                videoIframe.src = videoIframe.src.replace("&autoplay=1", "");
            }
        });
    }

    // Add hover effect for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            featureCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
});

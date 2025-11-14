document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor link behavior

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Smooth scroll to the target section
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for fixed header height
                    behavior: 'smooth'
                });

                // Optional: Update active class for navigation links
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Optional: Add active class on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) { // Adjust offset as needed
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
// This file contains the JavaScript code for the website. It handles interactivity, such as form submissions, animations, and dynamic content loading.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Handle form submission for the contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(contactForm);
            // Process form data here (e.g., send to server or display a message)
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Example: Load testimonials from JSON file
    fetch('./data/testimonials.json')
        .then(response => response.json())
        .then(data => {
            const testimonialsContainer = document.getElementById('testimonials');
            if (testimonialsContainer) {
                data.forEach(testimonial => {
                    const testimonialElement = document.createElement('div');
                    testimonialElement.classList.add('testimonial');
                    testimonialElement.innerHTML = `
                        <p>"${testimonial.quote}"</p>
                        <p>- ${testimonial.author}</p>
                    `;
                    testimonialsContainer.appendChild(testimonialElement);
                });
            }
        })
        .catch(error => console.error('Error loading testimonials:', error));
});
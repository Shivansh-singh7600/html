document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        // Simple validation
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});

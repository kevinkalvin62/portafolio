// Detectar cuando un elemento entra en la vista (cuando se hace scroll)
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.content-slide-in');
    const images = document.querySelectorAll('.image-slide-in');

    function checkInView() {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('in-view');
            }
        });

        images.forEach((image) => {
            const rect = image.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                image.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkInView);
    checkInView(); // Llamar la función al cargar la página
});
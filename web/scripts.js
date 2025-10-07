document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Validación simple de campos
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const mensaje = document.getElementById('mensaje').value;

            if (nombre && correo && mensaje) {
                // Lógica de envío de datos (ej. fetch API)
                alert('Mensaje enviado con éxito. ¡Gracias por contactarnos!');
                form.reset();
            } else {
                // Feedback visual de error visible y claro [cite: 54]
                alert('Por favor, completa todos los campos del formulario.');
            }
        });
    }

    // Funcionalidad extra: Resaltar la sección actual en la barra de navegación
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 50% de visibilidad
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remover 'active' de todos los enlaces
                navLinks.forEach(link => link.classList.remove('active'));

                // Añadir 'active' al enlace correspondiente
                const targetId = entry.target.id;
                const activeLink = document.querySelector(`#navbar ul li a[href="#${targetId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
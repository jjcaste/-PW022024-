document.addEventListener('DOMContentLoaded', (event) => {
    
    const form = document.getElementById('contactForm');

    
    form.addEventListener('submit', function (event) {
        
        event.preventDefault();

        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        
        if (name && email && message) {
            
            console.log('Nombre:', name);
            console.log('Correo Electrónico:', email);
            console.log('Mensaje:', message);

            
            alert('Formulario enviado con éxito!');

            form.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const paymentMethod = document.querySelector('input[name="pago"]:checked')?.value;

        
        if (name && email && address && paymentMethod) {
            
            console.log('Nombre:', name);
            console.log('Correo Electrónico:', email);
            console.log('Dirección:', address);
            console.log('Método de Pago:', paymentMethod);

            alert(`Gracias ${name} por su compra`);

            form.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});

//ChatGPT. (2024, septiembre 12). Creación de formulario. OpenAI. Conversación con JuanJoseCastellanosMajano.
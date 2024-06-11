function submitForm() {
    const name = document.getElementById('name').value;
    const building = document.getElementById('building').value;
    const address = document.getElementById('address').value;
    const gate = document.getElementById('gate').value;
    const observation = document.getElementById('observation').value;

    // Enviar por correo electrónico (necesitarías un servidor backend para manejar esto)
    // Aquí te dejo un ejemplo de cómo podría ser la lógica con un backend en PHP, Node.js, etc.
    
    // Ejemplo usando EmailJS (requiere configurar EmailJS previamente)
    /*
    emailjs.send("service_id", "template_id", {
        from_name: name,
        building_name: building,
        address: address,
        gate_status: gate,
        observation: observation
    })
    .then((response) => {
        alert('Correo enviado exitosamente!');
    }, (error) => {
        alert('Error al enviar correo: ' + JSON.stringify(error));
    });
    */

    // Enviar por WhatsApp
    const phoneNumber = "YOUR_PHONE_NUMBER";
    const whatsappMessage = `Nombre y Apellido: ${name}\nNombre del Edificio: ${building}\nDirección del Edificio: ${address}\n¿El portón está funcionando?: ${gate}\nObservación: ${observation}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');

    // Mostrar el popup
    document.getElementById('popupMessage').textContent = `Enviado por ${name}`;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

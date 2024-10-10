// Seleccionamos el botón de la página
const button = document.getElementById('colorButton');

// Función para generar un color aleatorio en formato hexadecimal
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Evento que cambia el color de fondo al hacer clic en el botón
button.addEventListener('click', function() {
    const colorAleatorio = generarColorAleatorio();
    document.body.style.backgroundColor = colorAleatorio;
});

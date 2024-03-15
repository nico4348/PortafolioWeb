window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 250);

    // Desplazar el cuerpo del documento hacia abajo 200 píxeles
    if (window.scrollY > 250) {
        document.body.style.marginTop = '80px';
    } else {
        document.body.style.marginTop = '0';
    }
});


function copiarCorreo(){
    const input = document.getElementById('miInput');
    input.select();
    document.execCommand('copy');
    input.setSelectionRange(0, 0);
    alert('¡Texto copiado al portapapeles!');
}


// Selecciona el elemento que contiene tu nombre
const myNameElement = document.getElementById('myName');

// Agrega un event listener para detectar cambios en el header
window.addEventListener('scroll', function() {
    // Verifica si el header tiene la clase 'scrolled'
    const header = document.querySelector('.container');
    if (header.classList.contains('scrolled')) {
        // Si el header está scrolled, agrega tu nombre
        myNameElement.textContent = 'Nicolás Ordoñez';
    } else {
        // Si el header no está scrolled, elimina tu nombre
        myNameElement.textContent = '';
    }
});

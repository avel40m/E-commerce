var botonBuscar = document.querySelector("[data-boton]");
var input = document.querySelector(".cabecera__input");


botonBuscar.addEventListener('click', (event) => {
    if (input.style.display == 'block') {
        input.style.display = 'none';
    } else {
        input.style.display = 'block';        
    }
});
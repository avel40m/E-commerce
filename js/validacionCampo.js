const nombre = document.querySelector("[data-nombre]");
const descripcion = document.querySelector("[data-descripcion]");
const inputTexto = document.querySelector("[data-input-texto]");
const inputTextarea = document.querySelector("[data-input-descripcion]");
const boton = document.querySelector("#boton");

nombre.addEventListener('blur',() => {
    if (nombre.value == "") {
        nombre.style.border = "2px red solid";
        inputTexto.textContent = "El campo nombre no tiene que esta vacio";
        return false;
    }
    if(nombre.value.length > 40){        
        nombre.style.border = "2px red solid";
        inputTexto.textContent = "El campo nombre debe tener maximo 40 caracteres";
        return false;
    }
    nombre.style.border = "1px green solid";
    inputTexto.textContent = "";
    return true;
});

descripcion.addEventListener('blur', () => {
    if (descripcion.value == "") {
        descripcion.style.border = "2px solid red";
        inputTextarea.textContent =  "El campo descripcion no tiene que estar vacio";
        return false;        
    }
    if(descripcion.value.length > 120){
        descripcion.style.border = "2px red solid";
        inputTextarea.textContent = "El campo descripcion debe tener maximo 120 caracteres";
        return false;
    }
    descripcion.style.border = "1px green solid";
    inputTextarea.textContent = "";
    return true;
});

boton.addEventListener('click',(e) => {
    e.preventDefault();
    if(descripcion.value != "" && nombre != ""){
        location.reload()
        return true;


    }
    else
        alert("Complete campos");
});
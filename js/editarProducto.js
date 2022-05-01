import { listaService } from './producto.js';
import { editarDatos } from './controlladores/editarControladores.js';

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  thumbnailElement.dataset.label = file.name;
  // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  } 
// DROP
const agregarId = document.querySelector("[data-id]");
const agregarProducto = document.querySelector("[data-validarAgregar]");
const agregarNombre = document.querySelector("[data-agregarNombre]");
const agregarNombreError = document.querySelector("[data-agregarNombreError]");
const agregarPrecio = document.querySelector("[data-agregarPrecio]"); 
const agregarPrecioError = document.querySelector("[data-agregarPrecioError]");
const agregarDescripcion = document.querySelector("[data-agregarDescripcion]");
const agregarDescripcionError = document.querySelector("[data-agregarDescripcionError]");
const agregarTipo = document.querySelector("[data-agregarTipo]");
const visulizar = document.querySelector("[data-visulizar]");
const agregarImagen = document.querySelector("[data-file]");



agregarProducto.addEventListener('click', (e) => {
  e.preventDefault();
  if (validacionAgregarNombre(agregarNombre) && validacionAgregarProducto(agregarPrecio) && validacionAgregarDescripcion(agregarDescripcion)) {
    editarDatos.formulario();      
    window.location.href = "todosProductos.html";
  }else{
    alert("Complete los campos");
  }
});

function validacionAgregarNombre(validar){
  const nombre = validar.value;
  if (nombre == "") {
    validar.style.border = "2px red solid";
    agregarNombreError.textContent = "El campo nombre no debe ser vacio."
    return false
  }
  if (nombre.length > 20) {
    validar.style.border = "2px red solid";
    agregarNombreError.textContent = "El campo nombre no debe ser mayor a 20 caracteres."; 
    return false;
  }
  validar.style.border = "2px green solid";
  agregarNombreError.textContent = "";
  return true;
}

function validacionAgregarProducto(validar){
  const producto = validar.value;
  var valoresAceptados = /^[0-9]+$/;
  if (producto.match(valoresAceptados)) {
      agregarPrecioError.textContent = "";
      validar.style.border = "2px green solid";
      return true;
  } else {
    agregarPrecioError.textContent = "El campo precio debe ser solo numerico";
    validar.style.border = "2px red solid";
    return false;
  }
}

function validacionAgregarDescripcion(validar){
  const descripcion = validar.value;
  if (descripcion == "") {
    validar.style.border = "2px red solid";
    agregarDescripcionError.textContent = "El campo descripcion no tiene que ser vacio.";
    return false;
  }
  if (descripcion.length > 150) {
    validar.style.border = "2px red solid";
    agregarDescripcionError.textContent = "El campo descripcion no debe ser mayor a 150 caracteres."
    return false;
  }
  validar.style.border = "2px green solid";
  agregarDescripcionError.textContent = "";
  return true;
}

const url = new URL(window.location);
const id = url.searchParams.get("id");

listaService.detallesProducto(id).then((respuesta) => {
    agregarId.value = respuesta.id;
    agregarNombre.value = respuesta.nombre;
    agregarPrecio.value = respuesta.precio;
    agregarDescripcion.value = respuesta.descripcion;
    agregarTipo.value = respuesta.tipo;
    visulizar.value = respuesta.imagen;
    visulizar.src = respuesta.imagen;
}).catch(error => console.log(error));

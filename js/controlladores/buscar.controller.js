import { listaService } from '../producto.js';

const descripcion = document.querySelector("[data-descripcion]");

const obtenerProducto = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    listaService.detallesProducto(id).then((datos) => {
        const linea = nuevaLinea(datos.imagen,datos.nombre,datos.precio,datos.descripcion);
        descripcion.appendChild(linea);
    });    
}

obtenerProducto();

const nuevaLinea = (imagen,nombre,precio,descripcion) => {
    const linea = document.createElement("div");
    linea.classList.add("descripcion");
    const contenido = `<div class="descripcion__imagen">
    <img src="${imagen}" alt="" />
  </div>
  <div class="descripcion__texto">
    <h1>${nombre}</h1>
    <h5>$ ${precio}</h5>
    <p>${descripcion}</p>
  </div>`;
  linea.innerHTML = contenido;
  return linea;
}

import { listaService } from '../producto.js';

const crearNuevaLinea = (nombre, precio, imagen) => {
    const linea = document.createElement("div");
    linea.classList.add("galeria__principal")
    const contenido = `<div class="galeria__principal__descripcion" >
    <img src="${imagen}" alt="" />
          <div class="galeria__principal__descripcion__texto">
            <h5>${nombre}</h5>
            <p>$ ${precio}</p>
            <a href="#">Ver producto</a>
          </div>
          </div>`
    linea.innerHTML = contenido;
    return linea;
}
listaService.
listaProducto().then((data) => {
    data.forEach(listas => {

        const nuevaLista = crearNuevaLinea(listas.nombre, listas.precio, listas.imagen);
        if (listas.tipo === "starwars") {
            datos.appendChild(nuevaLista);
        }
        if (listas.tipo === "consola") {
            datosConsolas.appendChild(nuevaLista);
        }
        if (listas.tipo === "diversos") {
            datosDiversos.appendChild(nuevaLista);
        }
    });
}).catch((error) => alert("Ocurrio el siguiente error: " + error));

const datos = document.querySelector("[data-listado-starwars]");
const datosConsolas = document.querySelector("[data-listado-consolas]");
const datosDiversos = document.querySelector("[data-listado-diversos]")


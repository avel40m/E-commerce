import { listaService } from './producto.js';

const nuevaLinea = (id,nombre, precio, imagen) => {
    const linea = document.createElement("div");
    linea.classList.add("galeria__principal");
    const contenido = `<div class="galeria__principal__descripcion">
    <img src="../${imagen}" alt="" />
    <div class="galeria__principal__descripcion__texto">
      <h5>${nombre}</h5>
      <p>$ ${precio}</p>
      <a href="../../producto.html?id=${id}">Ver producto</a>
    </div>
  </div>`
    linea.innerHTML = contenido;
    return linea;
}

const listadoStarWars = document.querySelector("[data-listadostarwars]");

listaService.listaProducto().then((data) => {
    data.forEach(list => {
        const listado = nuevaLinea(list.id,list.nombre, list.precio, list.imagen);
        if (list.tipo === "starwars") {
            listadoStarWars.appendChild(listado);
        }
    });
}).catch(error => console.log(error));
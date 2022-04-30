import { listaService } from './producto.js';

const url = new URL(window.location);
const valor = url.search;

listaService.buscarProducto(valor).then((respuesta) => {
    busqueda(respuesta);
}).catch(error => console.log(error));

const listadoBusqueda = document.querySelector("[data-listadobusqueda]");

const busqueda = (datos) => {
    if (datos.length === 0) {
        const h1 = document.createElement("h1");
        h1.innerHTML = "No se encontro el producto";    
        listadoBusqueda.appendChild(h1); 
    } else {
        datos.forEach(dato => {
            const linea = mostrar(dato.id,dato.imagen,dato.nombre,dato.precio);
            listadoBusqueda.appendChild(linea);
        });
    }
}


const mostrar = (id,imagen,nombre,precio) => {
    console.log(id);
    const linea = document.createElement("div");
    const contenido = `
    <img src="${imagen}" alt="" />
    <div class="galeria__principal__descripcion__texto">
      <h5>${nombre}</h5>
      <p>$ ${precio}</p>
      <a href="../../producto.html?id=${id}">Ver producto</a>
    </div>
  </div>`;
  linea.innerHTML = contenido;
  return linea;
}


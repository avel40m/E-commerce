import { listaService } from './producto.js';

const nuevaLinea = (id, imagen, nombre, precio) => {

    const linea = document.createElement("div");
    linea.classList.add("grid-item");
    const contenido = ` <img
    src="${imagen}"
    alt=""
    width="120"
    height="120"
  />
  <h5>${nombre}</h5>
  <h6>$${precio}</h6>
  <a href="producto.html?id=${id}">Ver producto</a>`;
  linea.innerHTML = contenido;
  return linea
}

const productoSimilares = document.querySelector("[data-productoSimilares]");

listaService.listaProducto().then((datos) => {
    let productos = [];

    for (let i = 0; i < 6; i++) {
        
        var nuevo = datos[Math.floor(Math.random() * datos.length)];
        if(productos.indexOf(nuevo)!=-1){continue;}else{productos.push(nuevo);}
    }

    productos.forEach(producto => {
        const linea = nuevaLinea(producto.id,producto.imagen,producto.nombre,producto.precio);
        productoSimilares.appendChild(linea);
    });
    
}).catch(error => console.log(error));


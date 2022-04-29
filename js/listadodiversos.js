import { listaService } from './producto.js';
var i = 0;

const nuevaLinea = (nombre,precio,imagen) => {
   
    const linea = document.createElement("div");
    linea.classList.add("galeria__principal");
    const contenido = `<div class="galeria__principal__descripcion">
    <img src="../${imagen}" alt="" />
    <div class="galeria__principal__descripcion__texto">
      <h5>${nombre}</h5>
      <p>$ ${precio}</p>
      <a href="producto.html">Ver producto</a>
    </div>
  </div>`

  linea.innerHTML = contenido;
  
  return linea;
}

const lineaDiversos = document.querySelector("[data-listadosdiversos]");

listaService.listaProducto().then((data) => {
    data.forEach(datos => {
        const linea = nuevaLinea(datos.nombre,datos.precio,datos.imagen);
        if (datos.tipo === 'diversos') {
            lineaDiversos.appendChild(linea);            
        }
    });
}).catch(error => console.log(error));
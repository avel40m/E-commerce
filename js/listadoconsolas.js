import { listaService } from './producto.js'

const nuevaLinea = (nombre,precio,imagen) =>  {
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

const listadoConsola = document.querySelector("[data-listadosconsolas]");

listaService.listaProducto().then((data) => {
    data.forEach(datos => {
        const linea = nuevaLinea(datos.nombre,datos.precio,datos.imagen);
        if (datos.tipo === "consola") {
            listadoConsola.appendChild(linea);                
        }
    });
}).catch(error => console.log(error));
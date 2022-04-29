import { listaService } from './producto.js';

const nuevaLinea = (id,nombre,precio,imagen) => {
    const linea = document.createElement("div");
    const contenido = `<div class="todos__productos__cuerpo__descripcion">
    <div
      class="todos__productos__cuerpo__descripcion__imagen" style="background-image: url('${imagen}');">
     <a href=""><i class="fa-solid fa-pencil"></i></a>
      <a href=""><i class="fa-solid fa-trash"></i></a>
    </div>
    <div class="todos__productos__cuerpo__descripcion__texto">
      <h4>${nombre}</h4>
      <h5>${precio}</h5>
    </div>
  </div>
  <br><br><br><br>`;
  linea.innerHTML = contenido;
  return linea;
}

const todosProductos = document.querySelector("[data-verTodosProductos]");

listaService.listaProducto().then((data) => {
    data.forEach(datos => {
        const linea = nuevaLinea(datos.id,datos.nombre,datos.precio,datos.imagen);
        todosProductos.appendChild(linea);
    });
}).catch(error => console.log(error));
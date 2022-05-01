import { listaService } from './producto.js';

const nuevaLinea = (id,nombre,precio,imagen) => {
    const linea = document.createElement("div");
    const contenido = `<div class="todos__productos__cuerpo__descripcion">
    <div
      class="todos__productos__cuerpo__descripcion__imagen" style="background-image: url('${imagen}');">
     <a href="editarProducto.html?id=${id}"><i class="fa-solid fa-pencil"></i></a>
      <a href="#" data-eliminarproducto id="${id}"><i class="fa-solid fa-trash"></i></a>
    </div>
    <div class="todos__productos__cuerpo__descripcion__texto">
      <h4>${nombre}</h4>
      <h5>${precio}</h5>
    </div>
  </div>`;
  linea.innerHTML = contenido;
  const btnEliminar = linea.querySelector("[data-eliminarproducto]");
  btnEliminar.addEventListener('click', () => {
    const id = btnEliminar.id;
    listaService.eliminarProducto(id).then(respuesta => console.log(respuesta)).catch(error => console.log(error));
  });
  return linea;
}

const todosProductos = document.querySelector("[data-verTodosProductos]");

listaService.listaProducto().then((data) => {
    data.forEach(datos => {
        const linea = nuevaLinea(datos.id,datos.nombre,datos.precio,datos.imagen);
        todosProductos.appendChild(linea);
    });
}).catch(error => console.log(error));

const eliminarProducto = (id) => {
  console.log("El id es: " + id);
}
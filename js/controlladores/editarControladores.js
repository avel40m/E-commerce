import { listaService } from '../producto.js';


const formulario = (e) => {
    const Id = document.querySelector("[data-id]").value;
    const Nombre = document.querySelector("[data-agregarNombre]").value;
    const Precio = document.querySelector("[data-agregarPrecio]").value;
    const Descripcion = document.querySelector("[data-agregarDescripcion]").value;
    const Tipo = document.querySelector("[data-agregarTipo]").value;
    const imagen = document.querySelector("[data-visulizar]").src;
    var arrayImagen = imagen.split("/");
    const textoImagen = arrayImagen[3] + '/' + arrayImagen[4];

    listaService.actualizarProducto(Id,Nombre,Precio,Descripcion,Tipo,textoImagen);
}

export const editarDatos = {
    formulario,
}
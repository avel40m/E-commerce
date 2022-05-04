import { listaService } from '../producto.js'
const formulario = (e) => {
    const archivo = document.querySelector("[data-file]").value;
    const nombre = document.querySelector("[data-agregarNombre]").value;
    const precio = parseFloat(document.querySelector("[data-agregarPrecio]").value);
    const descripcion = document.querySelector("[data-agregarDescripcion]").value;
    const tipo = document.querySelector("[data-agregarTipo]").value;

    var arrayImagen = archivo.split("\\");
    const textoImagen = "imagenes/"+arrayImagen[2];

   listaService.crearProducto(nombre,precio,descripcion,tipo,textoImagen).then(respuesta => {
        console.log(respuesta);
    }).catch(error => console.log(error));
}

export const enviarDatos = {
    formulario,
};
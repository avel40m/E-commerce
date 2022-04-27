const formulario = (e) => {
    const archivo = document.querySelector("[data-file]").value;
    const nombre = document.querySelector("[data-agregarNombre]").value;
    const precio = parseFloat(document.querySelector("[data-agregarPrecio]").value);
    const descripcion = document.querySelector("[data-agregarDescripcion]").value;
    const tipo = document.querySelector("[data-agregarTipo]").value;

    var textoImagen =archivo.split("\\");
    textoImagen = "imagenes/" + textoImagen[2];
    console.log(textoImagen);
    console.log(nombre);
    console.log(precio);
    console.log(descripcion);
    console.log(tipo);

    console.log("Datos enviados");
}

export const enviarDatos = {
    formulario,
};
const listaProducto = () => fetch("http://localhost:3000/ecommerce").then(respuesta => respuesta.json());


const crearProducto = (nombre,precio,descripcion,tipo,imagen) => {
    return fetch("http://localhost:3000/ecommerce", {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({id:uuid.v4(),nombre,precio,descripcion,tipo,imagen})
    })
}


export const listaService = {
    listaProducto,
    crearProducto
};

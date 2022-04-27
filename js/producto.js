const listaProducto = () => fetch("http://localhost:3000/ecommerce").then(respuesta => respuesta.json());

export const listaService = {
    listaProducto,
};

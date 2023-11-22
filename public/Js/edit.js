// Simulación de datos del producto
var producto = {
    nombre: "Baby Yoda Blueball",
    descripcion: "Figura Funko coleccionable de Baby Yoda de la saga Star Wars sosteniendo una Blueball.",
    sku: "STW001001",
    precio: "$1.799,99",
    stock: "10",
    descuento: "10%",
    categoria: "figura",
    licencia: "starwars",
    cuotas: "3cuotas",
};

// Función para cargar los datos del producto en el formulario
function cargarProducto() {
    document.getElementById('nombre').value = producto.nombre;
    document.getElementById('descripcion').value = producto.descripcion;
    document.getElementById('sku').value = producto.sku;
    document.getElementById('precio').value = producto.precio;
    document.getElementById('stock').value = producto.stock;
    document.getElementById('descuento').value = producto.descuento;
    document.getElementById('categoria').value = producto.categoria;
    document.getElementById('licencia').value = producto.licencia;
    document.getElementById('cuotas').value = producto.cuotas;

}

// Cargar los datos del producto cuando se cargue la página
window.onload = cargarProducto;





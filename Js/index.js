// Simulación de datos del producto (puedes obtenerlos de una base de datos o de alguna fuente externa)
var producto = {
    nombre: "Kakashi Hatake Shippuden Saga",
    descripcion: "Figura Funko coleccionable de Kakashi Hatake de la saga Naruto Shipudden invocando chidori.",
    sku: "NAR001012",
    precio: "$1.799,00",
    stock: "10",
    descuento: "10%",
};

// Función para cargar los datos del producto en el formulario
function cargarProducto() {
    document.getElementById('nombre').value = producto.nombre;
    document.getElementById('descripcion').value = producto.descripcion;
    document.getElementById('sku').value = producto.sku;
    document.getElementById('precio').value = producto.precio;
    document.getElementById('stock').value = producto.stock;
    document.getElementById('descuento').value = producto.descuento;
}

// Cargar los datos del producto cuando se cargue la página
window.onload = cargarProducto;




function ajustarTamaño(input) {
    // Obtener la longitud del texto en el input
    var longitudTexto = input.value.length;

    // Establecer el tamaño del input en función de la longitud del texto
    input.setAttribute('size', longitudTexto);
}
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
    cuotas: "3cuotas"
};

// Función para cargar los datos del producto
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

// Cargar los datos del producto
window.onload = cargarProducto;


// Elegir imágen del producto
function showImages(event) {
    const input = event.target;
    const files = input.files;

    if (files.length >= 1) {
        for (let i = 0; i < files.length; i++) {
            if (i < 2) {
                const reader = new FileReader();
                const previewImage = document.getElementById(`previewImage${i + 1}`);
                const imageContainer = document.getElementById(`${i === 0 ? 'frenteImg' : 'dorsoImg'}`);

                reader.onload = function (e) {
                    previewImage.src = e.target.result;
                    previewImage.style.display = 'block';
                    imageContainer.style.display = 'block';
                };

                reader.readAsDataURL(files[i]);
            } else {
                console.log('Se permiten solo dos imágenes');
                break;
            }
        }
    } else {
        console.log('No se han seleccionado archivos.');
    }
}






const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const quantity = document.querySelector('#quantity');
const cartPrice = document.querySelector('.cart-price h5');

// Acá se definen los objetos con los precios por unidadas para cada artículo
const preciosPorUnidad = {
    'BABY YODA BLUEBALL': 1799.99,
    'PIDGEOTTO' : 1799.99,
};

// Inicializar el artículo
let articuloActual = 'BABY YODA BLUEBALL';


//Función para agregar o restar cantidad de objetos y actualizar el total
function updateTotal() {
    const quantityValue = Number(quantity.value);
    const unitPrice = preciosPorUnidad[articuloActual];
    const total = (quantityValue * unitPrice).toFixed(2);
    cartPrice.textContent = `$ ${total}`;
  }
  
  add.addEventListener('click', () => {
    quantity.value = Number(quantity.value) + 1;
    updateTotal();
  });
  
  subtract.addEventListener('click', () => {
    quantity.value = Number(quantity.value) === 0 ? 0 : Number(quantity.value) - 1;
    updateTotal();
  });
  
  quantity.addEventListener('change', () => {
    quantity.value = Number(quantity.value) < 0 ? 0 : quantity.value;
    updateTotal();
  });
  


  function finalizarCompra() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡GRACIAS POR SU COMPRA!",
      showConfirmButton: false,
      timer: 2000,
      width: 600,
      padding: "6em",
      fontsize: "2em",
    });
  }
  
  document
    .querySelector(".checkout-button")
    .addEventListener("click", function () {
      finalizarCompra();
    });

const botonEliminar = document.getElementsByClassName(".cart-remove");

function eliminarProducto(event) {
  const contenedorProducto = event.target.closest(".cart__item");

  if (contenedorProducto) {
    contenedorProducto.remove();
  }
}

const botonesEliminar = document.querySelectorAll(".cart-remove");

botonesEliminar.forEach(function (boton) {
  boton.addEventListener("click", eliminarProducto);
});


document.querySelector(".cart-remove").addEventListener("click", borrarDelCarrito);

function borrarDelCarrito(e) {
  Toastify({
    text: "PRODUCTO ELIMINADO",
    duration: 1000,
    position: "right",
    gravity: "bottom",
    style: {
      background: "linear-gradient(to right, var(--primary-solid), var(--primary-solid))",
    },
  }).showToast();
}
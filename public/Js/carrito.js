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
  
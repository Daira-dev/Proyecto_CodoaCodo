const add = document.querySelector("#add");
const sustract = document.querySelector("#sustract");
const quantity = document.querySelector("#quantity");

add.addEventListener(
  "click",
  () => (quantity.value = Number(quantity.value) + 1)
);

sustract.addEventListener("click", () => {
  quantity.value > 0 ? (quantity.value = Number(quantity.value) - 1) : 0;
});

document.querySelector(".btn_1").addEventListener("click", agregarAlCarrito);

function agregarAlCarrito(e) {
  Toastify({
    text: "PRODUCTO AGREGADO AL CARRITO",
    duration: 1000,
    position: "right",
    gravity: "bottom",
    style: {
      background: "linear-gradient(to right, var(--primary-solid), var(--primary-solid))",
    },
  }).showToast();
}
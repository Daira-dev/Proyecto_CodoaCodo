
  
document.querySelector(".remove").addEventListener("click", removeItem);

function removeItem(e) {
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
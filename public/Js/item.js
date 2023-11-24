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

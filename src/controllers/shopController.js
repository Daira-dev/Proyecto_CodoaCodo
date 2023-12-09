export const shop = (req, res) => res.render("../src/views/shop.ejs");

export const item = (req, res) => res.render("../src/views/item.ejs");

export const add = (req, res) => {
  console.log(req.body);
  res.send(
    `Router for add the current item ID: ${req.params.id} to the shop cart`
  );
};

export const cart = (req, res) => res.render("../src/views/carrito.ejs");

export const cartpost = (req, res) => {
  console.log(req.body);
  res.send("Router for go to checkout page");
};

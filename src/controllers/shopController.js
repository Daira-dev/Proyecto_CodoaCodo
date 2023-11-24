const shopControllers = {
    shop: (req, res) => res.send('Router for shop view'),
    item: (req, res) => res.send(`Router for find and retrieve a product from the ID: ${req.params.id}`),
    add: (req, res) => res.send(`Router for add the current item ID: ${req.params.id} to the shop cart`),
    cart: (req, res) => res.send('Router for Cart view'),
    cartpost: (req, res) => res.send('Router for got to checkout page')
}

module.exports = shopControllers;
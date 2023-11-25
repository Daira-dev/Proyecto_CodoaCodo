export const shop = (req, res) => res.send('Router for shop view');

export const item = (req, res) => res.send(`Router for find and retrieve a product from the ID: ${req.params.id}`);

export const add = (req, res) => { 
    console.log(req.body)
    res.send(`Router for add the current item ID: ${req.params.id} to the shop cart`)
};

export const cart = (req, res) => res.send('Router for Cart view');

export const cartpost = (req, res) => { 
    console.log(req.body)
    res.send('Router for go to checkout page')
};
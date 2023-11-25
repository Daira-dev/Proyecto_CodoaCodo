export const admin = (req, res) => res.send('Router for admin view');

export const create = (req, res) => res.send('Router for create a product');

export const createpost = (req, res) => { 
    console.log(req.body)
    res.send('Router for save and send the new product')
};

export const id = (req, res) => {
    const productId = req.query.id;
    res.send(`Router for edit the product for ID: ${req.params.id}`)
};

export const idput = (req, res) => {
    const productId = req.query.id;
    res.send(`Router for save a product for ID: ${req.params.id}`)
};

export const remove = (req, res) => {
    const productId = req.query.id;
    res.send(`Router for delete a product for ID: ${req.params.id}`)
};

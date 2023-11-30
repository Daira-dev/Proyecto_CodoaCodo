export const admin = (req, res) => res.render('../src/views/admin');

export const create = (req, res) => res.render('../src/views/create');

export const createpost = (req, res) => { 
    console.log(req.body)
    res.send('Router for save and send the new product')
};

export const id = (req, res) => {
    const productId = req.params.id;
    res.render('../src/views/edit')
};

export const idput = (req, res) => {
    const productId = req.params.id;
    res.send(`Router for save a product for ID: ${req.params.id}`)
};

export const remove = (req, res) => {
    const productId = req.params.id;
    res.send(`Router for delete a product for ID: ${req.params.id}`)
};

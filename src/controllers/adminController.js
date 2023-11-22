const adminControllers = {
    admin: (req, res) => res.send('Router for admin view'),
    create: (req, res) => res.send('Router for create a product'),
    createpost: (req, res) => res.send('Router for save and send the new product'),
    id: (req, res) => res.send(`Router for edit the product for ID: ${req.params.id}`),
    idput: (req, res) => res.send(`Router for save a product for ID: ${req.params.id}`),
    delete: (req, res) => res.send(`Router for delete a product for ID: ${req.params.id}`)
}

module.exports = adminControllers;
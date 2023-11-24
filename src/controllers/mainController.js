const mainControllers = {
    home: (req, res) => res.send('Router for Home view'),
    contact: (req, res) => res.send('Router for Contact view'),
    about: (req, res) => res.send('Router for About view'),
    faqs: (req, res) => res.send('Router for Faqs view')
}

module.exports = mainControllers;
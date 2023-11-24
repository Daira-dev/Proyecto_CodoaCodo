const authControllers = {
    login: (req, res) => res.send('Router for login view'),
    loginpost: (req, res) => res.send('Router for login'),
    register: (req, res) => res.send('Router for register view'),
    registerpost: (req, res) => res.send('Router for register'),
    logout: (req, res) => res.send('Router for leave to login and come back the home page')
}

module.exports = authControllers;
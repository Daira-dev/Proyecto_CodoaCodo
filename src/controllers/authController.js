export const login = (req, res) => res.send('Router for login view');

export const loginpost = (req, res) => { 
    console.log(req.body)
    res.send('Router for login')
};

export const register = (req, res) => res.send('Router for register view');

export const registerpost = (req, res) => { 
    console.log(req.body)
    res.send('Router for register')
};

export const logout = (req, res) => res.send('Router for leave to login and come back the home page');
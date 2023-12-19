import userModel from '../models/userModel.js';

export const login = (req, res) => res.render('../src/views/login.ejs');

export const loginpost = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await userModel.getUser(email, password);

        if (user) {
            const passwordValid = userModel.comparePassword(password, user.password);
            if (passwordValid) {
                res.render('../src/views/loginpost.ejs');
            } else {
                res.status(401).send('Contraseña incorrecta');
            }
        } else {
            res.status(401).send('Usuario no registrado o email incorrecto');
        }
    } catch (error) {
        console.error('Error al iniciar sesión', error);
        res.status(500).send('Error interno del servidor: ' + error.message);
    }
};


export const register = (req, res) => res.render('../src/views/register.ejs');

export const registerpost = async (req, res) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const repeatPassword = req.body.reapeatpass;

    try {
        if (password !== repeatPassword) {
            return res.status(400).send('Las contraseñas no coinciden');
        }
        const success = await userModel.createUser(name, lastname, email, password);

        if (success) {
            res.send('Usuario registrado exitosamente');
        } else {
            res.status(500).send('Error al registrar usuario');
        }
    } catch (error) {
        console.error('Error al registrar usuario', error);
        res.status(500).send('Error interno del servidor');
    }
};

export const logout = (req, res) => res.render('../src/views/index.ejs');
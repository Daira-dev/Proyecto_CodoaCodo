import userModel from '../models/userModel.js';

export const login = (req, res) => res.render('../src/views/login.ejs');

export const loginpost = (req, res) => res.render('../src/views/admin.ejs');

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
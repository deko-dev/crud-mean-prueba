const usuarioModel = require('../models/usuarios.model');
const usuariosModel = require('../models/usuarios.model');

// Creamos la constante para exportar las funciones o métodos
const usuariosController = {};

// Creamos el metodo getUsuarios para obtener todos los usuarios
usuariosController.getUsuarios = async(req, res) => {

    // Cargamos todos los usuarios que se encuentran en la Database a la const Usuarios
    const usuarios = await usuariosModel.find();

    // Enviamos como respuest json los usuarios enviados por la Database
    res.json(usuarios);

}

// Metodo para crear un Usuario
usuariosController.crearUsuario = async(req, res) => {

    // Guaradamos el nuevoo modelo de usuario
    const usuario = await new usuariosModel(req.body);

    // Guardamos este usuario en la Database
    usuario.save()

    // Enviamos como respuesta un status
    res.json({
        status: 'Usuario agregado'
    });

}

// Metodo para ver un usuario
usuariosController.verUsuario = async(req, res) => {


    const usuario = await usuarioModel.findById(req.params.id);

    res.json(usuario);

}

// Metodo para editar un usuario
usuariosController.editarUsuario = async(req, res) => {

    const usuario = {
        ...req.body
    }

    await usuarioModel.findByIdAndUpdate(req.params.id, { $set: usuario }, { new: true });

    res.json({
        status: "Usuario actualizado"
    })

}

// Metodo para eliminar un usuario
usuariosController.borrarUsuario = async(req, res) => {

    await usuariosModel.findByIdAndDelete(req.params.id);


    res.json({
        status: "Usuario eliminado"
    })

}


module.exports = usuariosController;
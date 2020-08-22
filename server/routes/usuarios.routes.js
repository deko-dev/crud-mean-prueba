const express = require('express');
const usuariosController = require('../controllers/usuario.controller');
const router = express.Router();

// Ruta que devuelve todos los usaurios
router.get('/', usuariosController.getUsuarios);

// Ruta que crea un usuario
router.post('/', usuariosController.crearUsuario);

// Ruta que permite obtener un Usuario
router.get('/:id', usuariosController.verUsuario);

// Ruta que permite editar un usuario
router.put('/:id', usuariosController.editarUsuario);

// Ruta que elimina un usuario
router.delete('/:id', usuariosController.borrarUsuario);




module.exports = router;
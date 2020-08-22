const mongoose = require('mongoose');
const { Schema } = mongoose

const usuarioSchema = new Schema({

    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    }



})



module.exports = mongoose.model('usuarios', usuarioSchema);
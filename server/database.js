const mongoose = require('mongoose');

const URL = "mongodb+srv://prueba-tecnica:prueba-tecnica@crud-usuarios.pe6xt.mongodb.net/usuarios?retryWrites=true&w=majority";


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log("DB Conectada"))
    .catch((err) => console.log("Error al conectar", err));


module.exports = mongoose;
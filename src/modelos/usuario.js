const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    nombre:{ type: String, required: true},
    correo:{ type: String, required: true, unique: true},
    password:{ type: String, require: true},
    direccion:{ type: String, require: true},
    telefono:{ type: String, require: true},
    rol:{ type: String, enum: ['cliente', 'admin'], default:'cliente'},
    fechaRegistro:{ type: Date, default:Date.now},
})
module.exports = mongoose.model('Usuario', UsuarioSchema)
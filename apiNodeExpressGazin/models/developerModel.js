const mongoose = require('mongoose')

const developerSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    hobby: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Developer', developerSchema)
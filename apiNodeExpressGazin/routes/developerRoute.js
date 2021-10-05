const express = require('express')
const router = express.Router()
const DeveloperModel = require('../models/developerModel')

//Verbos HTTP utilizados:

// GET
router.get('/', async(req, res) => {
    try {
        const developers = await DeveloperModel.find()
        res.json(developers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// GET POR ID
router.get('/:id', getDeveloper, (req, res) => {
    res.json(res.developers)
})

// CREATE
router.post('/', async(req, res) => {
    const devModel = new DeveloperModel({
        nome: req.body.nome,
        idade: req.body.idade,
        sexo: req.body.sexo,
        hobby: req.body.nome,
        dataNascimento: req.body.dataNascimento,
    })
    try {
        const newdeveloper = await devModel.save()
        res.status(201).json(newdeveloper)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// UPDATE
router.patch('/:id', getDeveloper, async(req, res) => {

    if (req.body.nome != null) {
        res.developer.nome = req.body.nome
    }

    if (req.body.sexo != null) {
        res.developer.sexo = req.body.sexo
    }

    if (req.body.idade != null) {
        res.developer.idade = req.body.idade
    }

    if (req.body.hobby != null) {
        res.developer.hobby = req.body.hobby
    }

    if (req.body.dataNascimento != null) {
        res.developer.dataNascimento = req.body.dataNascimento
    }

    try {
        const updateDeveloper = await res.developer.save()
        res.json(updateDeveloper)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// DELETE
router.delete('/:id', getDeveloper, async(req, res) => {
    try {
        await res.developer.remove()
        res.json({ message: 'Desenvolvedor Excluído' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Metodo responsavel tratar a requisizao para que o usuario
//nao fica dando enter varias vezes seguida no endpoint da aplicações
async function getDeveloper(req, res, next) {
    let developer
    try {
        developer = await DeveloperModel.findById(req.params.id)
        if (developer == null) {
            return res.status(404).json({ message: 'Rota não encontrada' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.developer = developer
    next()
}

module.exports = router
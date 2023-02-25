const { Console } = require('console')
const Express = require('express')

const app = Express()


const tarefaController = require('./src/controllers/tarefaController')
const usuarioController = require('./src/controllers/usuarioController')

usuarioController.rotas(app)
tarefaController.rotas(app)

app.listen(3200, function () {


    console.log("OK")
})
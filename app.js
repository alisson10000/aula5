const Express = require('express')
const app = Express()
const port = 3200
const tarefaController = require('./src/controllers/TarefaController')
const usuarioController = require('./src/controllers/UsuarioController')
usuarioController.rotas(app)
tarefaController.rotas(app)
app.listen(port, function () {
    console.log(` servidor rodando em localhost:${port}/usuario ` )
})
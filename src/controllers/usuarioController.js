
class UsuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/usuario', UsuarioController.listar)
        app.post('/usuario', UsuarioController.inserir)
    }

    static listar(req, res){
        res.send('Rota ativada com GET e recurso usuario: lista de usuarios deve ser retornada')
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
    }
}

module.exports = UsuarioController
class TarefaController {
    static rotas(app){
        // Rota para o recurso tarefa
        app.get('/tarefa', TarefaController.listar)
        app.post('/tarefa', TarefaController.inserir)
    }

    static listar(req, res){
        res.send('Rota ativada com GET e recurso tarefa: lista de tarefas deve ser retornada')
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso tarefa: tarefa deve ser inserida')
    }
}

module.exports = TarefaController
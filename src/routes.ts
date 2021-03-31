var validator = require('cpf-cnpj-validator');

module.exports = function(app : any) {
    
    const messages : any = {
        true: "ABLE_TO_VOTE",
        false: "UNABLE_TO_VOTE"
    };
        
    app.get('/users/:cpf', function(req : any, res : any, next : any) {
        res.send({
            status:messages[validator.cpf.isValid(req.params.cpf)]
        });
    });
}
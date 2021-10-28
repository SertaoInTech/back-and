const express = require('express');
const SalaController = require('./controllers/SalaController');
const UserController = require('./controllers/UserController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();


/*ROTA DE LOGIN DA API*/
routes.get('/users', authMiddleware, UserController.index);
routes.post('/users',UserController.store);
routes.put('/users/:user_id', authMiddleware, UserController.update);
routes.delete('/users/:user_id',authMiddleware, UserController.delete);
routes.post('/users/login', UserController.login);

//TODAS AS ROTAS ABAIXO IRA PRECISAR DE TOKEN
routes.use(authMiddleware);

/*ROTAS DA SALA*/
routes.get('/salas', SalaController.index);
routes.post('/salas', SalaController.store);
routes.put('/salas/:sala_id', SalaController.update);
routes.delete('/salas/:sala_id', SalaController.delete);


routes.get('/', (req, res) => {

    return res.json({
        'Service': 'Okay',
        'data': Date.now()
    })

});

module.exports = routes;
const express = require('express');
const SalaController = require('./controllers/SalaController');

const routes = express.Router();


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
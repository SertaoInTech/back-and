const express = require('express');
const multer = require('multer');
const SalaController = require('./controllers/SpaceController');
const UserController = require('./controllers/UserController');
const excelController = require('./controllers/ExcelController');
const matterController = require('./controllers/MatterController')
const teachersController = require('./controllers/TeachersController')
const contactsController = require('./controllers/ContactsController')

const configMulterexel = require('./config/multerExel');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();


/*ROTA DE LOGIN DA API*/
routes.get('/users', authMiddleware, UserController.index);
routes.post('/users',UserController.store);
routes.put('/users/:user_id', authMiddleware, UserController.update);
routes.delete('/users/:user_id',authMiddleware, UserController.delete);
routes.post('/users/login', UserController.login);

//TODAS AS ROTAS ABAIXO IRA PRECISAR DE TOKEN
//routes.use(authMiddleware);

/*ROTAS DA SALA*/
routes.get('/space', SalaController.index);
routes.post('/space', SalaController.store);
routes.put('/space/:sala_id', SalaController.update);
routes.delete('/space/:sala_id', SalaController.delete);


/*ROTAS DA MATERIAS*/
routes.get('/matter', matterController.index);
routes.post('/matter', matterController.store);
routes.put('/matter/:matter_id', matterController.update);
routes.delete('/matter/:matter_id', matterController.delete);

/*ROTAS DA PROFESSORES*/
routes.get('/teachers', teachersController.index);
routes.post('/teachers', teachersController.store);
routes.put('/teachers/:teacher_id', teachersController.update);
routes.delete('/teachers/:teacher_id', teachersController.delete);


/*ROTAS DA CONTATOS*/
routes.get('/contacts', contactsController.index);
routes.post('/contacts', contactsController.store);
routes.put('/contacts/:contacts_id', contactsController.update);
routes.delete('/contacts/:contacts_id', contactsController.delete);

/*UPLOAD DO ARQUIVO XLSX */
routes.post('/upload',multer(configMulterexel).array('file'),excelController.upload);



module.exports = routes;
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const Sala = require('../models/Space')
const User = require('../models/User')
const Matter = require('../models/Matter')
const Teachers = require('../models/Teachers')



const connection = new Sequelize(dbConfig);

/*try{
    connection.authenticate();
    console.log('Connection has been established successfully');
} catch (error){
    console.error('Unable to connect to the database', error);
}*/

Sala.init(connection);
User.init(connection);
Matter.init(connection);
Teachers.init(connection);

module.exports = connection;
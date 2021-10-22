const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const Sala = require('../models/Sala')
const connection = new Sequelize(dbConfig);

/*try{
    connection.authenticate();
    console.log('Connection has been established successfully');
} catch (error){
    console.error('Unable to connect to the database', error);
}*/

Sala.init(connection);

module.exports = connection;
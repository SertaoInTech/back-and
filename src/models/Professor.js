const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            telefone: DataTypes.STRING,
            email: DataTypes.STRING
        }, {sequelize})
    }
}
module.exports = Professor
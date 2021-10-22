const { Model, DataTypes } = require('sequelize');

class Sala extends Model {
    static init(sequelize){
        super.init({
            number_sala: DataTypes.INTEGER,
            andar: DataTypes.STRING,
            number_capacity: DataTypes.INTEGER
        }, {sequelize})
    }
}
module.exports = Sala
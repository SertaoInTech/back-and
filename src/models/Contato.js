const { Model, DataTypes } = require('sequelize');

class Contato extends Model {
    static init(sequelize){
        super.init({
            email: DataTypes.STRING,
            telefone: DataTypes.STRING,
           
        }, {sequelize})
    }
    static associate(models) {
        this.belongsTo(models.Professor, { foreignKey: 'id', as: 'professor' });
    }
}
module.exports = Contato
const { Model, DataTypes } = require('sequelize');

class Contacts extends Model {
    static init(sequelize){
        super.init({
            email: DataTypes.STRING,
            telefone: DataTypes.STRING,
           
        }, {sequelize})
    }
    static associate(models) {
        this.belongsTo(models.Professor, { foreignKey: 'id', as: 'matter_UCs' });
    }
}
module.exports = Contacts
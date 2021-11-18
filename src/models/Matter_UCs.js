const { Model, DataTypes } = require('sequelize');

class Matter_UCs extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,

        }, { sequelize })
    }
    static associate(models) {
        this.belongsTo(models.Professor, { foreignKey: 'id', as: 'teachers' });
    }
}
module.exports = Matter_UCs
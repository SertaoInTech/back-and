const { Model, DataTypes } = require('sequelize');

class Materia_UC extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,

        }, { sequelize })
    }
    static associate(models) {
        this.belongsTo(models.Professor, { foreignKey: 'id', as: 'professor' });
    }
}
module.exports = Materia_UC
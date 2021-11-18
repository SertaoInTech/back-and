const { Model, DataTypes } = require('sequelize');

class Matter extends Model {
    static init(sequelize) {
        super.init({
            teachers_id: DataTypes.INTEGER,
            name: DataTypes.STRING,

        }, { sequelize })
    }
    static associate(models) {
        this.belongsTo(models.Teachers, { foreignKey: 'id', as: 'teachers' });
    }
}
module.exports = Matter
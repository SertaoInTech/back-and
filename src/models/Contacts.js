const { Model, DataTypes } = require('sequelize');

class Contacts extends Model {
    static init(sequelize){
        super.init({
            teachers_id: DataTypes.INTEGER,
            email: DataTypes.STRING,
            telephone: DataTypes.STRING,
           
        }, {sequelize})
    }
    static associate(models) {
        this.belongsTo(models.Teachers, { foreignKey: 'id', as: 'matters' });
    }
}
module.exports = Contacts
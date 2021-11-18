const { Model, DataTypes } = require('sequelize');

class Teachers extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            institution: DataTypes.STRING
        }, {sequelize})
    }
    static associate(models) {
        this.hasMany(models.Matter, { foreignKey: 'id', as: 'matters' });
        this.hasMany(models.Contacts, { foreignKey: 'id', as: 'contacts' });
        
    }
}
module.exports = Teachers  
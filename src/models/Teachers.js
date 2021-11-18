const { Model, DataTypes } = require('sequelize');

class Teachers extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            endereço: DataTypes.STRING,
            instituicao: DataTypes.STRING
        }, {sequelize})
    }
    static associate(models) {
        this.hasMany(models.Meteria_UC, { foreignKey: 'id', as: 'matter_UCs' });
        this.hasMany(models.Contato, { foreignKey: 'id', as: 'contacts' });
        
    }
}
module.exports = Teachers  
const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            endereço: DataTypes.STRING,
            instituicao: DataTypes.STRING
        }, {sequelize})
    }
    static associate(models) {
        this.hasMany(models.Meteria_UC, { foreignKey: 'id', as: 'meteria_UC' });
        this.hasMany(models.Contato, { foreignKey: 'id', as: 'contato' });
        
    }
}
module.exports = Professor  
const { Model, DataTypes } = require('sequelize');

class Space extends Model {
    static init(sequelize){
        super.init({
            space_name: DataTypes.STRING,
            floor: DataTypes.STRING,
            number_capacity: DataTypes.INTEGER,
            compart_simult: DataTypes.INTEGER

        }, {sequelize})
    }
}
module.exports = Space
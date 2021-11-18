'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('spaces', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      space_name: {
        type:Sequelize.STRING,
        aloowNull: false,
        
      },
      floor: {
        type:Sequelize.STRING,
        allowNull: false,      
      },

      number_capacity: {
        type:Sequelize.INTEGER,
        allowNull: false,
      },

      compart_simult: {
        type:Sequelize.INTEGER,
        allowNull: false,
      },


      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('spaces');

  }
};

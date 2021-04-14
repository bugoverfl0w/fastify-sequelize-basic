'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: Sequelize.DataTypes.STRING,
      password: Sequelize.DataTypes.STRING,
      email: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: false,
        allowNull: true
      }
    }).then(() => queryInterface.addIndex('users', ['name']))
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
}

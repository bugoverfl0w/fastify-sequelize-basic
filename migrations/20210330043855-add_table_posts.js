'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      title: Sequelize.DataTypes.STRING,
      content: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: false,
        allowNull: false
      },
      user_id: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false
      }
    })

    await queryInterface.addIndex('posts', ['user_id'])

    return true
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts')
  }
}

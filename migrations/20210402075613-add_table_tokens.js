'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      token: Sequelize.DataTypes.STRING,
      user_id: Sequelize.DataTypes.BIGINT,
      created_time: Sequelize.DataTypes.INTEGER,
      expired_time: Sequelize.DataTypes.INTEGER
    })

    await queryInterface.addIndex('tokens', ['token'])
    await queryInterface.addIndex('tokens', ['user_id'])

    return true
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tokens')
  }
}

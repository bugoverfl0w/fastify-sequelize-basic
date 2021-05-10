import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class Token extends Model {};

  Token.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    created_time: DataTypes.INTEGER,
    expired_time: DataTypes.INTEGER
  }, {
    sequelize
  })

  Token.associate = function (models) {
    Token.belongsTo(models.User, {
      foreignKey: {
        name: 'user_id',
        allowNull: false
      },
      required: false
    })
  }

  return Token
}

import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class User extends Model {};

  User.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize
  })

  User.associate = function (models) {
    User.hasMany(models.Post, {
      foreignKey: {
        name: 'user_id',
        allowNull: false
      },
      as: 'posts'
    })
  }

  return User
}

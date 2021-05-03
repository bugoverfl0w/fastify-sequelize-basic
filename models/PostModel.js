import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {};

  Post.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize
  })

  Post.associate = function (models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        name: 'user_id',
        allowNull: false
      },
      as: 'user'
    })
  }

  return Post
}

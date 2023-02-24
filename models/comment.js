const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT(250),
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'comment',
});

Comment.associate = function (models) {
  Comment.belongsTo(models.User, {
    foreignKey: {
      name: 'username',
      allowNull: false,
    },
    onDelete: "cascade",
  });
  Comment.belongsTo(models.Post, {
    foreignKey: {
      allowNull: false,
    },
    onDelete: "cascade",
  });
};

module.exports = Comment;

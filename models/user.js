const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
    },
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user',
    allowNull: false,
  },
}, {
  sequelize,
  hooks: {
    beforeCreate: async (user) => {
      const saltRounds = 10;
      const hash = await bcrypt.hash(user.password, saltRounds);
      user.password = hash;
    }
  }
});

User.associate = function (models) {
  User.hasMany(models.Post, {
    onDelete: 'cascade',
  });
  User.hasMany(models.Comment, {
    onDelete: 'cascade',
  });
};

module.exports = User;

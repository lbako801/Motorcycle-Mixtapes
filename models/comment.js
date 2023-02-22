module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
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
  });

  Comment.associate = function (models) {
    Comment.belongsTo(models.User, {
      foreignKey: {
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

  return Comment;
};

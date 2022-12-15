const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "feedDislikes",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      postId: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.STRING,
      },
    },
    { timestamp: true }
  );
};

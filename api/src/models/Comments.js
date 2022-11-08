const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "comments",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      postId: {
        type: DataTypes.STRING,
      },
      img: {
        type: DataTypes.TEXT,
      },
    },
    { timestamp: true }
  );
};

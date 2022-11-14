const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "commentsresource",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      author: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      postResourceId: {
        type: DataTypes.STRING,
      },
    },
    { timestamp: true }
  );
};
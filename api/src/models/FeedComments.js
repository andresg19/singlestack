const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "feedcomments",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      content: {
        type: DataTypes.TEXT,
      },
      author: {
        type: DataTypes.STRING,
      },
      feedPostId: {
        type: DataTypes.STRING,
      },
    },
    { timestamp: true }
  );
};

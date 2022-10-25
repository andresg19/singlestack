const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("posts", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.CHAR,
    },
    content: {
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.CHAR,
    },
  });
};

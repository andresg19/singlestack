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
      type: DataTypes.TEXT,
    },

    content: {
      type: DataTypes.STRING,
    },

    author: {
      type: DataTypes.TEXT,
    },
    date: {
      type: DataTypes.DATE
    },
  });
};

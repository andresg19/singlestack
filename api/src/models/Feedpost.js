const sequelize = require("sequelize");
const { DataTypes, STRING } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("feedposts", {
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

    img: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },

    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    comments: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
};

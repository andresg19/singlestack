const sequelize = require("sequelize");
const { DataTypes, STRING } = require("sequelize");

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
    etiquetas: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }); //[["a", id] , ["b", id], "c"]
};

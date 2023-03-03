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
      type: DataTypes.TEXT,
    },

    author: {
      type: DataTypes.TEXT,
    },

    etiquetas: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  
  });
};

const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("posts", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    titulo: {
      type: DataTypes.STRING,
    },

    descripcion: {
      type: DataTypes.TEXT,
    },

    archivado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};

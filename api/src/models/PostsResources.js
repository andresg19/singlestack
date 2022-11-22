const sequelize = require("sequelize");
const { DataTypes, STRING } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("postsresources", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    author: {
      type: DataTypes.TEXT,
    },
    content: {
      type: DataTypes.STRING,
    },

    archivos: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    util: {
        type: DataTypes.INTEGER,
    },
    noUtil: {
        type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

  });
};

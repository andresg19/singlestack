const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("users", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

   fullname: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.TEXT,
    },

    password: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};

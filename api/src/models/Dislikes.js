const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "dislikes",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      dislikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    { timestamp: true }
  );
};

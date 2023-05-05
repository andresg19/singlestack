const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "feedlikes",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },


    },
    { timestamp: true }
  );
};

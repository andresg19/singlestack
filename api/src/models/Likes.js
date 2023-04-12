const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "likes",
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
      commentId: {
        type: DataTypes.TEXT,
      },
      userId: {
        type: DataTypes.TEXT,
      },
      
    },
    { timestamp: true }
  );
};

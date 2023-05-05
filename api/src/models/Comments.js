const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "comments",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      content: {
        type: DataTypes.TEXT,
      },
      author: {
        type: DataTypes.STRING,
      },
      postId: {
        type: DataTypes.TEXT,
      },
      
      img: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
    },
    { timestamp: true }
  );
};

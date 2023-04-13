const { sequelize, DataTypes } = require('../db/dbConnection');

exports.TasteProfile = sequelize.define('TasteProfile', {
  tasteProfile_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.BLOB
  },
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});
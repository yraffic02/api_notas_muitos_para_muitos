'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tags.belongsToMany(models.Notas, {
        through: "NotasTags",
        as: "Notas",
        foreignKey: 'tagId'
      })
    }
  }
  Tags.init({
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tags',
    timestamps: false 
  });
  return Tags;
};
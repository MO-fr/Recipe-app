const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import Sequelize instance

class Recipe extends Model {}

Recipe.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  instructions: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  prepTime: {
    type: DataTypes.INTEGER, // in minutes
    allowNull: false,
  },
  cookTime: {
    type: DataTypes.INTEGER, // in minutes
    allowNull: false,
  },
  servings: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.ENUM('Easy', 'Medium', 'Hard'),
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'Recipe',
  tableName: 'recipes',
});

module.exports = Recipe;

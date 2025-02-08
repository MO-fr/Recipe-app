const { Sequelize } = require('sequelize');

// Configure Sequelize to connect to MySQL
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost', // Or your MySQL host (e.g., '127.0.0.1' or a remote server)
  dialect: 'mysql',  // Specify MySQL as the dialect
  logging: console.log, // Optionally, you can disable logging by setting this to false
});

module.exports = sequelize;

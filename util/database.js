const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_course', 'root', process.env.MySQL_PASSWORD, {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
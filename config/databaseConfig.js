const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/sms_test');

module.exports = sequelize;
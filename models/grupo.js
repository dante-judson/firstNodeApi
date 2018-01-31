const Sequelize = require('sequelize');
const sequelize = require('../config/databaseConfig');

const Grupo = sequelize.define('grupo',
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }
    });

Grupo.sync({force: false}).then();

module.exports = Grupo;
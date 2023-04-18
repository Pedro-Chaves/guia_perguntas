const Sequilize = require('sequelize');

const connection = new Sequilize('guia_perguntas', 'root', 'pe102030', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
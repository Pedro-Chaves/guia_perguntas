const sequelize = require('sequelize');
const db = require('../db');

const response = db.define('responses', {
    body: {
        type: sequelize.TEXT,
        allowNull: false
    },
    questionId: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

response.sync({force: false});

module.exports = response;
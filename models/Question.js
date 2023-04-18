const sequelize = require('sequelize');
const db = require('../db');

const question = db.define('questions', {
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    desc: {
        type: sequelize.TEXT,
        allowNull: false
    }
})

question.sync({force: false});

module.exports = question;
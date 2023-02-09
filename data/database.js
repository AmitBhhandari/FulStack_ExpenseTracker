const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense_tracker', 'root', 'Amitbhand68@', {
    dialect : 'mysql',
    host : 'localhost'
})

module.exports = sequelize;
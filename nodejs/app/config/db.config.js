const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: 'mysql',
    operatorsAliases: '0', //latest version would receive deprecation warning if it is 'true' or 'false', so 'false replaced by '0'
    port: 3306,

    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.test = require('../model/test.model.js')(sequelize, Sequelize);

module.exports = db;
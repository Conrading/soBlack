const env = {
    database: 'silex_test',
    username: 'root',
    password: 'KixQ117gN',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;
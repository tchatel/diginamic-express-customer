const {Pool} = require('pg');

const db = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'express',
    password: 'express',
    database: 'expressdb'
});

module.exports = db;
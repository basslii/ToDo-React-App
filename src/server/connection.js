const Pool = require('pg').Pool;

const pool = new Pool({
    host: "localhost",
    user: 'postgres',
    port: 5432,
    password: 'BazliNabil97',
    database: 'task_management',
})

module.exports = pool;
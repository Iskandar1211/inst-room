const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    password:'muqaddas',
    host:'localhost',
    port:'5432',
    database:'instRoom'
});

module.exports = pool
const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'kladderUser',
    password: 'klu_master',
    database: 'dorasdb'
})

db.connect(function(err) {
    if (err) throw err
    console.log('Connected to MySQL')
})
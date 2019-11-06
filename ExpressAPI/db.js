const mysql = require('mysql')
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'dorasdb'
})

db.connect(function(err) {
    if (err) throw err
    console.log('Connected to MySQL')
})

exports.getBand = function(callback) {
    db.query(
        "SELECT * FROM Band",
        function(err, rows) {
            if (err) throw err
            callback(rows)
        })
}

exports.getCapabilites = function(callback) {
    db.query(
        "SELECT capName FROM Capability",
        function(err, rows) {
            if (err) throw err
            callback(rows)
        }
    )
}
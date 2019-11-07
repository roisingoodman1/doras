const mysql = require('mysql')
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'dorasdb'
})

db.connect(function(err) {
    if (err) {throw err}
    console.log('Connected to MySQL')
})

exports.getBand = function(callback) {
    db.query(
        "SELECT bandId, bandNo, bandName FROM Band",
        function(err, rows) {
            if (err) { throw err }
            callback(rows)
        })
}

exports.getCapabilities = function(callback) {
    db.query(
        "SELECT capName FROM Capability",
        function(err, rows) {
            if (err) { throw err }
            callback(rows)
        }
    )
}

exports.getJobFamily = function(callback) {
    db.query(
        "SELECT jfid, title FROM JobFamily",
        function(err, rows) {
            if (err) { throw err }
            callback(rows)
        }
    )
}

exports.getCapNameByJfid = function(id, callback) {
  db.query(
      "SELECT capName FROM Capability WHERE jfid = ?",
      [id],
      function(err, rows) {
          if (err) { throw err }
          callback(rows)
      }
  )
}
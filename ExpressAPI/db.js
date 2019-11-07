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
      "SELECT bandName, bandNo FROM Band",
      function(err, rows) {
          if (err) { throw err }
          callback(rows)
      })
}

exports.getBandId = function(bandName, callback) {
  db.query(
    "SELECT bandId FROM Band where bandName = ?",
    [bandName],
    function(err, rows) {
      if (err) { throw err }
      callback(rows)
    })
}

exports.getJobIdAndCapId = function(capName, callback) {
  db.query(
    "SELECT capId, jfId, FROM Capability WHERE capName = ?",
    [capName],
    function(err, rows) {
      if (err) { throw err }
      callback(rows)
    }
  )
}

exports.getJobTitle = function(bandId, jfid, callback) {
  db.query(
    "Select title FROM Job WHERE jfid = ? AND bandId = ?",
    [jfid, bandId],
    function(err, rows) {
      if (err) { throw err }
      callback(rows)
    }
  )
    db.query(
        "SELECT bandId, bandNo, bandName FROM Band",
        function(err, rows) {
            if (err) { throw err }
            callback(rows)
        })
}

exports.getCapabilites = function(callback) {
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
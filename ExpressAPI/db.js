const mysql = require('mysql')
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'dorasdb'
})

db.connect(function(err) {
    if (err) { throw err }
    console.log('Connected to MySQL')
})

exports.getUser = function(username, callback) {
    db.query(
        "SELECT userId, username, userPassword, isAdmin FROM users WHERE username =?", [username],
        function(err, rows) {
            if (err) { throw err }
            callback(rows[0])
        }
    )
}

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
        "SELECT capName, capId FROM Capability WHERE jfid = ?", [id],
        function(err, rows) {
            if (err) { throw err }
            callback(rows)
        }
    )
}

exports.getDistinct = function(callback) {
    db.query(
        "SELECT DISTINCT jfid FROM JobFamily ORDER BY jfid asc",
        function(err, rows) {
            if (err) { throw err }
            callback(rows)
        }
    )
}

exports.getJobRoleTitle = function(capId, bandId, callback) {
    db.query(
        "SELECT jid, speclink, bandId, summary, title, responsibilities, title FROM Job WHERE bandId = ? AND capId = ?", [bandId, capId],
        function(err, rows) {
            if (err) { throw err }
            callback(rows)
        }
    )
}

exports.getTraining = function(jId, callback) {
  db.query(
      "SELECT Training.tId, Training.title, Training.trainingType, Training.link, Training.trainingDescription FROM Job INNER JOIN TrainingJob ON Job.jId = TrainingJob.jId INNER JOIN Training ON TrainingJob.tId = Training.tId WHERE Job.jId = ?",
      [jId],
      function(err, rows) {
          if (err) { throw err }
          callback(rows)
      }
  )
}

exports.getCompetenciesForBand = function(bandId, callback) {
  db.query(
    "SELECT Competencies.compName, Competencies.compDesc FROM Band INNER JOIN CompetenciesBand ON Band.bandId = CompetenciesBand.bandId INNER JOIN Competencies ON CompetenciesBand.compId = Competencies.compId WHERE Band.bandId = ?;",
    [bandId],
    function(err, rows) {
      if (err) { throw err }
      callback(rows)
    }
  )
}
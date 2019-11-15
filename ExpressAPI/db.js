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
        "SELECT userId, username, userPassword, isAdmin, token FROM users WHERE username =?", [username],
        function(err, rows) {
            if (err) { throw err }
            callback(rows[0])
        }
    )
}

exports.updateUserToken = function(token, username) {
    db.query(
        'UPDATE users SET token =? WHERE username =?', [token, username],
        function(err) {
            if (err) { throw err }
        }
    )
}

exports.getBand = function(callback) {
    db.query(
        "SELECT bandId, bandNo, bandName FROM Band",
        function(err, rows) {
            if (err) { throw err }
            callback(rows)
        }
    )
}

exports.getBandById = function(id, callback){
	db.query(
		"select * from band where bandid = ?", [id],
		function (err, rows){
			if (err) {throw err}
			callback(rows)
		}
	)
}

exports.getJobFamilyNameByCapID = function(id, callback){
  db.query(
    "select (select title from jobfamily where jfid = capability.jfid) as jobfamilytitle from capability where capid = ?", [id],
    function (err, rows){
      if (err) {throw err}
      callback(rows)
    }
  )
}

exports.getCompetencyDetailsByjId = function(id, callback){
  db.query(
    "select (select compName from competencies where compId = competenciesjob.compId) as compName, (select compDesc from competencies where compId = competenciesjob.compId) as compDesc from competenciesjob where jId = ?", [id],
    function(err, rows){
      if (err) {throw err}
      callback(rows)
    }
  )
}

exports.getTrainingDetailsByjId = function(id, callback){
  db.query(
    "select (select title from training where tId = trainingjob.tId) as title, (select trainingDescription from training where tId = trainingjob.tId) as trainingDesc from trainingjob where jId = ?", [id],
    function(err, rows){
      if (err) {throw err}
      callback(rows)
    }
  )
}

exports.getJobRoles = function(callback) {
	db.query(
		"SELECT * FROM Job",
		function(err, rows) {
			if (err) {throw err}
			callback(rows)
		}
	)
}

exports.getCapabilities = function(callback) {
    db.query(
        "SELECT capId, capName FROM Capability",
        function(err, rows) {
            if (err) { throw err }
            callback(rows)
        }
    )
}

exports.getCapLeads = function(callback){  //also returns name of capability from capability table for simplicities sake
  db.query(
      "SELECT CapabilityLead.leadId, CapabilityLead.capLeadName, CapabilityLead.capLeadPath, CapabilityLead.capLeadQuote, Capability.capName FROM CapabilityLead INNER JOIN Capability ON CapabilityLead.leadId = Capability.leadId",
      function(err, rows) {
          if(err) { throw err }
          callback (rows)
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
        "SELECT jId, specLink, bandId, summary, title, responsibilities, title FROM Job WHERE bandId = ? AND capId = ?", [bandId, capId],
        function(err, rows) {
            if (err) { throw err }
            callback(rows)
        }
    )
}

exports.getJobTitles = function(callback){
  db.query(
    "SELECT title FROM Job",
    function(err, rows) {
      if (err){ throw err }
      callback(rows)
    }
  )
}

exports.newCapability = function(capName, leadId, jfid, callback) {
    db.query(
        "INSERT INTO Capability (capName, leadId, jfid) VALUES (?, ?, ?)",
        [capName, leadId, jfid],
        function (err, rows) {
            if (err) { throw err }
            callback(rows)
        }
    )
}

exports.newJob = function(title, specLink, summary, responsibilites, bandId, capId, callback) {
  db.query(
    "INSERT INTO Job (title, specLink, summary, responsibilities, bandId, capId) VALUES (?, ?, ?, ?, ?, ?)",
    [title, specLink, summary, responsibilites, bandId, capId],
    function (err, rows) {
      if (err) { throw err }
      callback(rows)
    }
  )
}

exports.getDuplicateJobs = function(bandId, capId, callback) {
  db.query(
    "SELECT jid, title FROM Job WHERE bandId = ? AND capId = ?",
    [bandId, capId],  
    function(err, rows) {
      if (err) { throw err }
      console.log(rows);

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

exports.getDistinctCapLeads = function(callback) {
    db.query(
        "SELECT leadId, capLeadName FROM CapabilityLead",
        function (err, rows) {
            if (err) { throw err }

exports.getJobTitles = function(callback){
    db.query(
      "SELECT title, bandId, summary, speclink, responsibilities FROM Job",
      function(err, rows){
        if (err){throw err}
        console.log(rows) 
        callback(rows)
      }
    )
   }

exports.getBandById = function(id, callback){
    db.query(
        "select * from band where bandid = ?", [id],
        function (err, rows){
            if (err) {throw err}

            callback(rows)
        }
    )
}
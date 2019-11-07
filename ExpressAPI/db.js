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
exports.getJobFamily = function(callback){
    db.query(
        "SELECT * FROM JobFamily",
        function(err, rows) {
            if (err) throw err
            callback(rows)
        }
    )
}
exports.getFullJob = function(callback){
    db.query(
        "SELECT jId.Job,BandId,bandName.Band,title.Job,responsbilities.Job,capId.Job,CapName,Capability,title.JobFamily,CompName.Competencies,CompDesc.Competencies FROM Job  FULL OUTER JOIN Capability ON Job.capId = Capability.capId  FULL OUTER JOIN JobFamily ON Capability.jfId = JobFamily.jfId FULL OUTER JOIN CompetenciesJob ON Job.jId = CompetenciesJob.jId FULL OUTER JOIN Competencies ON CompetenciesJob.compId = Competencies.compId ",
        function(err, rows) {
            if (err) throw err
            callback(rows)
        })
}

exports.getJobFamilyByCapId = function(id, callback) {
    db.query(
        "SELECT title FROM JobFamily WHERE jfid = ?",
        [id],
        function(err, rows) {
            if (err) {
                throw err
            }
            callback(rows)
        }
    )
}
const express = require('express')
const app = express()
const env = require('dotenv').config()
const db = require('./db.js')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function getBand(bandsReadyFn) {
    db.getBand(function(rows) {
        bands = rows
        bandsReadyFn()
    })
}
app.get('/getBand', function(req, res) {
    getBand(function() {
        res.send(bands)
    })
})

function getCapabilities(capReadyFn) {
    db.getCapabilities(function(rows) {
        cap = rows
        capReadyFn()
    })
}

app.get('/getCapabilities', function(req, res) {
    getCapabilities(function() {
        res.send(cap)
    })
})

function getCapLeads(capLeadsReadyFn) {
      db.getCapLeads(function(rows) {
          capLeads = rows
          capLeadsReadyFn()
      })
  }

  app.get('/getCapLeads', function(req, res){
      getCapLeads(function(){
          res.send(capLeads)
      })
  })

function getJobFamily(jobReadyFn) {
    db.getJobFamily(function(rows) {
        job = rows
        jobReadyFn()
    })
}

app.get('/getJobFamily', function(req, res) {
    getJobFamily(function() {
        res.send(job)
    })
})

function getCapNameByJfId(id, capNameReadyFn) {
    db.getCapNameByJfid(id, function(rows) {
        capName = rows
        capNameReadyFn()
    })
}

app.get('/getCapNameByJfId/:id', function(req, res) {
    getCapNameByJfId(req.params.id, function() {
        res.send(capName)
    })
})

function getDistinct(distinctReadyFn) {
    db.getDistinct(function(rows) {
        distinct = rows
        distinctReadyFn()
    })
}

app.get('/getDistinct', function(req, res) {
    getDistinct(function() {
        res.send(distinct)
    })
})

function getJobRoleTitle(capId, bandId, getRoleReadyfn) {
    db.getJobRoleTitle(capId, bandId, function(rows) {
        title = rows
        getRoleReadyfn()
    })
}

app.get('/getJobRoleTitle/:capId/:bandId', function(req, res) {
    getJobRoleTitle(req.params.capId, req.params.bandId, function() {
        res.send(title)
    })
})

function getUser(username, getUserReadyFn) {
    db.getUser(username, function(rows) {
        user = rows
        getUserReadyFn()
    })
}

app.get('/getUser/:username', function(req, res) {
    getUser(req.params.username, function() {
        res.send(user)
    })
})

function getJobTitles(jobsReadyFn) { /* get jobs methods here returns only title for sake of ryan and thomas*/
    db.getJobTitles(function(rows) {
        jobTitles = rows
        jobsReadyFn()
    })
}

app.get('/getJobTitles', function(req, res) {
    getJobTitles( function() {
        res.send(jobTitles)
    })
})

function newCapability(capName, leadId, jfid, newCapabilityReadyFn) {
    db.newCapability(capName, leadId, jfid, function(rows) {
        x = rows
        newCapabilityReadyFn()
    })
}

app.post('/newCapability', function(req, res) {
    newCapability(req.body.capName, req.body.leadId, req.body.jfid, function() {
        res.send(x)
    })
})

function getDistinctCapLeads(distinctCapLeadsReadyFn) {
    db.getDistinctCapLeads(function(rows) {
        distinctCapLeads = rows
        distinctCapLeadsReadyFn()
    })
}

app.get('/getDistinctCapLeads', function(req, res) {
    getDistinctCapLeads(function() {
        res.send(distinctCapLeads)
    })
})

function getDuplicateJobs(bandId, capId, duplicateJobsReadyFn) {
    db.getDuplicateJobs(bandId, capId, function(rows) {
        duplicateJobs = rows
        duplicateJobsReadyFn()
        console.log(rows);
    })
    
}

app.get('/getDuplicateJobs', function(req, res) {
    getDuplicateJobs(req.query.bandId, req.query.capId, function() {
        res.send(duplicateJobs)
    })
})

function newJob(title, specLink, summary, responsibilities, bandId, capId, newJobReadyFn) {
    db.newJob(title, specLink, summary, responsibilities, bandId, capId, function(rows) {
        x = rows
        newJobReadyFn()
    })
}

app.post('/newJob', function(req, res) {
    newJob(req.body.title, req.body.specLink, req.body.summary, req.body.responsibilities, req.body.bandId, req.body.capId, function() {
        res.send(x)
    })
})

app.listen(8003, function() {
    console.log('Express started')
})
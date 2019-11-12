const express = require('express')
const app = express()
const env = require('dotenv').config()
const db = require('./db.js')

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

function getCompetenciesForBand(bandId, getCompReadyfn) {
  db.getCompetenciesForBand(bandId, function(rows) {
    comp = rows
    getCompReadyfn()
  })
}

app.get('/getCompetenciesForBand/:bandId', function(req, res){
  getCompetenciesForBand(req.params.bandId, function(){
    res.send(comp)
  })
})

app.listen(8003, function() {
    console.log('Express started')
})
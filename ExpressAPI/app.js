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

function getJobTitle(jobReadyFn) {
  db.getJobTitle(function(rows) {
    job = rows
    jobReadyFn()
  })
}
app.get('/getJobTitle', function(req,res) {
  getJobTitle(function() {
    res.send(job)
  })
})

function getBandId(bandIdReadyFn) {
  db.getBandId(req.body, function(bandName){
    bandId = rows
    bandIdReadyFn()
  })
}

app.get('/getBandId', function(req,res) {
  getBandId(function() {
    res.send(bandId)
  })
})

function getJobIdAndCapId(jobIdCapIDReadyFn) {
  db.getJobIdAndCapId(req.body, function(capName){
    jobIdCapId = rows
    jobIdCapIDReadyFn()
  })
}
app.get('/getJobIdAndCapId', function(req,res) {
  getJobIdAndCapId(function() {
    res.send(jobIdCapId)
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

app.listen(8003, function() {
    console.log('Express started')
})
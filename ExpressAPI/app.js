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
  console.log('hello');
  getCapNameByJfId(req.params.id, function() {
    res.send(capName)
  })

})

app.listen(8003, function() {
    console.log('Express started')
})
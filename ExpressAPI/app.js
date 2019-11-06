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

app.listen(8003, function() {
    console.log('Express started')
})
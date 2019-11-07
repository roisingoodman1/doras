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

function getCapLeads(capLeadsReadyFn) {
    db.getCapLeads(function(rows) {
        capLeads = rows
        capLeadsReadyFn()
    })
}

app.get('/getBand', function(req, res) {
    getBand(function() {
        res.send(bands)
    })
})

app.get('/getCapLeads', function(req, res){
    getCapLeads(function(){
        res.send(caplead)
    })
})

app.listen(8003, function() {
    console.log('Express started')
})
const express = require('express')
const app = express()
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

app.listen(8003, function() {
    console.log('Express started')
})
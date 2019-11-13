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

function getBandById(id, bandIdReadyFn) {
	db.getBandById(id, function(rows){
		band = rows
		bandIdReadyFn()
	})
}

app.get('/getBandById/:id', function (req, res){
	getBandById(req.params.id, function(){
		res.send(band)
	})
})

function getJobFamilyNameByCapID(id, jobFamilyNameReadyFn) {
	db.getJobFamilyNameByCapID(id, function(rows){
		title = rows
		jobFamilyNameReadyFn()
	})
}

app.get('/getJobFamilyNameByCapID/:id', function (req, res){
	getJobFamilyNameByCapID(req.params.id, function(){
		res.send(title)
	})
})

function getCompetencyDetailsByjId(id, competencyDetailsReadyFn){
  db.getCompetencyDetailsByjId(id, function(rows){
    competencies = rows
    competencyDetailsReadyFn()
  })
}

app.get('/getCompetencyDetailsByjId/:id', function(req, res){
  getCompetencyDetailsByjId(req.params.id, function(){
    res.send(competencies)
  })
})

function getTrainingDetailsByjId(id, trainingDetailsReadyFn){
  db.getTrainingDetailsByjId(id, function(rows){
    train = rows
    trainingDetailsReadyFn()
  })
}

app.get('/getTrainingDetailsByjId/:id', function(req, res){
  getTrainingDetailsByjId(req.params.id, function(){
    res.send(train)
  })
})

function getDistinct(distinctReadyFn) {
  db.getDistinct(function(rows) {
    distinct = rows
    distinctReadyFn()
  })
}

app.get('/getDistinct', function(req, res){
  getDistinct(function(){
    res.send(distinct)
  })
})

function getJobRoleTitle(capId, bandId, getRoleReadyfn) {
  db.getJobRoleTitle(capId, bandId, function(rows) {
    title = rows
    getRoleReadyfn()
  })
}

app.get('/getJobRoleTitle/:capId/:bandId', function(req, res){
  getJobRoleTitle(req.params.capId, req.params.bandId, function(){
    res.send(title)
  })
})

function getJobRole(jobRoleReadyFn){
	db.getJobRoles(function(rows){
		jobRoles = rows
		jobRoleReadyFn()
	})
}

app.get('/getJobRoles', function(req, res){
	getJobRole(function(){
		res.send(jobRoles)
	})
})

app.listen(8003, function() {
    console.log('Express started')
})
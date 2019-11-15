const express = require('express')
const app = express()
const env = require('dotenv').config()
const db = require('./db.js')
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');
const config = require('./config');
const middleware = require('./middleware');

class HandlerGenerator {
    login(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        db.getUser(username, function(rows) {
            user = rows
        })
        if (username && password) {
            if (username === user['username'] && bcrypt.compareSync(password, user['userPassword'])) {
                const token = jwt.sign({
                        username: username
                    },
                    config.secret, {
                        expiresIn: '20s'
                    }
                );
                user['token'] = token;
                db.updateUserToken(token, username)
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    user: user
                });

            } else {
                res.sendStatus(403).json({

                    success: false,
                    message: 'Incorrect username or password'
                });
            }
        } else {
            res.sendStatus(400).json({
                success: false,
                message: 'Authentication failed! Please check the request'
            });
        }
    }
    index(req, res) {
        res.json({
            success: true,
            message: 'Index page'
        });
    }
    checkToken(req, res) {
        const token = req.body.token;
        jwt.verify(token, config.secret,
            function(err, decoded) {
            });
    }
}

let handlers = new HandlerGenerator();
const url = require('url')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function getBand(bandsReadyFn) {
    db.getBand(function(rows) {
        bands = rows
        bandsReadyFn()
    })
}
app.get('/band', function(req, res) {
    getBand(function() {
        res.send(bands)
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

app.get('/jobFamily', function(req, res) {
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

app.get('/capabilities', function(req, res) {
    getCapNameByJfId(req.query.jobFamilyId, function() {
        res.send(capName);
    });
});


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

app.get('/distinctJobFamilies', function(req, res) {
    getDistinct(function() {
        res.send(distinct)
    })
})

function getJobRoleTitle(getRoleReadyfn) {
    db.getJobRoleTitle(function(rows) {
        title = rows
        getRoleReadyfn()
    })
}

app.get('/jobs', function(req, res) {
    getJobRoleTitle(function() {
        res.send(title)
    })
})

function getUser(username, getUserReadyFn) {
    db.getUser(username, function(rows) {
        user = rows
        getUserReadyFn()
    })
}

app.get('/User/?:username', function(req, res) {
    getUser(req.params.username, function() {
        res.send(user)
    })
})

app.post('/login', function(req, res) {
    handlers.login(req, res);
});

app.post('/authenticate', function(req, res) {
    handlers.checkToken(req, res);
});

app.get('/', middleware.checkToken, handlers.index);


function getCompetenciesForBand(bandId, getCompReadyfn) {
    db.getCompetenciesForBand(bandId, function(rows) {
        comp = rows
        getCompReadyfn()
    })
}

app.get('/competencies', function(req, res) {
    getCompetenciesForBand(req.query.bandId, function() {
        res.send(comp)
    })
})

function getTraining(jId, getTrainingReadyFn) {
  db.getTraining(jId, function(rows) {
      training = rows
      getTrainingReadyFn()
  })
}

app.get('/trainingByJobId', function(req, res) {
  getTraining(req.query.jobId, function() {
      res.send(training)
  })
})

function getCompetenciesForBand(bandId, getCompReadyfn) {
  db.getCompetenciesForBand(bandId, function(rows) {
    comp = rows
    getCompReadyfn()
  })
}

app.get('/competencies', function(req, res){
  getCompetenciesForBand(req.query.bandId, function(){
    res.send(comp)
  })
})

function getSameJobByBand(bandId, getSameJobReadyfn) {
    db.getSameJobByBand(bandId, function(rows) {
      sameJob = rows
      getSameJobReadyfn()
    })
  }

  app.get('/jobByBandId', function(req, res){
    getSameJobByBand(req.query.bandId, function(){
      res.send(sameJob)
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

app.post('/login', function(req, res) {
    handlers.login(req, res);
});

app.post('/authenticate', function(req, res) {
    handlers.checkToken(req, res);
});

app.get('/', middleware.checkToken, handlers.index);

function getTraining(jId, getTrainingReadyFn) {
    db.getTraining(jId, function(rows) {
        training = rows
        getTrainingReadyFn()
    })
}

app.get('/trainingByJobId', function(req, res) {
    getTraining(req.query.jobId, function() {
        res.send(training)
    })
})

function getCompetenciesForBand(bandId, getCompReadyfn) {
    db.getCompetenciesForBand(bandId, function(rows) {
        comp = rows
        getCompReadyfn()
    })
}

app.get('/competencies', function(req, res) {
    getCompetenciesForBand(req.query.bandId, function() {
        res.send(comp)
    })
})

function getTraining(jId, getTrainingReadyFn) {
  db.getTraining(jId, function(rows) {
      training = rows
      getTrainingReadyFn()
  })
}

app.get('/trainingByJobId', function(req, res) {
  getTraining(req.query.jobId, function() {
      res.send(training)
  })
})

function getCompetenciesForBand(bandId, getCompReadyfn) {
  db.getCompetenciesForBand(bandId, function(rows) {
    comp = rows
    getCompReadyfn()
  })
}

app.get('/competencies', function(req, res){
  getCompetenciesForBand(req.query.bandId, function(){
    res.send(comp)
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

function getJobTitle(jobsReadyFn) {
    db.getJobTitles(function(rows) {
        jobs = rows
        jobsReadyFn()
    })
 }
 app.get('/getJobTitle', function(req, res) {
    getJobTitle( function() {
        res.send(jobs)
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

function getJobById(id, getJobByIdReadyFn) {
    db.getJobById(id, function(row) {
        job = row
        getJobByIdReadyFn()
    })
}

app.get('/getJobById/:id', function(req, res) {
    getJobById(req.params.id, function() {
        res.send(job)
    })
})

function editJob(updatedJob, editJobReadyFn) {
    db.editJob(updatedJob, function(rows) {
        result = rows
        editJobReadyFn()
    })
}

app.put('/editJob', function(req, res) {
    editJob(req.body, function() {
        res.send(result)
    })
})

function getCapabilities(getCapabilitiesReadyFn) {
    db.getCapabilities(function(rows) {
        caps = rows
        getCapabilitiesReadyFn()
    })
}

app.get('/getCapabilities', function(req, res) {
    getCapabilities(function(rows) {
        res.send(caps)
    })
})

function getBand(bandsReadyFn) {
    db.getBand(function(rows) {
        bands = rows
        bandsReadyFn()
    })
}
app.get('/bands', function(req, res) {
    getBand(function() {
        res.send(bands)
    })
})


app.listen(8003, function() {
    console.log('Express started')
})
 app.get('/getJobs', function(req, res) {
    getJobs( function() {
        res.send(jobs)
    })
 })


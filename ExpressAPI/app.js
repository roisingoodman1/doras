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
        console.log('Here');
        const token = req.body.token;
        jwt.verify(token, config.secret,
            function(err, decoded) {
                console.log(decoded.username) // bar
            });
    }
}

let handlers = new HandlerGenerator();
const url = require('url') 

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

function getJobRoleTitle(capId, bandId, getRoleReadyfn) {
    db.getJobRoleTitle(capId, bandId, function(rows) {
        title = rows
        getRoleReadyfn()
    })
}

app.get('/jobs', function(req, res) {
    getJobRoleTitle(req.query.capabilityId, req.query.bandId, function() {
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

app.listen(8003, function() {
    console.log('Express started')
})
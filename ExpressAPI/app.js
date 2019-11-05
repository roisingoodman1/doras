const express = require('express')
const app = express()
testArr = [{
        "name": "Patrick",
        "age": "N/A"
    },
    {
        "name": "Ryan C",
        "age": "At least 60"
    }
]
app.get('/', function(req, res) {
    res.send(testArr)
    console.log('Request processed')
})

app.listen(8003, function() {
    console.log('Express started')
})
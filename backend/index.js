const express = require('express')
const bodyParser = require('body-parser')
const fs = require("fs");

const app = express()
app.use(bodyParser())
const port = 3000

var property = [];
var location = [];
var claims = [];

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    let buff = fs.readFileSync('damage.jpg');
    let base64data = buff.toString('base64');

    console.log('Image converted to base 64 is:\n\n' + base64data);
})

//accepts the post requests
//services

//claims
app.post('/:username/submit/claim', (req, res) => {
 console.log(JSON.stringify(req.body));
 
})

app.get('/:username/get/claim', (req, res) => {
    
})


//asset management

//location and default property settings
app.get('/locationPrice', (req, res) => {

})

app.post('/locationPrice', (req, res) => {

})

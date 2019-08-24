const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser())
const port = 3000
const util = require('util');
const fs = require('fs');
const TrainingApiClient = require("@azure/cognitiveservices-customvision-training");
const PredictionApiClient = require("@azure/cognitiveservices-customvision-prediction");

const setTimeoutPromise = util.promisify(setTimeout);

const trainingKey = "<your training key>";
const predictionKey = "<your prediction key>";
const predictionResourceId = "<your prediction resource id>";
const sampleDataRoot = "./savedFiles";

const endPoint = "https://southcentralus.api.cognitive.microsoft.com"

var property = [];
var location = [];
var claims = [];

app.get('/', (req, res) => res.send(buffBack))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    let buff = fs.readFileSync('damage.jpg');
    let base64data = buff.toString('base64');
    if (!fs.existsSync("./savedFiles")) {
        fs.mkdirSync("./savedFiles");
    }
    fs.writeFile("./savedFiles/out.png", base64data, 'base64', function (err) {
        console.log(err);
    })
    console.log('Image converted to base 64 is:\n\n' + base64data);
    // let buffBack = Buffer.from(buff);
})


//accepts the post requests
//services

//claims
app.post('/:username/submit/claim', (req, res) => {
    console.log(JSON.stringify(req.body));
})

app.get('/:username/get/claim', (req, res) => {
    console.log(JSON.stringify(req.body));
})


// query pictures should be like
// [
//     {name: ... , value: ...}
// ]
function saveFiles(obj) {
    obj.forEach(pair => {
        if (!fs.existsSync("./savedFiles")) {
            fs.mkdirSync("./savedFiles");
        }
        fs.writeFileSync(`./savedFiles/${pair.name}.png`, pair.value, 'base64', function (err) {
            console.log(err);
        })
        classify(pair.name).then;
    });
}

// const testFile = fs.readFileSync(`${sampleDataRoot}/Test/test_image.jpg`);


//asset management

//location and default property settings
app.get('/locationPrice', (req, res) => {

})

app.post('/locationPrice', (req, res) => {

})


async function classifyAll(nameArray) {
    let classifiedResults = [];
    for(let i = 0; i < nameArray.length, i++) {
        let result = await classify(nameArray[i]);
        classifiedResults.push(result);
    }
    return classifiedResults;
}


async function classify(name) {
    const predictor = new PredictionApiClient(predictionKey, endPoint);
    const testFile = fs.readFileSync(`${sampleDataRoot}/${name}.jpg`);

    const results = await predictor.classifyImage(sampleProject.id, publishIterationName, testFile);

    // Step 6. Show results
    console.log("Results:");
    results.predictions.forEach(predictedResult => {
        console.log(`\t ${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`);
    });

}

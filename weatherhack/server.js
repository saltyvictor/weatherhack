const express = require('express')
const app = express()
const port = 8080
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const fs = require('fs')
// const cors = Require CORS PACKAGE READ UP 


// key for Open weathermap.com
const apiKey = '1697e064d8b43e2a80a111707ba9a031'
const stockholmID = '2673730'

app.use(function (_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json())
app.use(express.static('public'))


app.get('/clothes', function (_req, res) {
  fs.readFile('./clothing-db.json', (err, data) => {
    if (err) throw err
    res.send(data)
  })
})



app.get('/stockholm', (__req, res) => {
  // change lat and long to the user current location (string literals)
  // how to get location: weather?lat=35&lon=139

   fetch(`https://api.openweathermap.org/data/2.5/weather?id=${stockholmID}&units=metric&APPID=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp.toString();
       res.send(temp)
      })
    .catch(err => console.log(err))


  //   .then(response => response.json())
  //   .then(data => console.log(data.list))
  // // returns an array of object that are the forecast 
  // // of the day figure out how to draw out the temperatures 
  // // and put in array continue the rest in react
  //   .catch(err => console.log(err))
})

app.listen(port, () => console.log('Server listening on port ' + port))

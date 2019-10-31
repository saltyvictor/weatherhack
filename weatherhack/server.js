const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch')
// const path = require('path')

// key for Open weathermap.com
const apiKey = '1697e064d8b43e2a80a111707ba9a031'

app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, '../index.html')))

app.get('/', function (_req, res) {
  res.send('Hello World!')
})

app.get('/nearby', (__req, res) => {
  // change lat and long to the user current location (string literals)
  // how to get location: weather?lat=35&lon=139
  const stockholmID = '2673730'

  fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${stockholmID}&units=metric&APPID=${apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data.list))
  // returns an array of object that are the forecast 
  // of the day figure out how to draw out the temperatures 
  // and put in array continue the rest in react
    .catch(err => console.log(err))
})

app.listen(port, () => console.log('Server listening on port ' + port))

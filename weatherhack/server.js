const express = require('express')
const app = express()
const port = 8080
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const cors = require('cors')

const openWeatherMapApiKey = '1697e064d8b43e2a80a111707ba9a031'
const stockholmID = '2673730'

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))
 
app.get('/stockholm', (__req, res) => {
   fetch(`https://api.openweathermap.org/data/2.5/weather?id=${stockholmID}&units=metric&APPID=${openWeatherMapApiKey}`)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp.toString();
       res.send(temp)
      })
    .catch(err => console.log(err))
})

app.get('/:lat/:long', (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.long}&units=metric&APPID=${openWeatherMapApiKey}`)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp.toString();
       res.send(temp)
      })
    .catch(err => console.log(err))
})

app.listen(port, () => console.log('Server listening on port ' + port))

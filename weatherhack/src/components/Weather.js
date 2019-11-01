import React, { useState, useEffect } from 'react'
import Clothes from './Clothes'
import { Card } from '@material-ui/core'
import '../App.css';

const CurrentTemperature = () => {
  const [temperatureProp, setTemperatureProp] = useState('');
  
  useEffect(() => {
    if (window.navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      fetch(`http://localhost:8080/${latitude}/${longitude}`)
        .then(res => {
          return res.json()
        })
        .then(data => setTemperatureProp(data))
        .catch(err => console.log(err))
    })
  }
  }, [])

  const currentTempLocation = temperatureProp ? Math.round(temperatureProp) + '°' : 'Waiting for Location Access Permission'
  
  return (
    <Card className="card__weather">
      <h3>The temperature at your location is currently:</h3>
      <p>{currentTempLocation}</p>
      {temperatureProp ? <Clothes temperature={temperatureProp}/> : 'Waiting for temperature data'}
    </Card>
  )
}

export default CurrentTemperature

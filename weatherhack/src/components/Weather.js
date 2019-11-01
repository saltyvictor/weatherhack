import React, { useState, useEffect } from 'react'
import Clothes from './Clothes'
import { Card } from '@material-ui/core'
import '../App.css';

const CurrentTemperature = () => {
  const [temperatureProp, setTemperatureProp] = useState('');
  useEffect(() => {
    fetch('http://localhost:8080/stockholm')
      .then(res => {
        return res.json()
      })
      .then(data => setTemperatureProp(data))
      .catch(err => console.log(err))
  }, [])

  const currentTempSthlm = temperatureProp ? Math.round(temperatureProp) + '°' : 'Checking OpenweatherMap Api'
  
  return (
    
    <Card className="card__weather">
      <h3>The temperature in Stockholm is currently:</h3>
      <p>{currentTempSthlm}</p>
      {temperatureProp ? <Clothes temperature={temperatureProp}/> : 'Waiting for temperature data'}
    </Card>
  )
}

export default CurrentTemperature
import React, { useState, useEffect } from 'react'
import Clothes from '../Clothes/Clothes'
import { Card } from '@material-ui/core'
import '../../App.css';

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

  // for when you add different cities to fetch temp from also add useEFfect to imports 
  // add setTemperatureProp to useState declaration
  // useEffect(() => {
  //   setTemperatureProp(fetchTemperature()) 
  // })

  return (
    
    <Card className="card__weather">
      <h3>The temperature in Stockholm is currently: {temperatureProp} celsius</h3>
      {temperatureProp ? <Clothes temperature={temperatureProp}/> : 'Waiting for temperature data'}
    </Card>
  )
}

export default CurrentTemperature
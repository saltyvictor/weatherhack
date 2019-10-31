import React, { useState, useEffect } from 'react'
import Clothes from '../Clothes/Clothes'
import { Container } from '@material-ui/core'


const CurrentTemperature = () => {
  const [temperatureProp, setTemperatureProp] = useState('');
  
  useEffect(() => {

    fetch('http://localhost:8080/stockholm')
      .then(res => {
        // console.log(res.text());
        return res.json();
      })
      .then(data => setTemperatureProp(data))
      .catch(err => console.log(err));
  }, [])



  console.log(temperatureProp);
  // const initiateFetch = async () => {
  //   const result = await fetchTemperature
  //   return result
  // }

  // for when you add different cities to fetch temp from also add useEFfect to imports 
  // add setTemperatureProp to useState declaration
  // useEffect(() => {
  //   setTemperatureProp(fetchTemperature()) 
  // })

  //<p> The weather in Stockholm is {} celsius</p>

  return (
    <Container className="container">
      <h1>The temperature in Stockholm is currently: {temperatureProp} celsius</h1>
      {temperatureProp ? <Clothes temperature={temperatureProp}/> : 'Waiting for temperature data'}
    </Container>
  )
}

export default CurrentTemperature
const jacketsJSON = {"jackets": [
  {
    "id": "denim jacket",
    "weather": "sun",
    "temperature": {
      "high": "20",
      "low": "15"
    }
  },
  {
    "id": "carhartt jacket",
    "weather": ["sun", "rain"],
    "temperature": {
      "high": "16",
      "low": "10"
    }
  },
  {
    "id": "bane jacket",
    "weather": ["sun", "snow"],
    "temperature": {
      "high": "0",
      "low": "-15"
    }
  },
  {
    "id": "grey coat",
    "weather": ["sun", "snow"],
    "temperature": {
      "high": "5",
      "low": "-12"
    }
  }
]}


// Returns an array of the clothing articles that are within temperature range 
// needs refactoring (helper functions) and changes for clothing types other than jackets
const comfortAlgorithm = (currentTemperature) => {
  const comfortCheck = jacketsJSON.jackets.filter(article => {
    const hiTemp = article.temperature.high
    const lowTemp = article.temperature.low
    return (hiTemp >= currentTemperature && currentTemperature >= lowTemp)
  })
  const comfortMatch = comfortCheck.map(article => article.id)
  return comfortMatch.join()
}

export default comfortAlgorithm

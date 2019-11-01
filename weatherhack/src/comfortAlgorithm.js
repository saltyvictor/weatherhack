const clothingJSON = {
  "jackets": [
    {
      "id": "denim jacket",
      "weather": "sun",
      "temperature": {
        "high": "25",
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
  ],
  "sweaters": [
    {
      "id": "cotton shirt",
      "weather": "sun",
      "temperature": {
        "high": "20",
        "low": "15"
      }
    },
    {
      "id": "college sweater",
      "weather": ["sun"],
      "temperature": {
        "high": "16",
        "low": "10"
      }
    },
    {
      "id": "knitted sweater",
      "weather": ["sun", "snow"],
      "temperature": {
        "high": "14",
        "low": "-15"
      }
    },
    {
      "id": "wool shirt",
      "weather": ["sun", "snow"],
      "temperature": {
        "high": "10",
        "low": "-12"
      }
    }
  ],
  "pants": [
    {
      "id": "cotton pants",
      "weather": "sun",
      "temperature": {
        "high": "25",
        "low": "15"
      }
    },
    {
      "id": "jeans",
      "weather": ["sun", "rain", "snow"],
      "temperature": {
        "high": "20",
        "low": "10"
      }
    },
    {
      "id": "wool pants",
      "weather": ["sun", "snow"],
      "temperature": {
        "high": "14",
        "low": "-10"
      }
    }
  ]
}

const comfortAlgorithm = (currentTemperature) => {
  const matchingJackets = temperatureComfortCheck(clothingJSON.jackets, currentTemperature)
  const matchingSweaters = temperatureComfortCheck(clothingJSON.sweaters, currentTemperature)
  const matchingPants = temperatureComfortCheck(clothingJSON.pants, currentTemperature)
  
  let comfortAlgorithmResult = []
  comfortAlgorithmResult.push(sanitizeStrings(matchingJackets))
  comfortAlgorithmResult.push(sanitizeStrings(matchingSweaters))
  comfortAlgorithmResult.push(sanitizeStrings(matchingPants))
 
  return comfortAlgorithmResult
}

const clothingIDcheck = (array) => array.map(item => item.id)

const temperatureComfortCheck = (clothingObj, temperature) => {
  const result = clothingObj.filter(article => {
    const hiTemp = article.temperature.high
    const lowTemp = article.temperature.low
    return (hiTemp >= temperature && temperature >= lowTemp)
  })
  return clothingIDcheck(result)
}

const sanitizeStrings = (array) => {
  const result = array.map(string => capitalize(string))
  if (result.length > 1) {
    return result.join(' or ')
  }
  return result
}
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default comfortAlgorithm
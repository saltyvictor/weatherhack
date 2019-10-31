const clothingJSON = {
  "jackets": [
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
        "high": "24",
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


// Returns an array of the clothing articles that are within temperature range 
// needs refactoring (helper functions) and changes for clothing types other than jackets
const comfortAlgorithm = (currentTemperature) => {
  const resultJackets = comfortCheck(clothingJSON.jackets, currentTemperature)
  const resultSweaters = comfortCheck(clothingJSON.sweaters, currentTemperature)
  const resultPants = comfortCheck(clothingJSON.pants, currentTemperature)
  console.log(resultJackets)
  const jacketIds = comfortIDcheck(resultJackets)
  const sweaterIds = comfortIDcheck(resultSweaters)
  const pantsIds = comfortIDcheck(resultPants)
  console.log(sweaterIds)

  const comfortAlgorithmResult = 
  `Upper body: ${sanitizeStrings(jacketIds)} and a ${sanitizeStrings(sweaterIds)} 
  Lower body: ${sanitizeStrings(pantsIds)}`
  console.log(comfortAlgorithmResult)
  return comfortAlgorithmResult
}



const comfortIDcheck = (array) => array.map(item => item.id)

const comfortCheck = (clothingObj, temperature) => {
  const result = clothingObj.filter(article => {
    const hiTemp = article.temperature.high
    const lowTemp = article.temperature.low
    return (hiTemp >= temperature && temperature >= lowTemp)
})
 return result
}

const sanitizeStrings = (array) => {
  const result = array.map(string => capitalize(string))
  return result.join(' or ')
}
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default comfortAlgorithm
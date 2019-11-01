import React, {useState} from 'react'
import comfortAlgorithm from '../comfortAlgorithm'
import Card from '@material-ui/core/Card'
import PropTypes from 'prop-types'

const Clothes = ({temperature}) => {

  let [comfortableClothes] = useState(comfortAlgorithm(temperature))

  if (temperature > 25) {
    comfortableClothes = ['Nothing', '...actually no nothing under either', 'Maybe underwear but if its that hot you really have a problem']
  }

  return (
    <div>
      <h3>The comfort algorithm suggests that you wear: </h3>
      <Card className="card">
        <h5>Outerwear:</h5>
        <p>{comfortableClothes[0]}</p>
        <h5>Upper body:</h5>
        <p>{comfortableClothes[1]} </p>
        <h5>Lower body:</h5>
        <p>{comfortableClothes[2]}</p>
      </Card>
    </div>
  )
}

Clothes.propTypes = { temperature: PropTypes.number}

Clothes.defaultProps = {temperature: 1}

export default Clothes

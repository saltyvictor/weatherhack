import React, {useState} from 'react'
import comfortAlgorithm from '../../comfortAlgorithm'
import Card from '@material-ui/core/Card'
import PropTypes from 'prop-types'
// ADD CSS STYLING 


const Clothes = ({temperature}) => {
  const [comfortableClothes] = useState(comfortAlgorithm(temperature))

  return (
    <Card className="card">
      <h3>The comfort algorithm suggests that you wear: </h3>
      <p className="clothing-article">{comfortableClothes}</p>
    </Card>
  )
}

Clothes.propTypes = { temperature: PropTypes.number}

Clothes.defaultProps = {temperature: 1}

export default Clothes
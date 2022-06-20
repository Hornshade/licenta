import React from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

const CoolButton = ({text}) => {
  return (
    <div>
    <Button size="lg" className='coolButton'>
      {text}
    </Button>
    </div>
  )
}


CoolButton.propTypes = {
 text:PropTypes.string ,
}
export default CoolButton
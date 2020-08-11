import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({image, flipped, matched, suit, value, handler, code, id}) => {



  return <button onClick={handler}><img src={flipped ? image :  "https://source.unsplash.com/random/226x314"} alt="A card" data-code={code} data-id={id}/>
  </button>
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  matched: PropTypes.bool.isRequired,
  flipped: PropTypes.bool,
  suit: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

Card.defaultProps = {
  flipped: false,
  matched: false,
}

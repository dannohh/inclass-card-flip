import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import api from 'api'
import './Cards.css'

export const Cards = ({cards, handler}) => {

const [flippedCards, setFlippedCards] = useState([])



const handleFlip = ({target: {dataset}}) => {
  if(!flippedCards.length) {
    setFlippedCards(flippedCards => flippedCards.concat({id: dataset.id, code: dataset.code}))
  }
  else if (flippedCards[0].id !== dataset.id) {
  setFlippedCards((flippedCards.concat({id: dataset.id, code: dataset.code})))
  }
console.log(flippedCards)

}






// const renderCard = () => cards.map(({code, image, suit, value}, i) => (
//   <Card />
// )
// } )


return cards.map(({suit, image, value, flipped }, i) => (
  <Card image={image} suit={suit} value={value} key={i} handler={handleFlip} flipped={flipped} />
))
}






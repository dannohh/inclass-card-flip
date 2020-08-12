import React, {useState, useEffect } from 'react'
import {Cards} from './Cards'
import api from 'api'

export const Board = () => {

  const [cards, setCards] = useState([])

  useEffect(() => {
    (async () => {
      const {cards} = await api.index(4)
      const cardsWithDups = cards.concat(Array.from(cards))

      const cardsWithIDs = cardsWithDups.map((card, i) => {
        const cardCopy = JSON.parse(JSON.stringify(card))
        card.id = `${card.code}-${i}`
        return cardCopy
      })

      setCards(cardsWithIDs)
    })()
  },[])
return (
  <div>
    <Cards cards={cards}/>
  </div>
)
}



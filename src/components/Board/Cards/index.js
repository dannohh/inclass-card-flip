import PropTypes from "prop-types"
import React, { useState, useEffect} from "react"
import {Card} from "./Card"

import api from "api"

// import shuffle from "lodash.shuffle", Ask about lodash not working for shuffle

import styles from "./Card.css"

export const Cards = ({ handler }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    ;(async () => {
      const { cards } = await api.index(4)


      const cardsWithIDs = cards.concat(Array.from(cards)).map((card, i) => {

      const cardCopy = { ...card }
      cardCopy.id = `${cardCopy.code}-${i}`
        return cardCopy
      })

      setCards(cardsWithIDs)
    })()
  }, [])

  const flipHandler = ({ currentTarget: { dataset } }) => {
    const { code, id } = dataset

    const flippedCards = cards.filter(({ flipped, matched }) => flipped && !matched)

    handler(true)

    if (flippedCards.length < 2) {
      setCards(truthifyCards("id", "flipped", id))


      if (flippedCards[0]?.code === code) {
        setCards(truthifyCards("code", "matched", code))

        if (!cards.find(({ matched }) => !matched)) {
          handler(false)
        }
      } else if (flippedCards[0]) {
        setTimeout(() => {
          setCards(resetFlippedCards())
        }, 1500)
      }
    }
  }

  const resetFlippedCards = () =>
    cards.map((card) => {
      card.flipped = false
      return card
    })

  const truthifyCards = (k2Locate, k2Change, val2Match) =>
    cards.map((card) => {
      if (card[k2Locate] === val2Match) {
        card[k2Change] = true
      }
      return card
    })

  const renderCards = () =>

    cards.map(({ code, flipped, matched, id, image, suit, value }, i) => {
      return (
        <Card
          code={code}
          flipped={flipped}
          id={id}
          image={image}
          matched={matched}
          suit={suit}
          value={value}
          handler={flipHandler}
          key={i}
        />
      )
    })

  return <div className={styles.container}>{renderCards()}</div>
}

Cards.propTypes = {
  handler: PropTypes.func,
}

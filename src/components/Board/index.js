import React, { useState } from "react"
import { Cards } from "./Cards"
import { Timer } from "./Timer"
import { PairCount } from './PairCount'

export const Board = () => {
  const [toggleTimer, setToggleTimer] = useState(false)

  const handleCards = (toggle) => {
    setToggleTimer(toggle)
  }



  return (
    <main>
      <PairCount />
      <Cards handler={handleCards} />
      <Timer toggle={toggleTimer}/>
    </main>
  )
}

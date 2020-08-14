import React from 'react'

export const PairCount = () => {


const pairPicker = (event) => {
  event.preventDefault()
  const startCardCount = event.target.querySelector('input').value
  console.log(startCardCount)
}

  return (
    <form className="container" onSubmit={pairPicker}>
      <h1>How many cards do you want to match?</h1>
      <input type="text"  className="input"></input>
      <button>Click here to start</button>
    </form>
  )
}

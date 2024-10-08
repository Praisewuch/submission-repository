import React from 'react'

const Button = ({onGood,onNetural,onBad}) => {
  return (
    <div>
      <button onClick={onGood}>Good</button>
      <button onClick={onNetural}>Neutral</button>
      <button onClick={onBad}>Bad</button>
    </div>
  )
}

export default Button

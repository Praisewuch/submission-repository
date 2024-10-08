import React from 'react'

const Display = ({good, neutral,bad,all, average,positive}) => {
  return (
    <div>
      <p>good {good}</p>
      <p>netural {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {`${positive.toFixed(2)}%`}</p>
    </div>
  )
}

export default Display

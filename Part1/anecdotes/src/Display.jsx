import React from 'react'

const Display = ({text}) => {
  return (
    <div>
    <h1>Anecdote of the day</h1>
      {text}
    </div>
  )
}

export default Display

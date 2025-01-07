import React from 'react'

const Total = ({parts}) => {
  let exercises = parts.map(item => item.exercises)
  let result = exercises.reduce((accumulator, currVal) => accumulator + currVal)
  return (
    <div>
      <b>Total of {result} Exercises</b>
    </div>
  )
}

export default Total

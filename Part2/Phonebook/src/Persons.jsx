import React from 'react'
import Person from './Person'

const Persons = ({search,store,persons}) => {
  return (
    <div>
      {search
        ? store.map((item, key) => (
            <Person key={key} item={item}/>
          ))
        : persons.map((item, key) => (
            <Person key={key} item={item}/>
          ))}
    </div>
  )
}

export default Persons;

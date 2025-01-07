import React from 'react'

const Form = ({newSearch, handleSearch,search}) => {

  return (
    <form onSubmit={search}>
      find countries 
      <input value={newSearch} onChange={handleSearch}/>
    </form>
  )
}

export default Form

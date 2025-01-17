import React from 'react'

const PersonsForm = ({newName, handleNameChange,newNumber, handleNumbChange,addNote}) => {
  return (
    <div>
      <form
        id="form"
        onSubmit={(e) => {
          addNote(e);
        }}
      >
        <div>
          name: <input value={newName} onChange={handleNameChange} required/>
        </div>
        <div>
          number: <input type='tel' value={newNumber} onChange={handleNumbChange} required />
        </div>
        <div>
          <button className='btn' type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonsForm;

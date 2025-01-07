import { useEffect, useState } from "react";
import PersonsForm from "./PersonsForm";
import Persons from "./Persons";
import Filter from "./Filter";
import personMod from "./services/mod"
import Notify from "./Notify";

const App = () => {

  const hook = () => {
    personMod
    .getAll()
    .then(initialdata => {
      setPersons(initialdata);
    })
  }
  const [persons, setPersons] = useState([]);
  useEffect(hook,[])

  const [newName, setNewName] = useState("");
  const [namesave, setNamesave] = useState("");
  const [errsave, setErrsave] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [store, setStore] = useState([]);
  const [display, setDisplay] = useState(false)
  const [disp, setDisp] = useState(false)


  function handleNameChange(event) {
    setNewName(event.target.value);
  }

  function handleNumbChange(event) {
    setNewNumber(event.target.value);
  }
  
  function addNote(e) {
    e.preventDefault(); 
    const noteObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    };
    if (persons.some((person) => person.name === newName)) {
      let newdata = persons.filter(item => item.name === newName);
      if(window.confirm(`${newdata[0].name} is already added to phonebook, replace the old number with a new one?`)){
        personMod.update(newdata[0].id,noteObject)
        .then(returneddata => {
          console.log(returneddata)
        }).catch(err => {
          setErrsave(newName);
          setDisp(true);
          setTimeout(() => {
            setDisp(false);
          }, 4000);
        })
      }
    }
    
    else{
      personMod.create(noteObject)
      .then(returnedObject => {
        console.log(returnedObject);
      }).catch(err => {
        console.log(err);
      })
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 4000);
      setNamesave(newName);
      setNewName("");
      setNewNumber();
    }
  }

  function handleSearch(event) {
    const newSearch = event.target.value;
    setSearch(newSearch);

    if (newSearch.length > 0) {
      const lengthIndex = newSearch.length - 1;
      setStore(
        persons.filter(
          (item) => item.name[lengthIndex] === newSearch[lengthIndex]
        )
      );
    }
  }
 

  return (
    <div>
      <h2>Phonebook</h2>
      <Notify color={'red'} message={`Information of ${errsave} has already been removed from server`} display={disp ? 'block':'none'}/>
      <Notify color={'green'} message={`${namesave} has been added!`} display={display ? 'block':'none'}/>
      <Filter search={search} handleSearch={handleSearch} />
      <h1>add a new</h1>
      <PersonsForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumb={newNumber}
        handleNumbChange={handleNumbChange}
        addNote = {addNote}
      />
      <h2>Numbers</h2>
      <Persons search={search} store={store} persons={persons}/>
    </div>
  );
};

export default App;

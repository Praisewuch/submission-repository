import React, { useEffect, useState } from 'react'
import Form from '../Form'
import fetchdat from './services/fetch_data'
import Countryinfo from './Countryinfo'
import './Index.css'
import List from './List'

const App = () => {
    const [newSearch, setNewSearch] = useState('')
    const [data, setData] = useState();
    const [store, setStore] = useState([]);
    const [let1, setLet1] = useState([]);
    const [let2, setLet2] = useState([]);


    useEffect(() => {
        fetchdat.getAll(newSearch)
        .then(initialdat => setData(initialdat))
    })

    function handleSearch(event) {
      //fixes first input undefined problem
      const newSearch = event.target.value;
      setNewSearch(newSearch);

      setLet1(data.filter(
        (item) => item.name.common[0] === newSearch[0]
      ))

      setLet2(let1.filter(
        (item) => item.name.common[1] === newSearch[1]
      ))

      if (newSearch.length > 0) {
        const lengthIndex = newSearch.length - 1;
        setStore(
          let2.filter(
            (item) => item.name.common[lengthIndex] === newSearch[lengthIndex]
          )
        );
      }
    }

  return (
    <div>
      <Form handleSearch = {handleSearch} newSearch={newSearch} />
      {store.length === 1 ?
        store.map((item, key) => (
          <Countryinfo item={item} key={key}/>))
        :store.map((item,key) => (
          <List item={item} key={key}/>
        ))
      }
    </div>
  )
}

export default App

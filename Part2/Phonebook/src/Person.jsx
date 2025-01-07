import React from "react";
import personMod from './services/mod';
import "./app.css";

const Person = ({item}) => {
  const handleDelete = (item) => {
    if(window.confirm(`Delete ${item.name} ?`)){
      personMod.rem(item.id);
    }
  }
  return (
    <div>
      {item.name} {item.number}
      <button className="btn" onClick={() => {handleDelete(item)}}>delete</button>
    </div>
  );
};

export default Person;

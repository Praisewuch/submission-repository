import React from "react";
import Countryinfo from "./Countryinfo";
import { useState } from "react";

const List = ({item}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
      };

  if(show){
    return(
       <Countryinfo item={item} />
    )
  }else{
    return(
        <div>
        <li>{item.name.common}</li>
        <button onClick={() => {handleShow()}}>show</button>
    </div>
    )
  }
};

export default List;

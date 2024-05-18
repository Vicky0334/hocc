import { useState } from 'react'
import React from "react";
import"./index.css";
import{useContext} from "react";
 import { datacontext} from"./Context/DataContext";

const App=() =>{
  const [data, setdata] = useState(datacontext)
 console.log(data);

  return <div>App</div>
  
}

export default App;

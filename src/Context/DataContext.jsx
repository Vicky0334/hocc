import React from "react";
 import { createContext,useState } from "react";
 export const datacontext=createContext(null);

 const DataContext=(props)=>{
    const [data,setdata]=useState("Data to access globally");
    console.log(props);
    return(
        <datacontext.Provider value={{data,setdata}}>
            {props.children}
        </datacontext.Provider>
    );
//    <div>
//     <h1>{props.info}</h1>
//     {props.children}
    
//    </div>
   
}
export default DataContext;
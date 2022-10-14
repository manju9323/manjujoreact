import React from 'react'
import {Redirect, Route} from 'react-router-dom'


function Protectedrouter({component,...some}) {
  
  let Rendercomponent = component;
 let hastoken =localStorage.getItem("mm");
  return (

<Route
   {...some}
         render={ props => {
        
              return hastoken !==null && hastoken !=="" ?(
              <Rendercomponent {...props}/>
              ):(
              <Redirect
              to={{pathname:"/"}}/>
              )
             
    }}
   />


  )
}

export default  Protectedrouter
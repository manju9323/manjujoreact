import {React,useEffect} from 'react'
import "../all.css"



function Urlshort(props) {

  const main=async()=>{
    await ("http://localhost:8000/")
  
  }

  useEffect(()=>{
    main()
  },[])

  

  return (
    <div className='homepage' > 
      welcome to home page sucessfully
      
        </div>
  )
}

export default Urlshort

import axios from 'axios'
import {React,useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import { toast } from 'react-toastify'
import "../all.css"



function Urlshort(props) {
 

  const [data,setdata]=useState({})
  const  [updata,setupdata]=useState({})

  const Fast=async()=>{
    await axios.get("https://manjujoreact.onrender.com/api/auth/find",{headers:{"mm":`${JSON.parse(localStorage.getItem("mm"))}`}})
      .then(res=>{
        setdata(res.data)
      })
    .catch(err=>{toast.error(err.response.data.err)}
    )
    }


   useEffect(()=>{Fast()},[])

   const out=async()=>{
    await localStorage.clear();
    props.history.push("/")
   }


   const handelChange=(e)=>{
    setupdata((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
   }

   const go=async(e)=>{
    e.preventDefault();
    await axios.put("https://manjujoreact.onrender.com/api/auth/update",updata,{headers:{"mm":`${JSON.parse(localStorage.getItem("mm"))}`}})
    .then(res=>{
      toast.success("sucessfully registered!",{
        position:toast.POSITION.TOP_CENTER
      })
      console.log(res.data)
      Fast()
    })
  .catch(err=>{toast.error(err.response.data.err)}
  )
   }



  

  return (
    <>
    <div className="home">

    <div className='homepage' >     <button className='ho' onClick={out}> Logout</button> 
    <div className='head'> 
     <div><label>Name:</label> <span>{data.name}</span></div>
     <div><label>Email:</label> <span>{data.email}</span></div>
    </div>
     

    <div className='body'>
      <form >
        
    <div><label className='left'>Age:</label> <input className='right' type="number" name= "age" onChange={handelChange} /></div>
    <div><label className='left'>Gender:</label> <input className='right'  name= "gender" onChange={handelChange}/></div>
    <div><label className='left'>Dob:</label> <input className='right' type="date"  name= "dob" onChange={handelChange}/></div>
    <div> <label className='left'>Mobile number:</label> <input  className='right' type="tel" name= "mobile" onChange={handelChange}/></div>
    <div> <label className='left'>About:</label> <textarea className='right rr'  name="about" onChange={handelChange} /></div>
     </form>
     
    </div><input className='ss' type="submit" onClick={go}/>
     <Link to="/result" className="sss">status</Link>
    
      
        </div></div>
{/*********************************************************************************************** */}



    </>
  )
}

export default Urlshort
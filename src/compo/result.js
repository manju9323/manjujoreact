import axios from 'axios'
import {React, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import {Link} from "react-router-dom"

function Result(props) {

    
  const [data,setdata]=useState({})

  const Fast=async()=>{
    await axios.get("http://localhost:8000/api/auth/find",{headers:{"mm":`${JSON.parse(localStorage.getItem("mm"))}`}})
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



  return (
    <div>
        
<div className="home">

<div className='homepage' ><Link className='edi' to="/edit">Edit</Link>   <button className='ho' onClick={out}> Logout</button> 
<div className='head'> <div className='succ'>current status </div> 

 <div><label>Name:</label> <span>{data.name}</span></div>
 <div><label>Email:</label> <span>{data.email}</span></div>
</div>
 

<div className='body'>

    
<div className='row'><div></div><label className='lef'>Age:</label> <div className='righ' type="number" name= "age" >{data.age}</div></div>
<div className='row'><div><label className='lef'>Gender:</label> </div><div className='righ'  name= "gender" >{data.gender}</div></div>
<div className='row'><div><label className='lef'>Dob:</label></div> <div className='righ' type="date"  name= "dob" >{data.dob}</div></div>
<div className='row'> <div><label className='lef'>Mobile number:</label></div> <div  className='righ' type="tel" name= "mobile" >{data.mobile}</div></div>


 
</div>
<div className='row'><div><label className='lef'>About:</label></div>  <div className='rig'  name="about" >{data.about}</div></div>
  
    </div></div>
    </div>
  )
}

export default Result
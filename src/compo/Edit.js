import axios from 'axios'
import {React,useEffect, useState} from 'react'
import { toast } from 'react-toastify'
import "../all.css"



function Edit(props) {
 

  const [data,setdata]=useState({})
  const  [updata,setupdata]=useState({})

  const Fast=async()=>{
    await axios.get("https://manjujoreact.onrender.com/api/auth/find",{headers:{"mm":`${JSON.parse(localStorage.getItem("mm"))}`}})
      .then(res=>{
        setdata(res.data)
        setupdata(res.data)
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
    console.log(e.target.name,e.target.value)
    setupdata((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
   }

   const go=async(e)=>{
    e.preventDefault();
    console.log(updata.about==="",updata.mobile==="")
    if(updata.age !=="" && updata.gender !=="" && updata.dob !=="" && updata.mobile !=="" && updata.about !=="" )
    {
      alert("want to value is update")
    await axios.put("https://manjujoreact.onrender.com/api/auth/update",updata,{headers:{"mm":`${JSON.parse(localStorage.getItem("mm"))}`}})
    .then(res=>{
      toast.success("sucessfully updated!",{
        position:toast.POSITION.TOP_CENTER
      })
     // console.log(res.data)
      props.history.push("/result")
    })
  .catch(err=>{toast.error(err.response.data.err)}
  )
}
else{
  toast.error("must fill all fields")
}
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
        
    <div><label className='left'>Age:</label> <input className='right' type="number" name= "age" value={updata.age} onChange={handelChange} /></div>
    
    <div>
    <label for="cars" className='left'>Gender:</label>
        <select id="cars"  className='rights' name="gender" value={updata.gender}  onChange={handelChange}>
        <option value="SELECT">select</option>
        <option value="MALE">MALE</option>
        <option value="FEMALE">FEMALE</option>
        <option value="OTHERS">OTHERS</option>
       </select>   
    </div>

    <div><label className='left'>Dob:</label> <input className='right' type="date"  name= "dob" value={updata.dob} onChange={handelChange}/></div>
    <div> <label className='left'>Mobile number:</label> <input  className='right' type="tel" name= "mobile" value={updata.mobile} onChange={handelChange}/></div>
    <div> <label className='left'>About:</label> <textarea className='right rr'  name="about" value={updata.about} onChange={handelChange} /></div>
     </form>
     
    </div><input className='ss' type="submit" onClick={go}/>
        </div></div>
{/*********************************************************************************************** */}



    </>
  )
}

export default Edit
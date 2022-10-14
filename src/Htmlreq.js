import {React,useEffect,useState} from 'react'

import axios from "axios"
import {useFormik} from 'formik';
import * as yup from 'yup';
import {toast} from 'react-toastify';
import "./all.css";
import Button from 'react-bootstrap/Button';

function Htmlreq(props) {
  const{match}=props
  const [data,setdata]=useState("")
  const search=new URLSearchParams(match.params);
 

  const Fast=async(props)=>{
    const{match}=props
  const search=new URLSearchParams(match.params);
  

  await axios.get(`http://localhost:8000/reset-pass/${search.get("id")}/${search.get("token")}`)
    .then(res=>{
      setdata(res.data.email)
      toast.success("Please enter the reset password",{
        position:toast.POSITION.TOP_CENTER
      })
    })
  .catch(err=>{toast.error(err.response.data.err)}
  )
  }

useEffect(()=>{Fast()},[])

    const formik = useFormik({
      initialValues:{
      password:"",
      password1:"",
    },
    validationSchema:yup.object({
      password:yup.number('enter number format').required('* Required').min(1,"not less than 1").max(9999999999,"not greater than 100000"),
      password1:yup.number('enter number format').required('* Required').min(1,"not less than 1").max(9999999999,"not greater than 100000"),
    }),
    
    
    
    onSubmit:async(value)=>{   
      console.log(value)
      await axios.post(`http://localhost:8000/reset-pass/${search.get("id")}/${search.get("token")}`,value)
      
        .then(res=>{
          toast.success("sucessfully set password",{
            position:toast.POSITION.TOP_CENTER
          })
          props.history.replace("/")
        })
      .catch(err=>{toast.error(err.res.data)}
      )
    } 
    
    })
  
  
    return (
      <><div className='passfor'><div className="p">
        <h1 className='h1'>{data}</h1>
      <form onSubmit={formik.handleSubmit}>
   <div className='form-group'>
    <label for="password">PASSWORD</label>
    <div>
      <input id="password" 
       name="password" 
       type="password" 
       className="form-control"  
       placeholder="Enter password" 
       onBlur={formik.handleBlur} 
       onChange={formik.handleChange} 
       value={formik.values.password} 
       /></div> 
     {formik.touched.password && formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div>:null}
   </div>
   </form>

 <form onSubmit={formik.handleSubmit}>
   <div className='form-group'>
     <label for="password1">CONFIRM PASSWORD</label>
    <div>
      <input id="password1" 
       name="password1" 
       type="password" 
       className="form-control"  
       placeholder="Enter password" 
       onBlur={formik.handleBlur} 
       onChange={formik.handleChange} 
       value={formik.values.password1} 
       /></div> 
     {formik.touched.password1 && formik.errors.password1 ? <div style={{color:"red"}}>{formik.errors.password1}</div>:null}
   </div>
   <Button variant="primary" type="submit" >
        SUBMIT
        </Button>
  </form>

 </div>
 </div></>
      
      
    )
  }

export default Htmlreq
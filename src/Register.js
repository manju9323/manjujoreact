import axios from 'axios';
import React from 'react';
//import {url} from './App'
//import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { toast} from 'react-toastify';
import "./all.css"


function Register(props) {
  //let handleSubmit = async(values)=>{
   // console.log(values)
   // await axios.post("localhost:8000/api/auth/register",values)
  //}
  const formik = useFormik({
    initialValues:{
    name:'',
    email:'',
    password:'',
    confirmpassword:'',
  },

  validationSchema:yup.object({
    name:yup.string().required('* Required'),
    
   email:yup.string().required('* Required'),
   
   password:yup.string("enter password").required('* Required').min(2, 'Too Short!')
   .max(20, 'Too Long!'),
   confirmpassword:yup.string("enter password").required('* Required').min(2, 'Too Short!')
   .max(20, 'Too Long!')
  }),
  
  
  onSubmit:async(value)=>{
   
    if(value.password === value.confirmpassword){
  await axios.post("http://localhost:8000/api/auth/register",value)
  
  .then(res=>{
    toast.success("sucessfully registered!",{
      position:toast.POSITION.TOP_CENTER
    })
    props.history.push("/");
  })
  .catch(err=>{toast.error(err.response.data)}
  )
  
  }
  else{ alert("password and confirm password are mismatch",JSON.stringify({password:value.password,confirmpassword:value.confirmpassword}));}
 
}

  
  })
  return (
    <div className="pass">
    <div className="p">
    <div className="tab"><h1>NEW REGISTRATION</h1></div>

    <form onSubmit={formik.handleSubmit} >
    <div className='form-group'>
      <label for="name">NAME</label>
     <div>
       <input id="name" 
       name="name" 
       type="name" 
       className="form-control" 
       placeholder="Enter Your Name" 
       onBlur={formik.handleBlur} 
       onChange={formik.handleChange}
       value={formik.values.name}
      /></div> 
      {formik.touched.name && formik.errors.name ? <div style={{color:"red"}}>{formik.errors.name}</div>:null}
    </div>
    </form>


    <form onSubmit={formik.handleSubmit} className=''>
    <div className='form-group'>
      <label for="email">EMAIL</label>
     < div>
       <input id="email"
      name="email" 
      type="email" 
      className="form-control" 
      placeholder="Enter email" 
      onBlur={formik.handleBlur}  
      onChange={formik.handleChange} 
      value={formik.values.email}  
      /></div> 
      {formik.touched.email && formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div>:null}
    </div>
</form>

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
      <label for="confirmpassword">CONFIRM PASSWORD</label>
     <div>
       <input id="confirmpassword" 
        name="confirmpassword" 
        type="password" 
        className="form-control"  
        placeholder="Enter password" 
        onBlur={formik.handleBlur} 
        onChange={formik.handleChange} 
        value={formik.values.confirmpassword} 
        /></div> 
      {formik.touched.confirmpassword && formik.errors.confirmpassword ? <div style={{color:"red"}}>{formik.errors.confirmpassword}</div>:null}
    </div>
   
    <div className="form-group">
    <Button variant="primary" type="submit" >
       SUBMIT
       </Button>
       </div>
       </form>
  </div>   
  </div>
  )
}

export default Register
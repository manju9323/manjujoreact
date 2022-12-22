import axios from 'axios';
import React, { useState } from 'react';
//import {url} from './App'
import {NavLink,Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useFormik} from 'formik';
import {toast} from 'react-toastify';
import * as yup from 'yup';
import "./all.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//import CookieParser from 'cookieparser';

function Login(props) {

  const [load,setload]=useState(false)
 

  const formik = useFormik({
    initialValues:{
    email:'',
    password:'',
  },
  validationSchema:yup.object({
    email:yup.string().required('* Required'),
    password:yup.string("enter password").required('* Required')

  }),
  
  
  
  onSubmit:async(values)=>{
     setload(true);
    await axios.post("https://manjujoreact.onrender.com/api/auth/login",values)
    .then( res=>{
      setload(false);
    localStorage.setItem("mm",JSON.stringify(res.data))

    props.history.push("/home");
  
    })
    
    .catch(
     
      err=>{
        setload(false);
        toast.error(err.response.data.err)}
  
    )
    
  } 
  
  })

  return (
    <div className="pass">
    <div className="p">
    <div className="tab"><h1>WELCOME TO LOGIN</h1></div>

    
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
     <div className="passlabel">
     <label for="password">PASSWORD</label>
      <Link to="/forget" className="forget">FORGET PASSWORD</Link> 
      </div>
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

    <div className="form-group passlabel">
     
    <Button variant="primary" type="submit" >
      {load ? "LOADING..." : "LOGIN"}
       </Button>
       <NavLink to="/register"><Button className="si" variant="primary" type="submit" >
        NEW REGISTER
       </Button></NavLink>
       </div>

</form>

  </div>   
  </div>
  )
}

export default Login
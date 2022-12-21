import {React} from 'react'
import axios from "axios"
import {useFormik} from 'formik';
import * as yup from 'yup';
import { toast} from 'react-toastify';
import "./all.css"
import Button from 'react-bootstrap/Button';

function Forget(props) {
  const formik = useFormik({
    initialValues:{
    email:''
  },
  validationSchema:yup.object({
    email:yup.string().required('* Required'),
  }),
  
  
  
  onSubmit:async(value)=>{
    console.log(value)
  
    await axios.post("http://localhost:8000/forget-pass",value)
    
      .then(res=>{
        toast.success(res.data,{
          position:toast.POSITION.TOP_CENTER
        })
        props.history.replace("/")
      })
    .catch(err=>{toast.error(err.response.data.err)}
    )
  } 
  
  })


  return (
    <div className='passfor'><div className="p">
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
    <div className="form-group passlabel"></div>
    <Button variant="primary" type="submit" >
       SUBMIT
       </Button>
</form>
</div>
</div>
    
  )
}

export default Forget
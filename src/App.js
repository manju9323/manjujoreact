import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Urlshort from './compo/Urlsho';
import Login from './Login'

import React from 'react';
import Register from './Register';
import  Forget from './Forget';
import  Htmlreq from './Htmlreq';
import Protectedrouter from './protectedrouter';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//export const url='https://gmailapp.onrender.com/api/auth/login';

/**/
//toast
//<Protectedrouter exact path="/home" component={Gmail}/>


function App() {
  return (
    
    <div className='App'>
        <Router>
        
            <Route exact path="/" component={Login} />
            <Route exact path="/forget" component={Forget}/>
            <Route exact path="/reset-pass/:id/:token" component={Htmlreq}/>

            <Route  exact path="/register" component ={Register}/>
            <Protectedrouter exact path="/home" component={Urlshort}/>
           <ToastContainer />  
        
        </Router>
    </div>
 
  );
}

export default App;
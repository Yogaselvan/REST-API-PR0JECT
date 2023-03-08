import React from 'react';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import GetForm from './get';
import "../Front/nav.css"
import UpdateForm from './update';
import Deleteform from './delete';
//import '../Front/style.css';
//import '../Front/front.css';
import Post from './post';


function Dum(){
    return (
        <div className='App'>
                 <Router>
                    <div class='nav'>
                        <h1 id='title'>BloodBank</h1>
                        <div class='nav-link'>
                    <Link to='/'><button><b>HOME</b></button></Link>
                    <Link to='/UpdateForm'><button><b>UPDATE</b></button></Link>
                    <Link to='/get'><button><b>VIEW</b></button></Link>
                    <Link to='/Deleteform'><button><b>DELETE</b></button></Link>
                    </div>
                    </div>
                   
                <Routes>
                
                <Route path='/' element={<Post/>}/>
                <Route path='/get' element={<GetForm/>}/>
                <Route path='/UpdateForm' element={<UpdateForm/>}/>
                <Route path='/Deleteform' element={<Deleteform/>}/>

                </Routes>
                </Router>

        </div>
    )
}

export default Dum;
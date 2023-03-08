import {BrowserRouter as Router ,Link,Route,Routes} from 'react-router-dom';
import GetForm from './get';
import "../Front/nav.css"
import UpdateForm from './update';
import Deleteform from './delete';
import Post from './post';
import "../Front/layout.css"
function Intro() {
    return (  
        <Router>
      <ul>
  <li>
    <Link to="/" class="link">HOME</Link>
  </li>
  <li>
    <Link to="/UpdateForm" class="link">UPDATE</Link>
  </li>
   <li>
  <Link to="/get" class="link" >VIEW</Link>
  </li> 
   <li>
  <Link to="/Deleteform" class="link" >DELETE</Link>
  </li> 
</ul>
<Routes>
  <Route path="/" element={<Post/>}/>
  <Route path="/get" element={<GetForm/>}/>
  <Route path="/UpdateForm" element={<UpdateForm/>}/>
  <Route path="/Deleteform" element={<Deleteform/>}/>
  
</Routes>
    </Router>
    );
}

export default Intro;
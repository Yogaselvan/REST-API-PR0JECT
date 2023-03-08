import {StrictMode} from 'react'
import {BrowserRouter as Router ,Link,Route,Routes} from 'react-router-dom';
import Hooks from './componnts/hooks';
import Booking from './componnts/Booking';
import 'bootstrap/dist/css/bootstrap.css'
import Total from './componnts/total';
import Propsdemo from './componnts/propsdemo';
import Success from './componnts/successfullticket';
import Validform from './componnts/validfom';
import New from './componnts/new';
import Summa from './componnts/summa';
import Formsubmission from './componnts/formsubmiaaion';
import Register from './componnts/registrationform';
import Get from './componnts/get';
import Delete from './componnts/del';
import Put from './componnts/put1';
function App() {
  return (
    <Router>
      <ul class="nav">
  <li class="nav-item">
    <Link to="/total" class="nav-link active">Movies</Link>
  </li>
  <li class="nav-item">
    <Link to="/Booking" class="nav-link">Tickets</Link>
  </li>
   <li class="nav-item">
  <Link to="/Register" class="nav-link" >Signin</Link>
  </li> 
   <li class="nav-item">
  <Link to="/Get" class="nav-link" >Get users</Link>
  </li> 
  <li class="nav-item">
    <Link to="/Delete" class="nav-link active">Delete users</Link>
  </li>
  <li class="nav-item">
  <Link to="/Put" class="nav-link" >Updateusers</Link>
  </li>
  <li class="nav-item">
  <Link to="/propsdemo" class="nav-link" >AboutUs</Link>
  </li>
  <li class="nav-item">
  <Link to="/summa" class="nav-link" >ContactUs</Link>
  </li>
</ul>
<Routes>
  <Route path="/total" element={<Total/>}/>
  <Route path="/Booking" element={<Booking/>}/>
  <Route path="/Register" element={<Register/>}/>
  <Route path="/Success" element={<Success/>}/>
  <Route path="/propsdemo" element={<Propsdemo/>}/>
  <Route path="/Get" element={<Get/>}/>
  <Route path="/summa" element={<Summa/>}/>
  <Route path="/Delete" element={<Delete/>}/>
  <Route path="/Put" element={<Put/>}/>
</Routes>
    </Router>
  );  
}

export default App;

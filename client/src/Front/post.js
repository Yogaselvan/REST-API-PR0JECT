import axios from 'axios';
import {useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './get.js'
 

function Post()
{
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [tests, setTests] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    
   
    
 
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/hi/save",
        {
        
        firstName:firstName,
        lastName:lastName,
        email:email,
        address:address,
        tests:tests,
        bloodGroup:bloodGroup

        });
          alert("Successfully Completed.");
          setId("");
          setFirstName("");
          setLastName("");
          setEmail("");
          setAddress("")
          setTests("");
          setBloodGroup("");
        
        
        }
    catch(err)
        {
          alert("Registation Failed");
        }
   }
    return (

        <div class="container mt-4"  style={{ display: 'block', 
        width: 700, 
        padding: 30 }}>
          <center><h2>BloodBankRegistation</h2></center>
        <form>
        <div class="form-group">
            <label><span>FirstName</span></label>
            <input type="text" class="form-control" placeholder="Enter FirstName"
             value={firstName}
            onChange={(event) =>
              {
                setFirstName(event.target.value);      
              }}
              required
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>LastName</span></label>
            <input type="text" class="form-control" placeholder="Enter LastName"
             value={lastName}
            onChange={(event) =>
              {
                setLastName(event.target.value);      
              }}
              required
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>email</span></label>
            <input type="text" class="form-control" placeholder="Enter Email"
             value={email}
             onChange={(event) =>
               {
                setEmail(event.target.value);      
               }}
               required
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Address</span></label>
            <input type="text" class="form-control" placeholder="Enter Address"
            value={address}
            onChange={(event) =>
              {
                setAddress(event.target.value);      
              }}
              required
           />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Tests</span></label>
            <input type="text" class="form-control" placeholder="Enter Tests"
            value={tests}
            onChange={(event) =>
              {
                setTests(event.target.value);      
              }}
              required
           />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>BloodGroup</span></label>
            <input type="text" class="form-control" placeholder="Enter BloodGroup"
             value={bloodGroup}
             onChange={(event) =>
               {
                setBloodGroup(event.target.value);      
               }}
               required
            />
        </div>
        <br></br>
       
        
        <button class="btn btn-primary mt-4"  onClick={save}>Register</button>
        </form>
 
      </div>
    
    );
  }
  
  export default Post;
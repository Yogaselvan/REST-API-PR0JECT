import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState} from 'react';
import axios from 'axios';

export default function UpdateForm() {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [tests, setTests] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    async function save(event) {
        event.preventDefault();
        try {
            await axios.put("http://localhost:8080/hi/put",

                { id:id,
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    address:address,
                    tests:tests,
                    bloodGroup:bloodGroup
                });
            alert(" Updation Successfully Completed");
            setId("");
            setFirstName("");
            setLastName("");
            setEmail("");
            setAddress("")
            setTests("");
            setBloodGroup("");
          


        }
        catch (err) {
            alert(" Updation Failed");
        }
    }

    return (
       
        <div class="container mt-4"  style={{ display: 'block', 
        width: 700, 
        padding: 30 }}>
          <center><h2>BloodBankRegistation</h2></center>
        <form>
        <div class="form-group">
       <center> <input type="number" placeholder='Enter ID Number' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}/></center>
<br></br>
<br></br>
            <label><span>FirstName</span></label>
            <input type="text" class="form-control" placeholder="Enter FirstName"
             value={firstName}
            onChange={(event) =>
              {
                setFirstName(event.target.value);      
              }}
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
            />
        </div>
        <br></br>
        <button class="btn btn-primary mt-4"  onClick={save}>Update</button>
        </form>
 
      </div>
           
           
    );
}
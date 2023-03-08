import React from 'react';
import axios from 'axios';
import { useState,useEffect} from 'react';


function Deleteform() {
    const [id, setId] = useState();
    const [error, setError] = useState('');
    const [mydata, setMyData] = useState('');

    useEffect(() => {
        axios
            .get("http://localhost:8080/hi/get")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            // .catch((error) => setIsError(error.message));
    }, []);
    function del() {
        const length = Object.keys(mydata).length;
        // event.preventDefault();
        let f=0;
        for (let i = 0; i < length; i++) {
            // console.log(myData[i].roll);
            
            if(Number(id)===mydata[i].id){
                f=1;
                try {

        axios
            .delete('http://localhost:8080/hi/del?id=' + id)
            .then((response) => {
                console.log(response.data);
                
            })
             .catch((error) => setError(error.message));
        alert("User Deleted");
                }
                catch(err){
                    alert("Registration failed");
                }
            }
        }
        if(f===0){
            alert("Id is not found");
        }
    }
    return (
        <>  <center>
            <h2>Delete The Details</h2>
            <div>

                <input type="number" placeholder='Enter ID Number' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}>

                </input>
            </div>
            <br></br>

            <button type="submit" class="btn btn-primary" onClick
                ={del}>Delete</button>
                </center>
          
            <h2>
                {error}
            </h2>
          
        </>
    );
}

export default Deleteform;
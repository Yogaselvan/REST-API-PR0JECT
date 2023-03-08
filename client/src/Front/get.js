import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import "../Front/get.css";

const GetForm = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:8080/hi/get")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);
    return (
        <>
        <br>
        </br>
           <center> <h1 className="head"> View Details of Patient</h1></center>
            {isError !== "" && <h2>{isError}</h2>}
            <br></br>
            <br></br>
              
            <div className="grid">
                {myData.slice(0,8).map((post) => {
                    return (
                        <table className="table caption-top">
                            
                                <thead>
                                    <th scope="col">Id</th>
                                    <th scope="col">FirstName</th>
                                    <th scope="col">LastName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Tests</th>
                                    <th scope="col">BloodGroup</th>
                                    
                                    
                                    
                                </thead>
                               <tbody>
                                <tr key={(post.id)}>
                                    <td>{post.id}</td>
                                    <td>{post.firstName}</td>
                                    <td>{post.lastName}</td>
                                    <td>{post.email}</td>
                                    <td>{post.address}</td>
                                    <td>{post.tests}</td>
                                    <td>{post.bloodGroup}</td>
                                    
                                </tr>
                                </tbody>
                            </table>
                        
                    );
                })}
            </div>
        </>
    );
};

export default GetForm;
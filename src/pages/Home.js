import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import './Home.css'
import {gitHubUrl} from './constatn';


function Home() {
  const [getData, setgetData]=useState([])

  useEffect(() =>{
    axios.get(gitHubUrl)
    .then(response =>{
      setgetData(response.data)
    })
  })

  return (
<div>
      
 <table className='table' >

  <tr>
    <th>Project Name</th>
    <th>Language</th>
    <th> Description</th>
  </tr>

    { getData.map(dataItem => (  
    <tr>
    <td  key={dataItem.id}>{dataItem.name}</td>
    <td key={dataItem.id}>{dataItem.language || "-"}</td>
    <td key={dataItem.id}>{dataItem.description || "-"}</td>
    </tr>))}
 </table>
         
 </div>
 )}


 
 export default Home
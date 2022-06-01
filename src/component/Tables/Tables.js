import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import './Tables.css'
import {TableContainer ,Table , TableHead , TableBody,TableRow ,TableCell ,Paper} from '@mui/material'
import {Switch} from 'antd'



function Tables(props) {
  
  const [ErrorMeg ,setErrorMeg]=useState("");
 
  const [Toggle ,setToggle] =useState(false)
  const toggler = () =>
  {
    Toggle ? setToggle(false): setToggle(true);
  }

 const [DataList, setDataList]=useState([])


  useEffect(() =>{
    axios.get(props.URL)
    .then(response =>{
     setDataList(response.data) 
  })
    .catch((error)=>
    {
      
       setErrorMeg("Error :" + error.response.status ); 
      
      
    })
  })

  
  return (

 <div >
   
 <Switch onClick={toggler} className="SwitchButton" />

{
 
  Toggle ? <span>
  <TableContainer component={Paper}>
     
    <Table className='table'>
      <TableHead>
        <TableRow>
          
          <TableCell>Project Name</TableCell>
          <TableCell>Language</TableCell>
          <TableCell>Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
     
        {DataList.map((row)=> (<TableRow key={row.id}>
          {ErrorMeg && <div>{ErrorMeg}</div>}
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.language || "-"}</TableCell>
          <TableCell>{row.description || "-"}</TableCell>
        </TableRow>))}
      </TableBody>
    </Table>
    
  </TableContainer>
  </span> : <span className="SpanToShowData"> {ErrorMeg || "Enter To Show Data"} </span>
  
   
  
 
  
  }
  
 

 



</div>

  )}



 export default Tables
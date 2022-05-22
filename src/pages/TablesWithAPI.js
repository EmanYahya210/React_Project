import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import './TablesWithAPI.css'
import {gitHubUrl} from './constatn';
import {TableContainer ,Table , TableHead , TableBody,TableRow ,TableCell ,Paper} from '@mui/material'



function Tables() {

  // const column =[
  //   {field:'id' , headerName:'ID' },
  //   {field:'projectName' , headerName:'Project Name' , width:300 },
  //   {field:'language' , headerName:'Language',width:300  },
  //   {field:'description' , headerName:'Description' , width:600 },
  // ]


  const [getData, setgetData]=useState([])

  useEffect(() =>{
    axios.get(gitHubUrl)
    .then(response =>{setgetData(response.data) })
  })
  

  return (
    
 <div>
  
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
        {getData.map((row)=> (<TableRow key={row.id}>
          
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.language || "-"}</TableCell>
          <TableCell>{row.description || "-"}</TableCell>
        </TableRow>))}
      </TableBody>
    </Table>

  </TableContainer>
  </div>

)}


 
 export default Tables
import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import './TablesWithAPI.css'
import {gitHubUrl} from './constatn';
import { gitHubUrl2 } from "./constatn";
import {TableContainer ,Table , TableHead , TableBody,TableRow ,TableCell ,Paper} from '@mui/material'



function Tables() {


  const [getDataFromgitHubUrl, setgetData]=useState([])

  useEffect(() =>{
    axios.get(gitHubUrl)
    .then(response =>{setgetData(response.data) })
  })

  const [getDataFromgitHubUrl2 , setgetDataFromgitHubUrl2]=useState([])

  useEffect(() =>{
    axios.get(gitHubUrl2)
    .then(response =>{setgetDataFromgitHubUrl2(response.data) })
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
        {getDataFromgitHubUrl.map((row)=> (<TableRow key={row.id}>
          
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.language || "-"}</TableCell>
          <TableCell>{row.description || "-"}</TableCell>
        </TableRow>))}
      </TableBody>
    </Table>

  </TableContainer>

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
        
        {getDataFromgitHubUrl2.map((row)=> (<TableRow key={row.id}>
          
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
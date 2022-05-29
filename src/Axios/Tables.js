import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import './Tables.css'
import {TableContainer ,Table , TableHead , TableBody,TableRow ,TableCell ,Paper} from '@mui/material'
import {Switch} from 'antd'
import errorMes from "../pages/errorMes";


function Tables(props) {

  const [Toggle ,setToggle] =useState(false)
  const toggler = () =>
  {
    Toggle ? setToggle(false): setToggle(true);
  }



  const [getData, setgetData]=useState([])
  useEffect(() =>{
    axios.get(props.URL)
    .then(response =>{setgetData(response.data) })
    .catch((error)=>
    {
      if(error.response)
      {
          console.log(error.response.status);
          console.log(error.response.data.message);
      }
    
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
        {getData.map((row)=> (<TableRow key={row.id}>
          
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.language || "-"}</TableCell>
          <TableCell>{row.description || "-"}</TableCell>
        </TableRow>))}
      </TableBody>
    </Table>

  </TableContainer>
  </span> : <span className="SpanToShowData"> Enter To Show Table</span>
} 

</div>

  )}

// {/* <<div>

// <Switch onClick={toggler} className="SwitchButton" />

// {
//   Toggle ? <span>
//   <TableContainer component={Paper}>
     
//     <Table className='table'>
//       <TableHead>
//         <TableRow>
          
//           <TableCell>Project Name</TableCell>
//           <TableCell>Language</TableCell>
//           <TableCell>Description</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
        
//         {getDataFromgitHubUrl2.map((row)=> (<TableRow key={row.id}>
          
//           <TableCell>{row.name}</TableCell>
//           <TableCell>{row.language || "-"}</TableCell>
//           <TableCell>{row.description || "-"}</TableCell>
//         </TableRow>))}
//       </TableBody>
//     </Table>

//   </TableContainer>
//   </span> : <span className="SpanToShowData"> Enter To Show Table</span>
// }
// </div>
// </div> */}




 
 export default Tables
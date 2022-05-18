import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import './Home.css'





function Home() {
  const [getData, setgetData]=useState([])

  useEffect(() =>{
    axios.get("https://api.github.com/users/ariv797/repos")
    .then(showData =>{
      console.log(showData)
      setgetData(showData.data)
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

    { getData.map(dataItem => (  <tr><td  key={dataItem.id}>{dataItem.name}</td>
    <td key={dataItem.id}>{dataItem.language || "-"}</td>
    <td key={dataItem.id}>{dataItem.description || "-"}</td>
    </tr>))}

     {/* { getData.map(dataItem => (<ul key={dataItem.id}> */}
      
      {/* <td>{dataItem.name}</td> */}
   
    {/* </ul> ))}
 
     { getData.map(dataItem => (<ul key={dataItem.id}><td>{dataItem.name}</td></ul>))}
    
    </tr> */}
     
  {/* ))}
        { getData.map(dataItem => (<ul key={dataItem.id}>
      <td>{dataItem.id}</td>
    </ul> 
     ))}
          { getData.map(dataItem => (<ul key={dataItem.id}>
      <td>{dataItem.name}</td>
    </ul>  */}
     
 

  {/* <ul>
  <div className='project'>
    
  
  
    
    
  </tr>
  
  
  </div>
  </ul> */}
  {/* <tr>
    <td>" " </td>
    <td>" "</td>
    <td>" "</td>
  </tr> */}
 

  </table>
  {/* <ul>
  <div className='project'>
  { getData.map(dataItem => (<li key={dataItem.id}>
  <tr>
    <th>{dataItem.name}</th>
    <th>{dataItem.language || "No Language"}</th>
    <th>{dataItem.description || "No"}</th>
  </tr>
  </li> ))}
  </div>
  </ul>
</table> */}
  
         
 
 </div>
  )}
      


          // {/* <ul>
    //   { getData.map(dataItem => (<li /*key={dataItem.id}*/>
       //  {dataItem.full_name} </li>))}
    //  </ul>
       //   </div>
         // </li>
       //   ))}

   

    //  {/* <ul>
      // { getData.map(dataItem => (<li key={dataItem.id}>
       //   {dataItem.language} </li>))}
    //  </ul> */}



   
//  )
 // )}
  
//export default Home


// const baseURL ="https://api.github.com/users/ariv797/repos";

// function Home (){
  
//   const [getData,setgetData]= useState(false)
//   React.useEffect(()=>{
//     axios.get(baseURL)
//     .then(getDataFromURL =>{
//       setgetData(getDataFromURL.data)

//     })
//   })
//   return(
//    <div className='data'>
//      {this.useState.getData.map(getData => <div>{getData.name}</div>)}
//    </div>  
//   )
// }

// class Home extends Component{

//  state={
//    user:[]
//  }
 

//   componentDidMount(){
//     axios.get("https://api.github.com/users/ariv797/repos")
//     .then(res => { // after I get the data to want to receive on 
//       console.log(res.data)
//       this.setState({user:res.data})
//     })
 
//  }  
//   render () {

//     return(
//       <div className='home'>
//         <h1>Eman Alsayed</h1>
     
//       <div className='data'>
     
//         {this.state.user.map(users => <div className='eman'>{users.name}</div>)}
//       </div>
//       </div>
//     )
//   }
 

 export default Home
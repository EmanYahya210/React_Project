
import './Home.css'

 const Home = () => {
  return (
   
      <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Language</th>
          <th>Discription</th>
        </tr>
      </thead>
      <tbody></tbody>
      </table>
   
  )
}

export default Home






// function Home() {



//   return (
// <div>
      


//  <table className='table'>
         
//   <tr>
//     <th>Project Name</th>
//     <th>Language</th>
//     <th className='disc'>Discription</th>
//   </tr>
 
//   <tr>
//     <td>" " </td>
//     <td>" "</td>
//     <td>" "</td>
//   </tr>
 

//   </table>
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
  
         
 
 //</div>

      


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
// }

// export default Home
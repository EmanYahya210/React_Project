

import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';
import About_Us from './pages/About_Us';
import ConnectWithUs from './pages/ConnectWithUs';
import Log_Out from './pages/Log_Out';
import React, { useEffect,useState } from 'react'
import axios from 'axios'




// import Home from './pages/Home';
// import About_Us from './pages/About_Us';
// import Game from './pages/Game';
// import ConnectWithUs from './pages/ConnectWithUs';
function App() {

  const [getData, setgetData]=useState([])

  useEffect(() =>{
    axios.get("https://api.github.com/users/ariv797/repos")
    .then(showData =>{
      console.log(showData)
      setgetData(showData.data)
    })
  
  })
  return (
    <>
   
      <div>
      <BrowserRouter>
      
      <Navbar /> 

      
       <Routes >
  
       <Route path='/'  element = {<Home />} />
       <Route path='/aboutUs' element={<About_Us />}  />
       <Route path='/game' element={<Game />} />
       <Route path='/connectWithUs' element={<ConnectWithUs />} />
       <Route path='/LogOut' element={<Log_Out />} />

       </Routes>

    </BrowserRouter>  
    </div>
    
    </>
  );
}

export default App;

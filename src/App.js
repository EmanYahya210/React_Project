

import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import  Tables from './pages/TablesWithAPI';
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

  

 
  return (
    <>
   
      <div>
      <BrowserRouter>
      
      <Navbar /> 
    

      
       <Routes >
  
       <Route path='/' element={< Tables />} />
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

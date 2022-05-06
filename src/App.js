
import React,{component} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
// import Home from './pages/Home';
// import About_Us from './pages/About_Us';
// import Game from './pages/Game';
// import ConnectWithUs from './pages/ConnectWithUs';
function App() {
  return (
    <>
   
    <Router>
      <Navbar />
       <Routes>
       <Route path='/' />
       <Route path='/aboutUs' />
       <Route path='/game' />
       <Route path='/connectWithUs'  />

       </Routes>

     
    </Router>
    
    </>
  );
}

export default App;

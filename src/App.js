
import './App.css';
import Navbar from './component/Navbar'
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from './pages/Home'
import AboutUs from './pages/About_Us';
import APIdata from './pages/TabelsWithAPI';


function App() {

  return (
    <>
  <div>
    <BrowserRouter>
      <Navbar /> 

       <Routes >
   
        <Route path='/' element={< Home />} />
        <Route path='/DataAPI' element={< APIdata />} />
        <Route path='/aboutUs' element={<AboutUs />}  />
    
       </Routes>

    </BrowserRouter>  
 </div>
    
    </>
  );
}

export default App;

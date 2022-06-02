
import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Navbar from './component/NavBar/Navbar';
import Home from './pages/Home/Home';
import APIdata from './pages/API/API';
import AboutUs from './pages/AboutUs/AboutUs';
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


import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Navbar from './component/NavBar/Navbar';
import Home from './pages/Home/Home';
import APIdata from './pages/API/API';


import Counter from './pages/Redux/Counter';
function App() {

  return (
    <>
  <div>
 
    <BrowserRouter>
      <Navbar /> 

       <Routes >
   
        <Route path='/' element={< Home />} />
        <Route path='/DataAPI' element={< APIdata />} />
        <Route path='/aboutUs' element={<Counter />}  />
    
       </Routes>

    </BrowserRouter>  
 </div>
    
    </>
  );
}

export default App;

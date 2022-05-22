import React , {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';



function Navbar() {
  const [sidebar,setSidebar]= useState(false);
  const showSidebar = () =>setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{color:'fff'}}>

    <div className='navbar'>
 
      
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars  onClick={showSidebar}/>
           
        </Link>
        
        <div className='header_left' >
           
            <h2 className='title' > React.js Tutorial </h2>
        
    </div>
    </div>
    
    
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
       <ul className='nav-menu-item' onClick={showSidebar}>
         <li className='navbar-toggle'>
           <Link to='#' className='menu-bars'>
             <AiIcons.AiOutlineClose />
           </Link>
         </li>
         {SidebarData.map((item,index)=>{
           return(
             <li key={index} className={item.cName}>
               <Link to={item.path}>
                 {item.icon}
                 <span>{item.title}</span>
                 
                
               </Link>
              
              
             </li>
           );
         })}
       </ul>
      
      </nav>
      </IconContext.Provider>


    </>

   
  )
}

export default Navbar
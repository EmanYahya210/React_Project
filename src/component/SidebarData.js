import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";





export const SidebarData=[
 {
     title :'Tables With API',
     path : '/',
     icon : <AiIcons.AiFillHome />,
     cName:'nav-text',
    
     
 },
 {
    title :'About Us ',
    path : '/aboutUs',
    icon : <AiIcons.AiOutlineTeam />,
    cName:'nav-text',
},
{
    title :'Game',
    path : '/game',
    icon : <GiIcons.GiGamepad />,
    cName:'nav-text',
},
{
    title :'Connect With Us',
    path : '/connectWithUs',
    icon : <SiIcons.SiMinutemailer />,
    cName:'nav-text',
},

{
    title :'Log Out',
    path : '/LogOut',
    icon : <BiIcons.BiLogOut />,
    cName:'nav-text',
}





]

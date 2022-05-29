

import React from "react";
import AxiosDes from "../Axios/AxiosDesc/index";
import Tables from "../Axios/Tables";
import {gitHubUrl,gitHubUrl2,gitHubUrl3} from './constatn'


const APIdata = () =>
{
return(
 <div>  
    
< AxiosDes  />
 <Tables URL={gitHubUrl}/>
 <Tables URL={gitHubUrl2}/>
 <Tables URL={gitHubUrl3}/>
</div>
)}

export default APIdata;
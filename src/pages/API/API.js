

import React from "react";
import Tables from "../../component/Tables/Tables";
import {gitHubUrl,gitHubUrl2,gitHubUrl3} from '../../constatn'
import ApiDes from "../../Fixed Data/apiPageIntro";



const APIdata = () =>
{
return(
 <div>  
    
 <ApiDes />
 <Tables URL={gitHubUrl}/>
 <Tables URL={gitHubUrl2}/>
 <Tables URL={gitHubUrl3}/>
</div>
)}

export default APIdata;
import React, { Component } from 'react'
import {HomeDiv ,Information,Title,Desc,SpanDesc} from './style';



const AxiosDes = () =>{

  return (
    <HomeDiv>
        <div className="container">
             <Information>
              <Title>Axios</Title>
                   
                    <Desc>
                   <SpanDesc>Axios</SpanDesc> is a Javascript library used to make HTTP requestsfrom node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests. 
                    </Desc>
                    
             </Information>
        </div>   
    </HomeDiv>
  );
}

export default AxiosDes;
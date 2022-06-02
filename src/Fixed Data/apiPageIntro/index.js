import React, { Component } from 'react'
import {HomeDiv ,Information,Title,Desc,SpanDesc,ProjectNote} from './style'



const ApiDes = () =>{

  return (
    <HomeDiv>
        <div className="container">
             <Information>
              <Title>Github APIs</Title>
              <ProjectNote>In this tutorial, we used the Axios library</ProjectNote>
               <Desc>
                <SpanDesc>Github APIs</SpanDesc> (or Github REST) APIs are the APIs that you can use to interact with GitHub. They allow you to create and manage repositories, branches, issues, pull requests, and many more. For fetching publicly available information (like public repositories, user profiles, etc.). 
               </Desc>
                    
             </Information>
        </div>   
    </HomeDiv>
  );
}

export default ApiDes;
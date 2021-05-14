import React from 'react'
import styled,  { keyframes } from 'styled-components';
import OneProject from './OneProject';
import {ProjectData} from '../Assets/ProjectData';
import DraggableDialog from './DraggableDialog';


function Projects() {
    return (
        
        <div style={{background: "#ede7cf",marginTop:"-5%"}}>
             <h2 style={{fontFamily:"Comic Sans MS",marginLeft : "60px"}}>Best Projects</h2>
            <ProjectsWrapper> 
            {
                ProjectData.map((data)=>(
                    
                    
                    <OneProject project = {data}/>
                    
              ))
            }  
             
            </ProjectsWrapper>
            <DraggableDialog open ={true}/>
        </div>
       
    )
}

export default Projects

const ProjectsWrapper = styled.div`
   background: #ede7cf;
   height: 60vh;
   display : flex;
   margin-left : 60px;
   margin-right : 60px;
   justify-content: space-between;
   @media (max-width: 768px) {
    display : flex;
    flex-direction: column;
    height: 500vh; 
    margin-left : 2px;
    margin-right : 2px;
    align-items: center;
    margin-right : 30px;
    margin-left : 30px;
  }
`;

const ProjectsDiv = styled.div`
   height: "70vh";
   background: "#ede7cf";
   margin-top:"-5%";
   @media (max-width: 768px) {
    height: "500vh";
   }
`;
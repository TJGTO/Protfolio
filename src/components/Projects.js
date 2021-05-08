import React from 'react'
import styled,  { keyframes } from 'styled-components';
import OneProject from './OneProject';
import {ProjectData} from '../Assets/ProjectData';
import DraggableDialog from './DraggableDialog';


function Projects() {
    return (
        <div style={{height: "70vh",background: "#ede7cf",marginTop:"-5%"}}>
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
`;
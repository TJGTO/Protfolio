import React from 'react'
import styled,  { keyframes } from 'styled-components';
import resume from '../Assets/Tathagata.pdf';
import {Skills} from '../Assets/SkillsData';
import SmallChips from './SkillsSection'

function MoreAbout() {
    return (
        <div>
           
            
            <MoreAboutWrapper>
                <MoreAbouts>
                <h2 style={{fontFamily:"Comic Sans MS"}}>More about me</h2>
                <p style={{fontFamily:"Comic Sans MS"}}>I love to  build new projects and become happy seeing them Working Live</p>
                <p style={{fontFamily:"Comic Sans MS"}}>I am currently working as a FUll Stack Engineer on Allied Media Inc, Mani Casadona, Kolkata.</p>
                <hr></hr>
                
                <h2 style={{fontFamily:"Comic Sans MS"}}>Social Media Handles</h2>
                <a target="_blank" href="https://www.linkedin.com/in/tathagata-mandal-245980153/" style={{fontFamily:"Comic Sans MS",color:"blue"}}>LinkedIn: @Tathagata Mondal</a>
                <br></br>
                
                <a target="_blank" href="https://github.com/TJGTO" style={{fontFamily:"Comic Sans MS",color:"blue"}}>Github: @Tathagata</a>
                <hr></hr>
                
                <h2 style={{fontFamily:"Comic Sans MS",}}>SKills</h2>
                 <Skillsdiv>
                   <br></br>
                   <SmallChips/>
                 </Skillsdiv>
                </MoreAbouts>
                <IframeDiv>
                <Hiddendiv>
                <h2 style={{fontFamily:"Comic Sans MS",}}>Resume</h2>
                </Hiddendiv>
                
                <iframe src={resume} width="100%" height="100%"/>
                </IframeDiv>
            </MoreAboutWrapper>

        </div>
    )
}

export default MoreAbout

const MoreAboutWrapper = styled.div`
   background: #ede7cf;
   height: 100vh;
   display : flex;

   justify-content: space-between;
   @media (max-width:768px){
    display : flex;
    flex-direction: column;
    height: 380vh;
    
    align-items: center;
   
   }
`;
const MoreAbouts = styled.div`
   
   width : 45%;
   height: 80vh;
   padding-top : 3%;
   margin-left : 60px;
   @media (max-width:768px){
    
    height: 100vh;
    width: 80%;
    padding-top : 0.5%;
    margin-top : 10%;
   }
`
const IframeDiv = styled.div`
   
   
   width : 45%;
   height: 79vh;
   padding-top : 2%;
   margin-right : 60px;
   @media (max-width:768px){
    
    margin-top:-5%;
    margin-left : 2%;
    margin-right : 0px;
    height: 100vh;
    width: 80%;
    padding-top : 0%;
    padding-bottom : 40%;
    
   }
`
const Skillsdiv = styled.div`
   
   
   height: 20vh;
   background: #ffff;
   @media (max-width:768px){
    height: 60vh;
   }
   
`;
const Skill = styled.div`
    background : #f0ead6;
    height: 3vh;
    width: 50%;
    
`;
const Hiddendiv = styled.div`
   display : none;
   @media (max-width:768px){
       display : inline;
   }
`;
const Wrap = styled.div`
   display : flex;
   align-content : center ;
   justify-content:space-between ;
   flex-wrap: wrap;
   height: 100%;
   width : 100%;
   
`;
const Iframe = styled.iframe`

`;

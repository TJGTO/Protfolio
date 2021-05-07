import styled,  { keyframes } from 'styled-components';
import React, { useState , useEffect } from 'react';
import logo from '../Assets/tathagata.jpg';

function Header() {
    const [time , settime] = useState("");
   
    useEffect(()=>{
        console.log("Within useeffect");
        let systemdate = new Date();
        let localdate = systemdate.toLocaleString();
        let date = new Date(localdate);
        let hour = date.getHours();
        if(hour < 14 && hour > 5){

           settime("Good Morning");

        }else if(hour < 18 && hour > 14){

           settime("Good Morning");

        }else if(hour < 21 && hour > 18){

           settime("Good Evening");
        }
    });

    return (
        <div>
           <Greeting>
               Hi, {time} I'm Tathagata Mondal
              
           </Greeting>
           <About>
           <AboutBox>
              <ImageBox>
                 <Profilepic src={logo}/>
              </ImageBox>
              <DescBox>
                  <h3 style={{paddingLeft:"10px",fontSize: "28px",marginTop:"3%",fontFamily:"Comic Sans MS"}}>About</h3>
                  <p style={{paddingLeft:"10px",paddingRight:"10px",marginTop:"-8%",fontFamily:"Comic Sans MS"}}>
                    "I love to solve ral life problem in a dynamic way by using my creative thinking whhich ease the struggle of mankind."
                  </p>
              </DescBox>
              <Designation>
              <h3 style={{paddingLeft:"10px",fontSize: "28px",marginTop:"3%",fontFamily:"Comic Sans MS"}}>Designation</h3>
                  <p style={{paddingLeft:"10px",paddingRight:"10px",marginTop:"-8%",fontFamily:"Comic Sans MS"}}>
                    Full Stack Engineer
                  </p>
              </Designation>
           </AboutBox>
           </About>
        </div>
    )
}

export default Header

const Greeting = styled.div`
   
  background: #ede7cf;
  font-size: 35px;
  color: #4fb4d0;
  height: 20vh;
  display: flex;
  justify-content : center;
  align-items: center;
  font-family:"Comic Sans MS"
`;

const AboutBox = styled.div`
  display : flex;
  z-index :999;
  justify-content : space-between;
  padding-top : 10%;
  padding-left : 10%;
  padding-right : 10%;
  background: #ffff;
  height: 50vh;
  margin-right : 100px;
  margin-left : 100px;
  border: 1px solid black;
  box-shadow : 20px 20px 20px rgb(153, 153, 102);
  
`;
const About = styled.div`
    background: #ede7cf;
    height: 75vh;
`;
const imageanimation = keyframes`
  0% {
    transform: translateX(-100%);
    opacity:0.05
  }
  50%{
    opacity:0.2
  }
  100% {
    transform: translateX(0);
  }
`;
const ImageBox = styled.div`
  
    border: 1px solid black;
    height: 30vh;
    width : 25%;
    animation : ${imageanimation} 1s ease-in;
    &:hover { 
      box-shadow : 20px 20px 20px rgb(153, 153, 102);
      height: 32vh;
      width : 26%;
    }
`;
const aboutanimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity:0.05
  }
  50%{
    opacity:0.2
  }
  100% {
    transform: translateY(0);
  }
`;
const DescBox = styled.div`
    background: #f0ead6; 
    overflow: hidden;
    text-overflow: clip; 
    height: 30vh;
    width : 25%;
    animation : ${aboutanimation} 1s ease-in;
    &:hover {
      background: #f0eae9; 
      box-shadow : 20px 20px 20px rgb(153, 153, 102);
      height: 32vh;
      width : 26%;
    }
    
`;
const designationanimation = keyframes`
  0% {
    transform: translateX(+100%);
    opacity:0.05
  }
  50%{
    opacity:0.2
  }
  100% {
    transform: translateX(0);
  }
`;
const Designation = styled.div`
   background: #f0ead6; 
   overflow: hidden;
   text-overflow: clip; 
   height: 30vh;
   width : 25%;
   animation : ${designationanimation} 1s ease-in;
   &:hover {
    background: #f0eae9; 
    box-shadow : 20px 20px 20px rgb(153, 153, 102);
    height: 32vh;
    width : 26%;
  }
`;
const Profilepic= styled.img`
   width : 100%;
   height :100%;
`;
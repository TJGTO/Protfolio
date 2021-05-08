import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import Header from "./components/Header";
import MoreAbout from "./components/MoreAbout";
import Projects from "./components/Projects";
import StickyFooter from "./components/StickyFooter";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Protfolio>
        <Header/>
        <MoreAbout/>
        <Projects/>
         <Footer/> 
         {/* <StickyFooter/>  */}
      </Protfolio>
    </div>
  );
}

export default App;

const Protfolio = styled.div`
  background: #f2f2f2; 
  width : 100%;
  height: 100vh;
`;
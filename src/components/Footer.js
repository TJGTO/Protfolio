import React from "react";
import styled,  { keyframes } from 'styled-components';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';




const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px",fontFamily:"Comic Sans MS" }}>
		Contact me if you interested.
	</h1>
	<Containers>
		<Row>
		<Column></Column>
		<Column>
			<Heading>Medium</Heading>
			<FooterLink href="#"><PhoneIcon/></FooterLink>
			<FooterLink href="tathagata5121@gmail.com"><EmailIcon/></FooterLink>
			<FooterLink target="_blank" href="https://www.facebook.com/nirmalya.mondol"><FacebookIcon/></FooterLink>
			<FooterLink target="_blank" href="https://www.linkedin.com/in/tathagata-mandal-245980153/"><LinkedInIcon/></FooterLink>
		</Column>
		<Column>
			<Heading>Details</Heading>
			<FooterLink href="#" >
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				7047241849
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				tathagata5121@gmail.com
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#" target="_blank">
			<i className="fab fa-twitter" >
				<span style={{ marginLeft: "10px" }}>
				https://www.facebook.com/nirmalya.mondol
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#" target="_blank">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				https://www.linkedin.com/in/tathagata-mandal-245980153/
				</span>
			</i>
			</FooterLink>
		</Column>
        <Column></Column>
		</Row>
	</Containers>
	<MobileFooter>
	<div style={{marginLeft:"30%"}}>
	<table>
		<tbody>
			<tr>
				<td >
				 <a target="_blank" href="#"><PhoneIcon/></a>
				</td>
				<td>
					:  7047241849
				</td>
				
			</tr>
			<tr>
				<td>
				<a target="_blank" href="https://www.facebook.com/nirmalya.mondol"><EmailIcon/></a>
				</td>
				<td>
					:  tathagat5121@gmail.com
				</td>
			</tr>
			<tr>
			<td>
			<a target="_blank" href="https://www.facebook.com/nirmalya.mondol"><FacebookIcon/>    </a>
				</td>
				<td>
					:  Tathagata Mondal
				</td>
			</tr>
			<tr>
			<td>
				<a target="_blank" href="https://www.linkedin.com/in/tathagata-mandal-245980153"><EmailIcon/></a>
				</td>
				<td>
					:  Tathagata Mondal
				</td>
			</tr>
		</tbody>
	</table>
	</div>
	 <br></br>
	 <div style={{color:"red",marginLeft:"20%"}}>@open with Pc for better experience</div>
	</MobileFooter>

    <br></br>
	 
    
	</Box>
);
};
export default Footer;


const CopyRight =styled.div`

justify-content : center;
align-items: center;
`;
const MobileFooter =styled.div`
   
    display :none;
	@media (max-width: 1000px) {
		display :inline;
		margin-left: 30%;
		
	}
   
`;
const Box = styled.div`
padding: 80px 60px;
background: #f0eae9;
bottom: 0;
@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

const Containers = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
	@media (max-width:768px){
		display : none;
	}
`

const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;
const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

const FooterLink = styled.a`
color : black;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
font-family:"Comic Sans MS"
&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;
const FooterContacts = styled.p`
color : black;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
font-family:"Comic Sans MS"
&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
font-family:"Comic Sans MS"
`;

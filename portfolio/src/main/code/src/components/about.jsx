import React, { Component } from 'react';
import image from './images/priyanshi.jpeg'
import './about.css';
import Timeline from './timeline';
import Achievement from './achievements';

var sectionStyle = {
  position : 'relative',
  backgroundColor: "white",
  width: "100%",
  marginLeft: "0px",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  marginBottom: "130px",

};
export default class about extends Component {
	render() {
		return (
			<div style={{color: "white" , marginTop: "100px"}} class="text-center">
				<div Class="row container mx-auto" style={{marginBottom: "30px"}}> 
					<div class="col-lg-4 container">
				  		<img src={image} style={{width: "100%", borderRadius: "50%" , borderColor: "white", display: "block" , marginLeft: "auto" , marginRight: "auto"}} class="center"/>
					</div>
					<div class="col-lg-5 container">
						<p style={{fontFamily: "Playfair Display" , fontSize: "40px"}}> Hey there ! </p>
						<p style={{fontFamily: "Roboto"}}> 
							I am Priyanshi Jain, a second year student in Computer Science and Engineering at IIT Jodhpur.
							I am friendly, helpful, hard working. I have worked on several Projects ranging from web Development to Machine Learning.
							I love doing sport programming and currently a 5 star at codechef. I have represented IIT Jodhpur at IIT Delhi's annual sport fest Sportech
							as a part of Table Tennis Team. I am Science and Technology Secretary of Girls Hostel. 
					    </p>
						<br />
						<button
						style={{
							width: "130px",
							borderRadius: "3px",
							marginRight: "1rem",
							marginLeft: "1rem",
							borderColor: "white",
							borderShadow: "10px 10px blue",
							height: "45px",
							marginTop: "20px",
							marginBottom: "25px"
						}}
						class="btn btn-outline-secondary">
                     	<a  style={{color: "white"}}  href= {require('./images/Priyanshijain.pdf')} target="_blank" >
						Resume
						</a>
						</button>
					</div>
				</div>
				<br />
				<Achievement />
				<Timeline />
				<p style={{color: "white" , fontFamily: "Playfair Display" , fontSize: "40px" , marginBottom : "30px", marginTop:"110px"}} class="text-center"> What I do,</p>
				<div>
				  	<div class="row" >
				    	<div class="col-lg-4 col-sm-12 col-md-12">
				      		<div class="card card-1">
								<p style={{fontSize: "20px" , fontFamily: "Playfair Display"}}> Sport Programmer </p>
								<p>I regularly do competitive Programming on various platforms like Codechef, Codeforces , Hackerearth, Spoj. I love Problem solving </p>
								<br />
				      		</div>
				    	</div>
				    	<div class="col-lg-4 col-sm-12 col-md-12">
				      		<div class="card card-2">
								<p style={{fontSize: "20px" , fontFamily: "Playfair Display"}}> Full Stack Web Developer </p>
								<p>  I have worked on several projects(TechMate, Riotofflavours, Medicore, Mytrello) . I have developed this WebApps on MERN stack using material-ui for UI designing. </p>
				      		</div>
				    	</div>
				    	<div class="col-lg-4 col-sm-12 col-md-12">
							<div class="card card-3">
								<p style={{fontSize: "20px" , fontFamily: "Playfair Display"}}> Image Processing </p>
								<p> I have worked on Project ImageIn and Implemented digital Image Inpainting in python using modified convolution
								with accuracy of 83% </p>
								<br />
							</div>
				    	</div>
				  	</div>
				</div>
				<p style={{color: "white" , fontFamily: "Playfair Display" , fontSize: "40px" , marginBottom : "30px", marginTop:"110px"}} class="text-center"> Skills</p>
				<p class="text-center" style={{fontFamily: "Roboto" , fontSize: "20px"}}> C++ , C , Javascript , CSS, HTML , React Js, Nodejs , Express Js </p>
				<p style={{color: "white" , fontFamily: "Playfair Display" , fontSize: "40px" , marginBottom : "30px", marginTop:"110px"}} class="text-center"> Experience</p>
				<p class="text-center" style={{fontFamily: "Roboto" , fontSize: "20px"}}>Remote Problem Setter Intern at Hackerearth </p>
				<p class="text-center" style={{fontFamily: "Roboto" , fontSize: "20px"}}> Developed a Freelance Project for Riotofflavours </p>
				<p style={{color: "white" , fontFamily: "Playfair Display" , fontSize: "40px" , marginBottom : "30px", marginTop:"110px"}} class="text-center"> Links </p>
				<p> <b>Github:  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;</b> <a href = 'https://github.com/jainpriyanshi' target="_blank"> jainpriyanshi </a> </p>
				<p> <b>Codechef: </b> &nbsp;  &nbsp;  &nbsp;   <a href = 'https://www.codechef.com/users/priyanshi2407' target="_blank"> priyanshi2407 </a> </p>
				<p> <b>Codeforces: </b>  &nbsp;  &nbsp;  <a href = 'https://codeforces.com/profile/PriyanshiJain' target="_blank" > PriyanshiJain </a> </p>
				<p> <b>Hackerearth: </b>   &nbsp;  &nbsp; <a href = 'https://www.hackerearth.com/@priyanshi202' target="_blank"> priyanshi202 </a> </p>
				<p> <b>Spoj:  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  </b> <a href = 'https://www.spoj.com/users/priyanshi_2407/' target="_blank"> priyanshi_2407 </a> </p>
			</div>
		);
	}
}

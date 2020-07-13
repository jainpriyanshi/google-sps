import React, { Component } from 'react';
import './achievement.css'
import img1 from './images/achievement1.png'
import img2 from './images/achievement2.png'
import img3 from './images/achievement3.png'
export default class achievements extends Component {
	render() {
		return (
			<div>
			    <p style={{color: "white" , fontFamily: "Playfair Display" , fontSize: "40px" , marginBottom : "30px"}} class="text-center"> 
				Achievements 
				</p>
				<div class="container" style={{marginTop:"10px" , marginBottom: "100px"}} >
				  	<div class="row" >
						<div class="col-md-4" style={{marginTop: "20px"}}>
				      		<div class="cardac">
				         		<img src = {img1}  style={{height: "250px" , width: "100%"}} class="img"/>
				          		<p> Among Top 5 Indian Women Coders (according to codechef)  <a href='https://blog.codechef.com/2020/03/08/join-us-in-celebrating-the-women-in-competitive-programming/'> link </a> </p>
				      		</div>
				    	</div>
				    	<div class="col-md-4" style={{marginTop: "20px"}}>
				      		<div class="cardac" >
				         		<img src = {img2}  style={{height: "250px" , width: "100%"}} class="img"/>
				         		<p> 29th Rank in ACM-ICPC Kanpur Regional 2019 out of 101 Teams [Team WeBug] <a href='https://drive.google.com/file/d/1YqvJ0ptPhH0UWeQYRiTRDM7t0qomBM2u/view'> link </a> </p>
				      		</div>
				    	</div>
				    	<div class="col-md-4" style={{marginTop: "20px"}}>
				      		<div class="cardac">
								<img src = {img3}  style={{height: "250px" , width: "100%"}} class="img"/>
								<p> Ranked 444/10724 Globally and 26/3116 in the Country in Google
								Hashcode 2020 [Team Code_Wade] <a href='https://drive.google.com/file/d/1zHjVsjgNAW3HiPjQDjMjXj-N7L5rOFZv/view'> link </a> </p>
				      		</div>
				    	</div>
				    </div>
				</div>
			</div>
		);
	}
}

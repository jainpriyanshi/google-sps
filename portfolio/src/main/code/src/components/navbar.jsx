import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom'
import './typist.css';

export default class navbar extends Component {
	render() {
		return (
			<div style={{marginTop: "0px" , fontFamily: "Playfair Display" }} class="text-center">
				<NavLink to='/'  
				style={{color: "white" , marginLeft: "10px"}} 
				class="neon2"
				exact activeClassName="current"> 
				Home 
				</NavLink>

				<NavLink to='/about'  
				style={{color: "white" , marginLeft: "10px"}} 
				class="neon2"
				exact activeClassName="current"> 
				About 
				</NavLink>

				<NavLink to='/project'  
				style={{color: "white" , marginLeft: "10px"}} 
				class="neon2"
				exact activeClassName="current"> 
				Project
				</NavLink>
				
				<NavLink to='/contact'  
				style={{color: "white" , marginLeft: "10px"}} 
				class="neon2"
				exact activeClassName="current"> 
				Contact
				</NavLink>
			</div>
		);
	}
}

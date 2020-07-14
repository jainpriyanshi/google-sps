import React, { Component } from 'react';

export default class footer extends Component {
	render() {
		return (
			<div> 
				<p class="text-center" 
				style={{fontFamily: "Playfair Display" , 
					fontSize: "15px" , 
					color: "white" , 
					Bottom : "0"
				}}
				 >  
				Designed with &hearts; by Priyanshi 
				</p>
			</div>
		);
	}
}
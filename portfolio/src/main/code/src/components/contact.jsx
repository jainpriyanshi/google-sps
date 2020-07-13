import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const stylesFn = () => ({
  input: {
    color: "white",
  },
  multilineColor:{
        color:'white'
    }
});

export  class contact extends Component {
	render() {
		return (
			<div class="container row mx-auto" style={{margin: "60px 0px"}}>
			<div class="col-lg-5 container text-center"  style={{fontFamily: "Roboto" , fontSize: "17px" , color: "white", margin:"50px 30px"}}>
        <p> Priyanshi Jain </p>
        <p> B-Tech, IIT Jodhpur</p>
        <p style={{fontSize: ""}}> Want to work together </p>
        <p> Email: jain.23@iitj.ac.in , jainpriyanshi2407@gmail.com </p>
        <a href ="https://www.facebook.com/priyanshi.jain.3158652" target="_blank" >
          <FacebookIcon style={{color: "grey" , margin: "5px"}} fontSize="large" />
        </a>
        <a href = "https://www.linkedin.com/in/priyanshi-jain-a3262a188/" target="_blank">
          <LinkedInIcon  style={{color: "grey" , margin: "5px"}} fontSize="large"/>
        </a>
        <a href = "https://www.instagram.com/_jain_priyanshi/" target="_blank">
          <InstagramIcon  style={{color: "grey" , margin: "5px"}} fontSize="large"/>
        </a>
        <a href = "mailto:jain.23@iitj.ac.in" target="_blank">
          <MailOutlineIcon  style={{color: "grey" , margin: "5px"}} fontSize="large"/>
        </a>       
			</div>
			<div class="col-lg-5 card container" style={{color: "white" }}>
				<form Validate style={{margin:"50px 30px"}} >
          <TextField 
          variant="filled" 
          style={{ width: "100%" ,color: "white" , margin: "20px 0" }}
          placeholder= "Email"
          id = "email"
          type= "email"
          InputProps={{
          className: this.props.classes.input, 
            }}
          />
          <TextField 
          variant="filled" 
          height="100px"
          style={{ width: "100%" ,color: "white"  , margin: "20px 0"}}
          placeholder= "Message"
          id = "msg"
          type= "text"
          multiline
          InputProps={{
          className: this.props.classes.input, 
            }}
            />
          <button 
          style={{
              width: "100%",
              borderRadius: "3px",
              color: "white",
              height: "45px",
              backgroundColor: "black"
          }}
          class="btn btn-secondary"> Contact </button>
        </form>
			</div>
		</div>
		);
	}
}

export default withStyles(stylesFn)(contact);
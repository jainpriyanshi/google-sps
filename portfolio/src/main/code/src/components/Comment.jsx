import React, { Component } from 'react';
import './about.css';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Moment from 'react-moment';
import {TextField} from '@material-ui/core';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const stylesFn = () => ({
  input: {
    color: "white",
  },
  multilineColor:{
        color:'white'
    }
});

export class Comment extends Component {
	constructor() {
        super();
        this.state = {
        	name: "",
            comment: "",
            open: false,
            comments: [],
            loaded: false,        }
    };
    componentDidMount(){
        axios.get(`/all-comments`)
        .then(res=> this.setState({comments: res.data})
                    )
        .catch(err=> console.log(err));
    }
    onChange = e => {
        this.setState({[e.target.id]: e.target.value })
    }
    onSubmit = (e) =>
    {
        e.preventDefault();
        var comments = ({
            name: this.state.name,
            message: this.state.comment,
            date: Date.now()
        })
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: this.state.name })
    };
    fetch('/new-comment', requestOptions)
        .then(response => response.json());
    }
	render() {
		return (
			<div class="col-lg-10 card container" style={{color: "white" , marginTop: "70px"}}>
			<div>
				<form Validate action="/new-comment" method="POST">
                    <p style={{fontFamily: "Lato sans-serif" , marginLeft: "100px"}}> Leave a Comment </p> 
                    <TextField
                        required
                        onChange={this.onChange}
                        value={this.state.name} 
                        id="name"
                        type="text"
                        name="name"
                        placeholder="name"
                        style={{marginLeft: "100px" , width: "50%" , marginBottom : "20px"}}
                        InputProps={{
				          className: this.props.classes.input, 
				            }}
                    />
                    <TextField
                        required
                        multiline
                        onChange={this.onChange}
                        value={this.state.comment} 
                        placeholder="comment"
                        id="comment"
                        name="message"
                        type="text"
                        style={{marginLeft: "100px" , width: "50%" , marginBottom : "20px"}}
                        InputProps={{
				          className: this.props.classes.input, 
				            }}
                    />
                   
                    <button 
                        type="button" 
                        class="btn btn-primary btn-md btn-block card-1" 
                        type="submit" 
                        style={{
                            borderRadius: "3px",
                            letterSpacing: "1px",
                            marginTop: "2px",
                            width: "50%",
                            marginLeft: "100px"
                            }}>
                                Comment
                    </button>
                </form>
                <p style={{
                        textDecoration: "underline",
                        fontFamily: "Lato sans-serif",
                        marginTop: "100px"
                    }}> {this.state.comments.length} Comments </p>
                    {this.state.comments.map(comment=>(
                        <div style={{display: "block" }}>
                        {comment.name?
                        <Avatar alt= {comment.author} style={{float: "left" , color: "black"}} >
                        {comment.name[0]}
                        </Avatar>
                        :
                        <Avatar alt= {comment.author} style={{float: "left" , color: "black"}}>
                        A
                        </Avatar>
                    	}
                    	{comment.name?
                        <span style={{ fontSize: "14px" , marginLeft: "10px"}}> {comment.name} </span>
                        :
                        <span style={{ fontSize: "14px" , marginLeft: "10px"}}> Anonymous </span>
                    	}
                        
                        <p style={{ fontSize: "11px" , marginLeft: "10px" , color: "grey" , marginLeft: "50px"}}> 
                        <Moment format="MMM D, YYYY @ HH.mm" date= {comment.timestamp} style={{fontFamily: "Lato"}} />
                        </p>
                        <p style={{color: "white" , fontSize: "13px" , marginLeft: "20px"}}> {comment.message} </p>
                        <hr />
                        </div>))}
                    </div>
			</div>
		);
	}
}

export default withStyles(stylesFn)(Comment);
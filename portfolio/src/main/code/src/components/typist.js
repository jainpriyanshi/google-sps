import React, { Component } from "react";
import Typed from 'typed.js';
import './typist.css'
var sectionStyle = {
  marginBottom: "130px",
};
export default class TypistComponent extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            new Typed('.type', {
                strings: ["I am Sport Programmer", "I am a Full Stack Web Developer", "I am a Freelancer"],
                stringsElement: null,
                typeSpeed: 80,
                startDelay: 600,
                backSpeed: 50,
                backDelay: 1000,
                loop: true,
                loopCount: 5,

                cursorChar: "|",
                attr: null,
                contentType: 'html',
            });
        });
    }
    render() {
        return (
            <div  class=" text-center" style={sectionStyle}>
                <div style={{color: "white"}}>
                    <p style={{marginBottom: "130px"}}> </p>
                    <p class="neon" style={{fontFamily : "Roboto" , fontSize: "70px" , margin: "0% 2%" }} > Priyanshi Jain </p>
                    <span style={{fontFamily : "Playfair Display" , fontSize: "25px" }}  class="type"></span>
                    <p style={{fontFamily : "Roboto" , fontSize: "18px"  , marginLeft: "20%" , marginRight: "20%"}}> I am a student at Computer Science Department at IIT jodhpur </p>
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
        )
    }
}
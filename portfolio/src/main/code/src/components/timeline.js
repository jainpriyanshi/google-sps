import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';

export default class timeline extends Component {
  render() {
    return (
      <div class="col-lg-8  container">
        <p style={{color: "white" , fontFamily: "Playfair Display" , fontSize: "40px" , marginBottom : "30px"}} class="text-center"> 
        Education 
        </p>
        <VerticalTimeline >
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'black', color: 'white' }}
        contentArrowStyle={{ borderRight: '7px  #9999A1' }}
        date="2018 - present"
        iconStyle={{ background: '#66666E', color: 'white' }}
        icon={<SchoolIcon />}
        >
          <p style={{fontSize: "17px" , fontFamily: "Roboto" , marginBottom: "10px"}}> IIT Jodhpur </p>
          <p style={{fontSize: "13px" , fontFamily: "Roboto", margin: "0"}}> BTech , Computer Science and Engineering </p>
          <p style={{fontSize: "13px" , fontFamily: "Roboto" , margin: "0"}}> CGPA: 8.99(Till 3rd sem) </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'black', color: 'white' }}
        contentArrowStyle={{ borderRight: '7px  #9999A1' }}
        date="2015 - 2017"
        iconStyle={{ background: '#66666E', color: 'white' }}
        icon={<SchoolIcon />}
        >
          <p style={{fontSize: "17px" , fontFamily: "Roboto" , marginBottom: "10px"}}> Carmel Convent Senior Secondary School </p>
          <p style={{fontSize: "13px" , fontFamily: "Roboto", margin: "0"}}> Class 12 | CBSE </p>
          <p style={{fontSize: "13px" , fontFamily: "Roboto" , margin: "0"}}> Percentage: 94.6% </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'black', color: 'white' }}
        contentArrowStyle={{ borderRight: '7px  #9999A1' }}
        date="2013 - 2015"
        iconStyle={{ background: '#66666E', color: 'white' }}
        icon={<SchoolIcon />}
        >
          <p style={{fontSize: "17px" , fontFamily: "Roboto" , marginBottom: "10px"}}> Carmel Convent Senior Secondary School  </p>
          <p style={{fontSize: "13px" , fontFamily: "Roboto", margin: "0"}}> Class 10 | CBSE </p>
          <p style={{fontSize: "13px" , fontFamily: "Roboto" , margin: "0"}}> CGPA: 10 </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    );
  }
}



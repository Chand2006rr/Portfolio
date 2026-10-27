import React from 'react'
import "./about.css"
import Card from '../Card/card'
import mern from '../../assets/mern.png'
import java from '../../assets/java.png'
import dsa from '../../assets/dsa.png'

function About() {
  return (
    <div id='about'>
      <div className="leftabout">
          <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Details</h1>
            <ul>
              <li>
                <span>Name</span> : Chand Kumar Mishra
              </li>
              <li>
                <span>Age</span> : 20
              </li>
              <li>
                <span>Gender</span> : Male
              </li>
              <li>
                <span>Language Known</span> : Hindi,English
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>Degree</span> : BTech
              </li>
              <li>
                <span>Branch</span> : Computer Science And Engineering
              </li>
            </ul>
          </div>
          <div className="skill">
            <h1>Skills</h1>
            <ul>
              <li>
                MERN STACK
              </li>
              <li>
                DSA
              </li>
              <li>
                JAVA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK" image={mern}/>
        <Card title="JAVA" image={java}/>
        <Card title="DSA" image={dsa}/>
      </div>
    </div>
  )
}

export default About

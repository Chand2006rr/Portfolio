import React from 'react'
import Card from '../Card/card'
import robotic from "../../assets/robotic.jpeg"
import javadsa from "../../assets/javadsa.jpeg"
import mern from "../../assets/merncertificate.png"
import "./certificate.css"

function Certificate() {
  return (
    <div id='certificate'>
        <h1 className='certifi'>MY CERTIFICATES</h1>
        <div className="certi">
            <Card title="Robotics" image={robotic}/>
            <Card title="Java" image={javadsa}/>
            <Card title="WEB DEVELOPMENT" image={mern}/>
            <Card/>
        </div>
    </div>
  )
}

export default Certificate

import React from 'react'
import "./project.css"
import Card from '../Card/card'
import "./project.css"
import portfolio from "../../assets/portfolio.png"
import nexora from "../../assets/nexora.png"
import wanderlust from "../../assets/wanderlust.png"
import spotify from "../../assets/spotify clone.png"
import weather from "../../assets/weather.png"
import eventora from "../../assets/eventora.png"
import placement from "../../assets/placement.png"

function Project() {
  return (
    <div id='project'>
      <h1 className='project'>MY PROJECTS</h1>
      <br />
      <h1 className='port'>MAJOR PROJECT</h1>
       <div className="slider">
        <Card title="NEXORA" image={nexora}/>
        <Card title="WANDERLUST" image={wanderlust}/>
        <Card title="EVENTORA" image={eventora}/>
        <Card title="PLACEMENT PREDICTOR" image={placement}/>

       </div>
       <br /><br />
      <h1 className='port'>MINI PROJECT</h1>
       <div className="slider">
        <Card title="PORTFOLIO" image={portfolio}/>
        <Card title="SPOTIFY CLONE" image={spotify}/>
        <Card title="WEATHER APP" image={weather}/>
       </div>
    </div> 
  )
}

export default Project

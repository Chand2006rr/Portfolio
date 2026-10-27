import React from 'react'
import "./home.css"
import man from "../../assets/chandpic.jpeg"
import { TypeAnimation } from "react-type-animation"

function Home() {
  return (
    <div id="home">
        <div className="lefthome">
          <div className="homedetails">
          <div className="home1">I'M</div>
          <div className="home2">CHAND KUMAR MISHRA</div>
          <div className="home3">
            <TypeAnimation
              sequence={[
                "WEB DEVELOPER",
                1000,
                "SOFTWARE ENGINEER",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat="Infinity"
            />
          </div>
          <button>Hire Me</button>
          </div>
        </div>

        <div className="righthome">  
          <img src={man} alt="" />
        </div>
    </div>
  )
} 

export default Home
import React from 'react';
import '../SmartTraffic.css';
import IconLogo from "./IconLogo"
import traffic from '../assets/background.jpeg'

const SmartTraffic = () => {
  const backgroundImageUrl = 'https://i0.wp.com/eastgate-software.com/wp-content/uploads/2023/12/its.webp?fit=1920%2C1080&ssl=1';
  return (
    <div className="landing-page" style={{  backgroundImage: `url(${backgroundImageUrl})`, height: "100vh" }}>  {/* Mint green background */}
      <div className="container pt-5 pb-5">
        <IconLogo/>
        <h1 className="display-4 text-center mb-4" style={{fontSize: "90px", color: "white"}}>Welcome to TKT Smart Traffic</h1>
        <p className="lead text-center" style={{color: "white", fontSize: "30px"}}>
          TKT Smart Traffic aims to bring its users the most efficient route to get to their destination on time, leveraging intelligent traffic management systems and real-time data analysis.
        </p>
        <div className="text-center">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Contact Us
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="mailto:support@tktsmarttraffic.com">Email Us</a>
            <a className="dropdown-item" href="tel:+1234567890">Phone: +1234567890</a>
          </div>
        </div>
        <div className="text-center mt-5">
          <button className="get-started-btn">
            <a href="http://localhost:5174/">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SmartTraffic;
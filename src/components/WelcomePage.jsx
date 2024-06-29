import React from 'react';
import '../SmartTraffic.css';
import IconLogo from "./IconLogo"
import traffic from '../assets/background.jpeg'

const SmartTraffic = () => {
  const backgroundImageUrl = 'https://youtu.be/sPe_XHhO5aw?si=yDc9kEXhq-wu0Z3w';
  return (
    <div className="landing-page" style={{  backgroundImage: `url(${backgroundImageUrl})`, height: "100vh" }}>  {/* Mint green background */}
      <div className="container pt-5 pb-5">
        <IconLogo/>
        <h1 className="display-4 text-center mb-4" style={{fontSize: "90px", color: "white"}}>Welcome to TKT Smart Traffic</h1>
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
        {/* <div className="text-center mt-5">
          <button className="get-started-btn">
            <a href="http://localhost:5173/Main">Get Started</a>
          </button>
        </div> */}
      </div>
      <div className="lead text-center pt-4 " style={{color: "black", fontSize: "20px", backgroundColor: "#C4E1C5", width: "100vw", height: "10vh", fontFamily: "sans", fontWeight: "normal", paddingLeft: "5px"}}>
          <p style={{textAlign: "center"}}>TKT Smart Traffic aims to bring its users the most efficient route to get to their destination on time, leveraging intelligent traffic management systems and real-time data analysis.</p>
        </div>
        <div className="text-center mt-5">
          <button className="get-started-btn" style={{backgroundColor: "turquoise", border: "none", textDecoration: "none  ", borderRadius: "2px"}}>
            <a href="http://localhost:5173/Main" style={{textDecoration: "none", color: "white", fontSize: "20px"}}>Get Started</a>
          </button>
        </div>
    </div>
  )
}

export default SmartTraffic;
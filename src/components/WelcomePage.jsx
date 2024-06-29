import React from 'react';
import '../SmartTraffic.css';
import IconLogo from "./IconLogo"
import traffic from '../assets/background.jpeg'

const SmartTraffic = () => {
  // const backgroundImageUrl = 'https://i0.wp.com/eastgate-software.com/wp-content/uploads/2023/12/its.webp?fit=1920%2C1080&ssl=1';
  const backgroundVideoUrl = 'https://videos.pexels.com/video-files/3063475/3063475-uhd_2560_1440_30fps.mp4';
  return (
    <>
    <div className="landing-page vid-overlay" style={{ height: "90vh", width: "100%"}}>
    <div className="bg-video vid-overlay">
    <video autoPlay muted loop style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}>
            <source src={backgroundVideoUrl} type="video/mp4" />
          </video>
        </div>

      {/* NavBar */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <IconLogo />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="http://localhost:5173/Main" className="nav-link" style={{ textDecoration: "none" }}>Get Started</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact Us
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container pt-5 pb-5 w-full h-full" >
        
        <h1 className="display-4 text-center mb-4" style={{ fontSize: "90px", color: "white", textAlign: "center", paddingTop: "30px" }}>Welcome to TKT Smart Traffic</h1>
      </div>
      

    </div>
    <div className="lead text-center pt-4 " style={{ color: "black", fontSize: "20px", backgroundColor: "#C4E1C5", width: "100vw", height: "10vh", fontFamily: "sans", fontWeight: "normal", paddingLeft: "5px" }}>
    <p style={{ textAlign: "center" }}>TKT Smart Traffic aims to bring its users the most efficient route to get to their destination on time, leveraging intelligent traffic management systems and real-time data analysis.</p>
  </div>
  </>
  )
}

export default SmartTraffic;
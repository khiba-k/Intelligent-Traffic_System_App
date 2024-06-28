import React from 'react';
import '../SmartTraffic.css';
import traffic from '../assets/background.jpeg'

const SmartTraffic = () => {
  return (
    <div className='parent'>
    <div className="smart-traffic-container">
      <h1>TKT Smart Traffic</h1>
      <p>Revolutionizing transportation with innovative technology for safer and more efficient commutes.</p>
      <div className="image-container">
        <img style={{width: "50%", height: "50%"}} src={"https://i0.wp.com/eastgate-software.com/wp-content/uploads/2023/12/its.webp?fit=1920%2C1080&ssl=1"} alt="Smart Traffic" />
      </div>
      <p className="footer-text">Travel well with less traffic, join us now!</p>
      <button className="get-started-btn"><a href='http://localhost:5174/'>Get Started</a></button>
    </div>
    </div>
  )
}

export default SmartTraffic;
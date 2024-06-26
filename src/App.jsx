import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyGoogleMap from './components/MyGoogleMap';
import Tabs from './components/Tabs';
import IconSaveButton from './components/IconSaveButton';
import axios from 'axios';
import trafficSpeedIcon from "./assets/speedometerIcon.png";

function App() {
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [locationName, setLocationName] = useState('');
  const [activeTab, setActiveTab] = useState("recents");
  const [isTabColumnVisible, setIsTabColumnVisible] = useState(false);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setIsTabColumnVisible(true);
    }
  }, []);

  const toggleTabColumn = () => {
    setIsTabColumnVisible(!isTabColumnVisible);
  };

  const handleCurrentLocationChange = (e) => {
    const value = e.target.value;
    setCurrentLocation(value);
    setLocationName(`${value} to ${destination}`);
  };

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    if (currentLocation) {
      setLocationName(`${currentLocation} to ${value}`);
    } else {
      setLocationName(value);
    }
  };

  const handleSaveLocation = async () => {
    try {
      const response = await axios.post('http://localhost:5000/recents/', { location: locationName });
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error saving the location!', error);
    }
  };

  return (
    <div className="bg full-height">
      <div className="container upper-row p-5">
        <div className="row">
          <div className="col pr-0">
            <div className="input-group mb-3">
              <button
                className="btn btn-primary d-lg-none"
                onClick={toggleTabColumn}
              >
                {isTabColumnVisible ? "Hide Tabs" : "Show Tabs"}
              </button>
              <input
                type="text"
                className="form-control"
                placeholder="Current Location"
                aria-label="Current Location"
                value={currentLocation}
                onChange={handleCurrentLocationChange}
                style={{ width: "191px" }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Destination"
                aria-label="Destination"
                value={destination}
                onChange={handleDestinationChange}
                style={{ width: "191px", marginLeft: "10px" }}
              />
              &nbsp;
              <button 
                style={{ border: "none", borderRadius: "100%" }}
                onClick={handleSaveLocation}
              >
                <IconSaveButton />
              </button>
            </div>
          </div>
          <div className="col">
            <h3>{locationName}</h3>
          </div>
        </div>
      </div>

      <div className="row lower-row">
        {(isTabColumnVisible || window.innerWidth >= 992) && (
          <div className="col-lg-2">
            <div className="row justify-content-center">
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>
        )}

        <div className="col-lg-8 pt-5">
          <div className="container-sm">
            <MyGoogleMap 
              currentLocation={currentLocation} 
              destination={destination} 
              setLocationName={setLocationName} 
              setRoutes={setRoutes}
            />
            <div className="pt-5">
              <div className="card w-100" style={{ width: "980px", border: "none" }}>
                <ul className="list-group" style={{ backgroundColor: "#D9D9D9" }}>
                  {routes.map((route, index) => (
                    <li key={index} className="list-group-item justify-content-center suggest-tab">
                      {route.summary} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <img src={trafficSpeedIcon} alt="Traffic Speed Icon" style={{ width: "20px", height: "20px" }} />
                      &nbsp;&nbsp;&nbsp;{route.legs[0].duration.text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {route.legs[0].distance.text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {new Date().toLocaleTimeString()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default App;


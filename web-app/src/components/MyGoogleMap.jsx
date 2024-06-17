import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';


const MyGoogleMap = ({ currentLocation, destination, setLocationName }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  // const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  // const [currentLocationName, setCurrentLocationName] = useState('');
  // const [searchedLocation, setSearchedLocation] = useState(null); // State to store searched location
  // const [error, setError] = useState(null);

  useEffect(() => {
    if (currentLocation && destination) {
      calculateDirections();
    }
  }, [currentLocation, destination]);

  const calculateDirections = () => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: currentLocation,
        destination: destination,
        travelMode: 'DRIVING'
      },
      (result, status) => {
        if (status === 'OK') {
          setLocationName(destination); // Update location name with destination
          setDirections(result);
        } else {
          console.error('Directions request failed due to ' + status);
          setLocationName('Error fetching directions');
        }
      }
    );
  };

  const [directions, setDirections] = React.useState(null);

  return (
    <div>
      {/* {error && <div>Error: {error}</div>} */}
      {/* <div>
        <h3>Current Location:</h3>
        <p>{currentLocationName}</p>
      </div> */}
      <LoadScript googleMapsApiKey="AIzaSyCfZK9eq1sBWYplK3kxdkE7BJ6JkXGsNWs">
        <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={12}
        center={{ lat: -34.397, lng: 150.644 }} // Default center if no route is displayed
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MyGoogleMap;


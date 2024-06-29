import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const MyGoogleMap = ({ currentLocation, destination, setLocationName }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

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
        travelMode: 'DRIVING',
        provideRouteAlternatives: true // Request multiple routes
      },
      (result, status) => {
        if (status === 'OK') {
          setDirections(result);
          setLocationName(`${currentLocation} to ${destination}`);
        } else {
          console.error('Directions request failed due to ' + status);
          setLocationName('Route Not Found');
        }
      }
    );
  };

  const [directions, setDirections] = useState(null);

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyCfZK9eq1sBWYplK3kxdkE7BJ6JkXGsNWs">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={{ lat: -29.311667, lng: 27.481389 }} // Default center if no route is displayed
        >
          {directions && directions.routes.map((route, index) => (
            <DirectionsRenderer
              key={index}
              directions={directions}
              routeIndex={index}
              options={{
                polylineOptions: {
                  strokeColor: index === 0 ? 'blue' : 'gray',
                },
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MyGoogleMap;

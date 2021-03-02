import { useState, useEffect } from'react';
import axios from'axios';

const getCoordinates = async (api) => {
  const response = await axios(api);
  return response
}

const useGoogleAddress = address => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBTjx3LD8E2yhPTv6fZgIkA9b44uhCC-X4`
  
  useEffect( async () => {
    const res = await getCoordinates(API);
    setMap(res.data.results[0].geometry.location);
  }, []);

  return map;
}

export default useGoogleAddress;

'use client';

import axios from 'axios';
import {useEffect} from 'react';

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://api.nationaltransport.ie/gtfsr/v2/Vehicles?format=json',
      {
        headers: {
          'Cache-Control': 'no-cache',
          'x-api-key': 'a2397074a3e042418c9d906ae737103d',
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default function Home() {
  useEffect(() => {
    fetchData();
  }, []);

  return <div>Homepage</div>;
}

import axios from 'axios';
import {NextResponse} from 'next/server';

export async function GET() {
  const vehiclesdata = await fetchVehiclesData();
  const tripData = await fetchTripData();
  // const gtfsrData = await fetchGtfsrData();

  const vehiclesValue = vehiclesdata.entity[0];
  const tripValue = tripData.entity[0];
  // const gtsfrValue = gtfsrData.entity[0];
  return NextResponse.json({
    vehiclesValue,
    tripValue,
  });
}

const fetchVehiclesData = async () => {
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
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from external API');
  }
};
const fetchTripData = async () => {
  try {
    const response = await axios.get(
      'https://api.nationaltransport.ie/gtfsr/v2/TripUpdates?format=json',
      {
        headers: {
          'Cache-Control': 'no-cache',
          'x-api-key': 'a2397074a3e042418c9d906ae737103d',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from external API');
  }
};
const fetchGtfsrData = async () => {
  try {
    const response = await axios.get(
      'https://api.nationaltransport.ie/gtfsr/v2/gtfsr?format=json',
      {
        headers: {
          'Cache-Control': 'no-cache',
          'x-api-key': 'a2397074a3e042418c9d906ae737103d',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from external API');
  }
};

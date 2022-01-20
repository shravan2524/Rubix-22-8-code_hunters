/* eslint-disable consistent-return */
import axios from 'axios';

const url= '';

export const getPlacesData = async (city, type, slatitude, slongitude) => {
  // console.log(city, typeof(type), typeof(longitude), typeof(latitude), 'api is clled')
  const options = {
    params: {
        latitude:   slatitude,
        longitude: slongitude,
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '523714b73emsh5324116eab36581p11b0a1jsn2495a53ef43e'
    }
  };
  try {
    const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`, options);

    console.log(response.data, "respnse");
    return response.data;

  } catch (error) {
    console.log(error);
  }
};


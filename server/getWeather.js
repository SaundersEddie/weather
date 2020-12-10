import axios from 'axios';

const RAPID_API_KEY = '8a6cd7a64emsh3dd70caa88d8d20p193484jsn53fd404332c';
const LOOKUP_ENTRY = 'Washington DC';
const LOOKUP_DAYS = 1;

let options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: LOOKUP_ENTRY, days: LOOKUP_DAYS},
    headers: {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data.forecast.forecastday[0]);
  }).catch(function (error) {
      console.error(error.response.statusText);
  });

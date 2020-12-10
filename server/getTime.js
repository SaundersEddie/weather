import axios from 'axios';

const RAPID_API_KEY = '8a6cd7a64emsh3dd70caa88d8d20p193484jsn53fd404332c5'
console.log ('getTime Axios imported');

  var options = {
    method: 'GET',
    url: 'https://world-clock.p.rapidapi.com/json/gmt/now',
    headers: {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': 'world-clock.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });
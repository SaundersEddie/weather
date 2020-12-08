// '8a6cd7a64emsh3dd70caa88d8d20p193484jsn53fd404332c5'

import axios from 'axios';
console.log ('Axios imported');

var options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: 'London', days: '3'},
    headers: {
      'x-rapidapi-key': '8a6cd7a64emsh3dd70caa88d8d20p193484jsn53fd404332c5',
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

  var options = {
    method: 'GET',
    url: 'https://world-clock.p.rapidapi.com/json/est/now',
    headers: {
      'x-rapidapi-key': '8a6cd7a64emsh3dd70caa88d8d20p193484jsn53fd404332c5',
      'x-rapidapi-host': 'world-clock.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });
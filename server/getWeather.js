import axios from 'axios';

console.log ('Axios initiated');

axios.get ( 'https://api.weatherapi.com/v1/forecast.json?key=<KEYGOESHERE>&q=London&days=1')
  .then (response => {
    console.log (response);
  })
  .catch (error => {
    console.log (error);
  });

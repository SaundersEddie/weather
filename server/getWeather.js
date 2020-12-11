import axios from 'axios';

const getWeather = () => {
  const my_API = '/weather';
  const response = await fetch (my_API);
  const json = await response.json();
  console.log (json);
}

export default = getWeather;


// console.log ('Axios initiated');

// axios.get ( 'https://api.weatherapi.com/v1/forecast.json?key=7362d96afd3146f8920132807201012&q=London&days=1')
//   .then (response => {
//     console.log (response);
//   })
//   .catch (error => {
//     console.log (error);
//   });

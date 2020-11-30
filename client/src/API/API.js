import axios from 'axios';

// Call our server side APIS

export default {
    getWeatherByZip: function (zipcode) {
        return axios.get('/weather/zipcode');
    }
}



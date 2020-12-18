import axios from 'axios';

// Call our server side APIS

export default {
    getWeather: function (p1) {
        console.log ("Passed Parameter: ", p1)
        axios.get(`/weather/${p1}`)
            .then (res => {
                return (res.data);
            })
            .catch ((error) => {
                console.log ("An Error Occurred: ", error);
            });
    },
    testGet: function() {
        return axios.get('/weather/27603');
    }
};

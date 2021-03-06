import axios from 'axios';
import React, { Component }  from 'react';
import { Card, CardColumns, Form } from 'react-bootstrap';

export default class weatherFrame extends Component {
    constructor(props) {
        super(props);
        this.onChangeOurSearch = this.onChangeOurSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            currentWeather: '',
            currentLocation: '',
            currentConditions: {},
            currentForecast: {
                day1: {},
                day2: {},
                day3: {},
            },
            ourSearch: '',
        };
    }

    componentDidMount() {
        this.setState({
            currentWeather: '',
            currentLocation: '',
            currentConditions: {},
            // currentAlerts: '',
            currentForecast: {
                day1: {},
                day2: {},
                day3: {},
            },
            ourSearch: '',
        });
    }

    onChangeOurSearch(e) {
        this.setState({
            ourSearch: e.target.value
            })
        };
    
    onSubmit(e) {
        e.preventDefault();
            axios.get(`/weather/${this.state.ourSearch}`)
                .then(res => {
                    this.setState({
                        currentWeather: res.data.current,
                        currentConditions: res.data.current.condition,
                        currentForecast: {
                            day1: res.data.forecast.forecastday[0],
                            day2: res.data.forecast.forecastday[1],
                            day3: res.data.forecast.forecastday[2],
                            },
                        currentLocation: res.data.location,
                    })
                })
                .catch((error) => {
                    console.log("Error in search pull: ", error.message)
                });
    }
    render() {
        return (
            <div className="container">
                <h1>Weather Search</h1>
                <Form onSubmit={this.onSubmit}>
                    <div className="FormGroup">
                        <label>Location:  </label>
                        <input
                            type="text"
                            className="form-Control"
                            value={this.state.ourSearch}
                            onChange={this.onChangeOurSearch}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Find Weather"
                            className="Button"
                        />
                    </div>
                </Form>
                <hr />
         
                <div className="container">
                    <br />
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Todays Weather in: {this.state.currentLocation.name}, {this.state.currentLocation.region} <br/>
                                This forecast was pulled at: {this.state.currentLocation.localtime} <br/>
                            </Card.Title>
                            <h2>Current Weather</h2>
                            <p>Current Conditions: {this.state.currentConditions.text}
                            <img src={this.state.currentConditions.icon} alt={this.state.currentConditions.text}/></p>
                            <p>Current Temperature: {this.state.currentWeather.temp_f} f</p> 
                            <p>Current Wind Speed: {this.state.currentWeather.wind_mph} mph</p> 
                            <p>Direction: {this.state.currentWeather.wind_dir} Feels Like: {this.state.currentWeather.feelslike_f} f</p>
                        </Card.Body>
                    </Card>
                    <hr />
                    <CardColumns>
                        <Card>
                            <Card.Body>
                                <Card.Title>{this.state.currentForecast.day1.date}</Card.Title>
                                <p>Min: {this.state.currentForecast.day1.day?.mintemp_f} f</p>
                                <p>Max: {this.state.currentForecast.day1.day?.maxtemp_f} f</p>
                                <p>Wind {this.state.currentForecast.day1.day?.maxwind_mph} mph </p>
                                <img src={this.state.currentForecast.day1.day?.condition.icon} alt={this.state.currentForecast.day1.day?.condition.text} /> <br/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title>{this.state.currentForecast.day2.date}</Card.Title>
                                <p>Min: {this.state.currentForecast.day2.day?.mintemp_f} f</p>
                                <p>Max: {this.state.currentForecast.day2.day?.maxtemp_f} f</p>
                                <p>Wind {this.state.currentForecast.day2.day?.maxwind_mph} mph </p>
                                <img src={this.state.currentForecast.day2.day?.condition.icon} alt={this.state.currentForecast.day2.day?.condition.text} /> <br/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title>{this.state.currentForecast.day3.date}</Card.Title>
                                <p>Min: {this.state.currentForecast.day3.day?.mintemp_f} f</p>
                                <p>Max: {this.state.currentForecast.day3.day?.maxtemp_f} f</p>
                                <p>Wind {this.state.currentForecast.day3.day?.maxwind_mph} mph </p>
                                <img src={this.state.currentForecast.day3.day?.condition.icon} alt={this.state.currentForecast.day3.day?.condition.text} /> <br/>
                            </Card.Body>
                        </Card> 
                    </CardColumns>
                    <br />
                </div>
            </div>
       )
   }
}
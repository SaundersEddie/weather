import axios from 'axios';
import React, { Component } from 'react';
import { Card, CardColumns, Form } from 'react-bootstrap';

export default class weatherFrame extends Component {
    constructor(props) {
        super(props);

        this.onChangeOurSearch = this.onChangeOurSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ourSearch: '',
            ourCity: '',
            ourRegion: '',
            ourLocalTime: '',
            ourAlert: '',
            ourAlertArea: '',
            ourAlertDesc: '',
            ourCurrentConditions: '',
            ourCurrentConditionsIcon: '',
            ourCurrentTemp: '',
            ourCurrentWindSpeed: '',
            ourCurrentWindDirection: '',
            ourCurrentFeelsLike: '',
            day1Date: '',
            day1MinTemp: '',
            day1MaxTemp: '',
            day1Wind: '',
            day1Condition: '',
            day1ConditionImage: '',
            day2Date: '',
            day2MinTemp: '',
            day2MaxTemp: '',
            day2Wind: '',
            day2Condition: '',
            day2ConditionImage: '',
            day3Date: '',
            day3MinTemp: '',
            day3MaxTemp: '',
            day3Wind: '',
            day3Condition: '',
            day3ConditionImage: '',
            thisTestResults: [],
        };
    }

    componentDidMount() {
        this.setState({
            ourSearch: '',
            ourCity: '',
            ourRegion: '',
            ourLocalTime: '',
            ourAlert: '',
            ourAlertArea: '',
            ourAlertDesc: '',
            ourCurrentConditions: '',
            ourCurrentConditionsIcon: '',
            ourCurrentTemp: '',
            ourCurrentWindSpeed: '',
            ourCurrentWindDirection: '',
            ourCurrentFeelsLike: '',
            day1Date: '',
            day1MinTemp: '',
            day1MaxTemp: '',
            day1Wind: '',
            day1Condition: '',
            day1ConditionImage: '',
            day2Date: '',
            day2MinTemp: '',
            day2MaxTemp: '',
            day2Wind: '',
            day2Condition: '',
            day2ConditionImage: '',
            day3Date: '',
            day3MinTemp: '',
            day3MaxTemp: '',
            day3Wind: '',
            day3Condition: '',
            day3ConditionImage: '',
            thisTestResults: [],
        });


        // Call our weather API here to default populate
        const defaultWeather = "38.89511 -77.03637";
        axios.get(`/weather/${defaultWeather}`)
            .then(res => {
                this.setState({ 
                    ourSearch: '',
                    ourCity: res.data.location.name,
                    ourRegion: res.data.location.region,
                    ourLocalTime: res.data.location.localtime,
                    // ourAlert: res.data.alert.headline,
                    // ourAlertArea: res.data.alert.areas,
                    // ourAlertDesc: res.data.alert.desc,
                    ourCurrentConditions: res.data.current.condition.text,
                    ourCurrentConditionsIcon: res.data.current.condition.icon,
                    ourCurrentTemp: res.data.current.temp_f,
                    ourCurrentWindSpeed: res.data.current.wind_mph,
                    ourCurrentWindDirection: res.data.current.wind_dir,
                    ourCurrentFeelsLike: res.data.current.feelslike_f,
                    day1Date: res.data.forecast.forecastday[0].date,
                    day1MinTemp: res.data.forecast.forecastday[0].day.mintemp_f,
                    day1MaxTemp: res.data.forecast.forecastday[0].day.maxtemp_f,
                    day1Wind: res.data.forecast.forecastday[0].day.maxwind_mph,
                    day1Condition: res.data.forecast.forecastday[0].day.condition.text,
                    day1ConditionImage: res.data.forecast.forecastday[0].day.condition.icon,
                    day2Date: res.data.forecast.forecastday[1].date,
                    day2MinTemp: res.data.forecast.forecastday[1].day.mintemp_f,
                    day2MaxTemp: res.data.forecast.forecastday[1].day.maxtemp_f,
                    day2Wind: res.data.forecast.forecastday[1].day.maxwind_mph,
                    day2Condition: res.data.forecast.forecastday[1].day.condition.text,
                    day2ConditionImage: res.data.forecast.forecastday[1].day.condition.icon,
                    day3Date: res.data.forecast.forecastday[2].date,
                    day3MinTemp: res.data.forecast.forecastday[2].day.mintemp_f,
                    day3MaxTemp: res.data.forecast.forecastday[2].day.maxtemp_f,
                    day3Wind: res.data.forecast.forecastday[2].day.maxwind_mph,
                    day3Condition: res.data.forecast.forecastday[2].day.condition.text,
                    day3ConditionImage: res.data.forecast.forecastday[2].day.condition.icon,
                })
            })
            .catch((error) => {
                console.log("Error in default pull: ", error.message)
            });
        }

    onChangeOurSearch(e) {
        this.setState({
            ourSearch: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log ("Submit Clicked");
        axios.get(`/weather/${this.state.ourSearch}`)
            .then(res => {
                console.log (res.data.forecast.forecastday[0].date);
                // console.log (res.data["alerts"]);
                let ourAlerts = Object.keys(res.data.alerts.alert).length;
                console.log ("our Alerts: ", ourAlerts);
                ourAlerts !== 0 ? console.log ("We have alerts") : console.log ("No alerts");
                // res.data.alert.headline ? console.log ('We have alert data') : console.log ("No Alerts");
    
                this.setState({ 
                    ourSearch: '',
                    ourCity: res.data.location.name,
                    ourRegion: res.data.location.region,
                    ourLocalTime: res.data.location.localtime,
                    // ourAlert: res.data.alert.headline,
                    // ourAlertArea: res.data.alert.areas,
                    // ourAlertDesc: res.data.alert.desc,
                    ourCurrentConditions: res.data.current.condition.text,
                    ourCurrentConditionsIcon: res.data.current.condition.icon,
                    ourCurrentTemp: res.data.current.temp_f,
                    ourCurrentWindSpeed: res.data.current.wind_mph,
                    ourCurrentWindDirection: res.data.current.wind_dir,
                    ourCurrentFeelsLike: res.data.current.feelslike_f,
                    day1Date: res.data.forecast.forecastday[0].date,
                    day1MinTemp: res.data.forecast.forecastday[0].day.mintemp_f,
                    day1MaxTemp: res.data.forecast.forecastday[0].day.maxtemp_f,
                    day1Wind: res.data.forecast.forecastday[0].day.maxwind_mph,
                    day1Condition: res.data.forecast.forecastday[0].day.condition.text,
                    day1ConditionImage: res.data.forecast.forecastday[0].day.condition.icon,
                    day2Date: res.data.forecast.forecastday[1].date,
                    day2MinTemp: res.data.forecast.forecastday[1].day.mintemp_f,
                    day2MaxTemp: res.data.forecast.forecastday[1].day.maxtemp_f,
                    day2Wind: res.data.forecast.forecastday[1].day.maxwind_mph,
                    day2Condition: res.data.forecast.forecastday[1].day.condition.text,
                    day2ConditionImage: res.data.forecast.forecastday[1].day.condition.icon,
                    day3Date: res.data.forecast.forecastday[2].date,
                    day3MinTemp: res.data.forecast.forecastday[2].day.mintemp_f,
                    day3MaxTemp: res.data.forecast.forecastday[2].day.maxtemp_f,
                    day3Wind: res.data.forecast.forecastday[2].day.maxwind_mph,
                    day3Condition: res.data.forecast.forecastday[2].day.condition.text,
                    day3ConditionImage: res.data.forecast.forecastday[2].day.condition.icon,
                })
            })
            .catch((error) => {
                console.log("Error in search pull: ", error.message)
            });
    }

    render() {
        return (
            <>
            <div className="container">
                {/* Weather Search */}
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
                {/* Our Weather display */}
                <div className="container">
                    <br />
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Todays Weather in: {this.state.ourCity}, {this.state.ourRegion} <br/>
                                This forecast was pulled at: {this.state.ourLocalTime} <br/>
                            </Card.Title>
                            <h2>Current Weather Alerts:</h2>
                            <h4>{this.state.ourAlert}<br/></h4>
                            <p>{this.state.ourAlertDesc}<br/></p>
                            <h4><p>Affected Areas: {this.state.ourAlertArea}</p></h4><br/>
                            <h2>Current Weather</h2>
                            <p>Current Conditions: {this.state.ourCurrentConditions}
                            <img src={this.state.ourCurrentConditionsIcon} alt={this.state.ourCurrentConditions}/></p>
                            <p>Current Temperature: {this.state.ourCurrentTemp}f Current Wind Speed: {this.state.ourCurrentWindSpeed}mph</p> 
                            <p>Direction: {this.state.ourCurrentWindDirection} Feels Like: {this.state.ourCurrentFeelsLike}f</p>
                        </Card.Body>
                    </Card>
                    <hr />


                    <CardColumns>
                        <Card>
                            <Card.Body>
                                <Card.Title>{this.state.day1Date}</Card.Title>
                                <p>Min: {this.state.day1MinTemp}f</p>
                                <p>Max: {this.state.day1MaxTemp}f</p>
                                <p>Wind {this.state.day1Wind}mph </p>
                                <img src={this.state.day1ConditionImage} alt={this.state.day1Condition} /> <br/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title>{this.state.day2Date}</Card.Title>
                                <p>Min: {this.state.day2MinTemp}f</p>
                                <p>Max: {this.state.day2MaxTemp}f</p>
                                <p>Wind {this.state.day2Wind}mph </p>
                                <img src={this.state.day2ConditionImage} alt={this.state.day2Condition} /> <br/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title>{this.state.day3Date}</Card.Title>
                                <p>Min: {this.state.day3MinTemp}f</p>
                                <p>Max: {this.state.day3MaxTemp}f</p>
                                <p>Wind {this.state.day3Wind}mph </p>
                                <img src={this.state.day3ConditionImage} alt={this.state.day3Condition} /> <br/>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                
                
                
                    <br />
                </div>
                </div>
                <hr />
            </>

        )
    }
}

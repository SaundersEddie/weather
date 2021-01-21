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
            currentAlerts: [],
            currentForecast: {
                day1: {},
                day2: {},
                day3: {},
            },
            ourSearch: '',
            testData: {},
        };
    }

    componentDidMount() {
        this.setState({
            currentWeather: '',
            currentLocation: '',
            currentConditions: {},
            currentAlerts: [],
            currentForecast: {
                day1: {},
                day2: {},
                day3: {},
            },
            ourSearch: '',
            testData: {},
        });

        // Call our weather API here to default populate
        const defaultWeather = "38.89511 -77.03637";
        axios.get(`/weather/${defaultWeather}`)
            .then(res => {
                // console.log (res.data);
               this.setState ({
                   testData: res.data,
                });
            //    console.log ("testData", this.state.testData)


                this.setState({
                    currentWeather: res.data.current,
                    currentAlerts: res.data.alerts,
                    currentConditions: res.data.current.condition,
                    currentForecast: {
                        day1: res.data.forecast.forecastday[0],
                        day2: res.data.forecast.forecastday[1],
                        day3: res.data.forecast.forecastday[2],
                    },
                    currentLocation: res.data.location,
                })

                // console.log ("currentForecast: ", this.state.currentForecast.forecastday[0].date);
                // console.log ("currentForecast: ", this.state.currentForecast.day1.day);
             
                // Find out if we have any weather alerts
                // let ourAlerts = Object.keys(res.data.alerts.alert).length;
                // if (ourAlerts !== 0) {
                //     // console.log ("We have alerts");
                //     this.setState ({
                //         ourAlerts: res.data.alerts,
                //         ourAlert: myAlerts.alert[0].headline,
                //         ourAlertArea: myAlerts.alert[0].areas,
                //         ourAlertDesc: myAlerts.alert[0].desc,
                //     })
                //         // console.log (this.state.ourAlerts.alert[0].headline);
                // } else {
                //     // console.log ("No Alerts")
                // };
            })
            .catch((error) => {
                console.log("Error in default pull: ", error.message)
            });
        }

    onChangeOurSearch(e) {
        this.setState({
            ourSearch: e.target.value
            })
        };
    
    onSubmit(e) {
        e.preventDefault();
        console.log ("Submit Clicked");
        this.setState ({
            ourAlerts: '',
            ourAlert: '',
            ourAlertArea: '',
            ourAlertDesc: ''
        });

         axios.get(`/weather/${this.state.ourSearch}`)
            .then(res => {
                
                this.setState({
                    currentAlerts: res.data.alerts,
                    currentConditions: res.data.current.condition,
                    currentForecast: res.data.forecast,
                    currentLocation: res.data.location,
                })

                // const testData = setState(res.data.forecast);
                // console.log ("our testData: ", testData);

                const { ...myAlerts} = res.data.alerts;

                let ourAlerts = Object.keys(res.data.alerts.alert).length;
                if (ourAlerts !== 0) {
                    this.setState ({
                        ourAlerts: res.data.alerts,
                        ourAlert: myAlerts.alert[0].headline,
                        ourAlertArea: myAlerts.alert[0].areas,
                        ourAlertDesc: myAlerts.alert[0].desc,
                    })
                        // console.log (this.state.ourAlerts.alert[0].headline);
                } else {
                    console.log ("No Alerts")
                };
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
                    {console.log ("inside render: ", this.state.testData)}
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Todays Weather in: {this.state.currentLocation.name}, {this.state.currentLocation.region} <br/>
                                This forecast was pulled at: {this.state.currentLocation.localtime} <br/>
                            </Card.Title>
                            <h2>Current Weather Alerts:</h2>
                            {/* <h4>{this.state.ourAlertHeadline}<br/></h4>
                            <p>{this.state.ourAlertDesc}<br/></p>
                            <h4><p>Affected Areas: {this.state.ourAlertArea}</p></h4><br/> */}
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
                                <p>Min: {this.state.currentForecast.day1.mintemp_f}f</p>
                                <p>Max: {this.state.currentForecast.day1.maxtemp_f}f</p>
                                <p>Wind {this.state.currentForecast.day1.maxwind_mph}mph </p>
                                {/* <img src={this.state.currentForecast.day1.condition.icon} alt={this.state.currentForecast.day1.condition.text} /> <br/> */}
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title>{this.state.currentForecast.day2.date}</Card.Title>
                                <p>Min: {this.state.currentForecast.day2.mintemp_f}f</p>
                                <p>Max: {this.state.currentForecast.day2.maxtemp_f}f</p>
                                <p>Wind {this.state.currentForecast.day2.maxwind_mph}mph </p>
                                {/* <img src={this.state.day2ConditionImage} alt={this.state.day2Condition} /> <br/> */}
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title>{this.state.currentForecast.day3.date}</Card.Title>
                                <p>Min: {this.state.currentForecast.day3.mintemp_f}f</p>
                                <p>Max: {this.state.currentForecast.day3.maxtemp_f}f</p>
                                <p>Wind {this.state.currentForecast.day3.maxwind_mph}mph </p>
                                {/* <img src={this.state.day2ConditionImage} alt={this.state.day2Condition} /> <br/> */}
                            </Card.Body>
                        </Card> 
                    </CardColumns>
                    <br />
                </div>
            </div>
       )
   }
}
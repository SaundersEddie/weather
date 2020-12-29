import axios from 'axios';
import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';

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
        };
    }

    componentDidMount() {
        this.setState({
            ourSearch: '',
            ourCity: '',
            ourRegion: '',
            ourLocalTime: '',
        });


        // Call our weather API here to default populate
        const defaultWeather = "38.89511 -77.03637";
        axios.get(`/weather/${defaultWeather}`)
            .then(res => {
                this.setState({ 
                    ourSearch: '',
                    ourCity: res.data.location.name,
                    ourRegion: res.data.location.region,
                    ourLocalTime: res.data.location.localtime
                })
            })
            .catch((error) => {
                console.log("Something went pearshaped")
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
                console.log (res.data);
                this.setState({ 
                    ourSearch: '',
                    ourCity: res.data.location.name,
                    ourRegion: res.data.location.region,
                    ourLocalTime: res.data.location.localtime
                })
            })
            .catch((error) => {
                console.log("Something went pearshaped")
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
                            <Card.Title>Todays Weather in: {this.state.ourCity}, {this.state.ourRegion} </Card.Title>
                        </Card.Body>
                    </Card>
                    <h1>Our Weather Results</h1>
                    <h2>Todays weather in {this.state.ourCity}, {this.state.ourRegion}</h2>
                    <h2>Local Date & Time: {this.state.ourLocalTime}</h2>
                    <br />
                </div>
                </div>
                <hr />
            </>

        )
    }
}

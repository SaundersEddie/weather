import axios from 'axios';
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class weatherFrame extends Component {
    constructor(props) {
        super(props);

        this.onChangeOurSearch = this.onChangeOurSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ourSearch: '',
            ourWeather: '',
            ourCity: '',
            ourRegion: '',
        };
    }

    componentDidMount() {
        this.setState({
            ourSearch: '',
            ourWeather: 'settingstate',
            ourCity: '',
            ourRegion: '',
        });


        // Call our weather API here to default populate
        const defaultWeather = "38.89511 -77.03637";
        // const defaultWeather = "66210";
        axios.get(`/weather/${defaultWeather}`)
            .then(res => {
                this.setState({ ourSearch: '' })
                this.setState({ ourWeather: res.data })
                this.setState({ ourCity: res.data.location.name })
                this.setState({ ourRegion: res.data.location.region })
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
                this.setState({ ourSearch: '' })
                this.setState({ ourWeather: res.data })
                console.log ("Our Submit Rest: ", res.data)
                console.log("ourWeather onSubmit:", res.data.location.name)
            })
            .catch((error) => {
                console.log("Something went pearshaped")
            });
    }

    render() {
        return (
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
                    <h1>Our Weather Results</h1>
                    {/* {console.log("our Weather: ", this.state.ourWeather)} */}
                    {/* {console.log("our Weather location: ", this.state.ourWeather.location)} */}
                    {/* {console.log("Oor Country: ", this.state.ourCountry)} */}
                    <h2>Todays weather in {this.state.ourCity}</h2>
                    <br />
                    <h2>{this.state.ourRegion}</h2>
                </div>
                <hr />
            </div>
        )
    }
}

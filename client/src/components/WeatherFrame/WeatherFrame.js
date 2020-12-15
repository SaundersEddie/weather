import axios from 'axios';
import React, { Component } from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';

const DisplayWeather = props => {
    return (
    <h1> Display out Weather here</h1>
    // <h1>{props.ourWeather.location.name}</h1>
    )
}
export default class weatherFrame extends Component {
    constructor (props) {
    super (props);

    this.onChangeOurSearch = this.onChangeOurSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        ourSearch: '',
        ourWeather: '',
    };
    }

    componentDidMount() {
        this.setState({
            ourSearch: '',
            ourWeather: 'settingstate',
        })

        // Call our weather API here to default populate
        // const defaultWeather = "38.89511 -77.03637"
        const defaultWeather = "66210";
        axios.get(`/weather/${defaultWeather}`)
            .then(res => { 
                this.setState({ourSearch: ''})
                this.setState ({ourWeather: res.data})
            })
            .catch ((error) => {
                console.log ("Something went pearshaped")
            });
        }

    onChangeOurSearch(e) {
        this.setState({
            ourSearch: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        axios.get(`/weather/${this.state.ourSearch}`)
        .then(res => { 
            console.log ('Our Search: ', this.state.ourSearch)
            this.setState({ourSearch: ''})
            this.setState ({ourWeather: res.data})
            console.log ("ourWeather onSubmit:", this.state.ourWeather)
        })
        .catch ((error) => {
            console.log ("Something went pearshaped")
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
                        className = "form-Control"
                        value={this.state.ourSearch}
                        onChange={this.onChangeOurSearch}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Find Weather"
                            className="Button"
                            />
                    </div>
            </Form>
            <hr/>
            {/* Our Weather display */}
            <div className="container">
                <br/>
                <h1>Our Weather Results</h1>
                {/* {this.DisplayWeather} */}
            </div>
            <hr/>
        </div>
        )
    }
}

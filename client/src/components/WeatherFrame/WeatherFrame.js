import axios from 'axios';
import React, { Component } from 'react';
import { Button, Form, FormGroup } from 'reactstrap';

export default class weatherFrame extends Component {
    constructor (props) {
    super (props);


    this.onChangeOurSearch = this.onChangeOurSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        ourSearch: ''
    }
}

    componentDidMount() {
        this.setState({
            ourSearch: ''
        })
    }

    onChangeOurSearch(e) {
        this.setState({
            ourSearch: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        axios.get(`/weather/${this.state.ourSearch}`)
            .then (res => console.log (res.data));
    }

    render() {
        return (
        <div>
            <h1>Weather Search</h1>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Location:  </label>
                    <input
                        type="text"
                        className = "form-Control"
                        value={this.state.ourSearch}
                        onChange={this.onChangeOurSearch}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Find Weather"
                            className="button"
                            />
                    </div>
            </form>
        </div>
        )
    }
}

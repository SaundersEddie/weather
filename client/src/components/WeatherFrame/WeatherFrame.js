// import e from 'express';
import React, { Component } from 'react';
import { Button, Form, FormGroup } from 'reactstrap';

const APITEST = async () => {
    // Pull weather test here
    const myQuery='27603,1'
    const my_API = `/weather/${myQuery}`;

    const response = await fetch (my_API);
    const json = await response.json();
    console.log (json);

    if (typeof json.alert.headline !== "undefined") {
        console.log (json.alert.headline)
    } else {
        console.log ("No Alerts");
    }

}

export default class weatherFrame extends Component {
    constructor (props) {
    super (props);

    this.onChangeOurSearch = this.onChangeOurSearch.bind(this);

    this.state = {
        ourSearch: ''
    }
}

    componentDidMount() {
        this.setState({
            ourSearch: ''
        })
    }

    onChanmgeOurSearch(e) {
        this.setState({
            ourSearch: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const thisSearch = {
            ourSearch: this.state.ourSearch
        }
    }

    // console.log ('thisSearch: ',thisSearch);

    render() {
        return (
        <div>
            <h1>Weather Search</h1>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Location: </label>
                    <input
                        type="text"
                        className = "formControl"
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


// const WeatherFrame = () => {
//     let test = APITEST();
//     console.log ('test: ', test );


//     return (
//         <>
//         <h1>Location Zip Code</h1>
//             <Form>
//                 <FormGroup>
//                     <input type="test" name="zipcode" id="zipcode" placeholder="20500" />
//                 </FormGroup>
//                 <Button>Submit</Button>
//             </Form>
//         </>
//     )
// }

// export default WeatherFrame; 
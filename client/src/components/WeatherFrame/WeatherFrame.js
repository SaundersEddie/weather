import React from 'react';
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
const WeatherFrame = () => {
    let test = APITEST();
    console.log ('test: ', test );


    return (
        <>
        <h1>Location Zip Code</h1>
            <Form>
                <FormGroup>
                    <input type="test" name="zipcode" id="zipcode" placeholder="20500" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </>
    )
}

export default WeatherFrame; 
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const WeatherFrame = () => {
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
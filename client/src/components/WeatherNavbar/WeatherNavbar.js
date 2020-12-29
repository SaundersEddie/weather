import React from 'react';
import {
    Navbar,
    Nav
  } from 'react-bootstrap';
import WeatherModal from '../WeatherModal/WeatherModal';

  function WeatherNavbar() {
    return (
      <div className="container">
        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand href="/">React Bootstrap Weather</Navbar.Brand>
          <WeatherModal />
          <Nav.Link href="https://github.com/SaundersEddie/weather" target="_blank">Github</Nav.Link>
          <Navbar.Text className="align-left">V1.0</Navbar.Text>
        </Navbar>
      </div>
    );
  }
  
  export default WeatherNavbar;

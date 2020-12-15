import React from 'react';
import {
    Navbar,
    Nav
  } from 'react-bootstrap';

  const WeatherNavbar = () => {
    return (
      <div className="container">
        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand href="/">React Bootstrap Weather</Navbar.Brand>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="http://www.github.com">Github</Nav.Link>
          <Navbar.Text className="align-left">V1.0</Navbar.Text>
        </Navbar>
      </div>
    );
  }
  
  export default WeatherNavbar;
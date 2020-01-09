import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import WidgetContainer from './WidgetContainer';


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/"> Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/referral">Referral</Nav.Link>
          <Nav.Link as={Link} to="/campaign">Campaign</Nav.Link>
          <Nav.Link as={Link} to="/vip">VIP</Nav.Link>
        </Nav>
      </Navbar>

      <WidgetContainer />
    </div>
  );
}

export default App;

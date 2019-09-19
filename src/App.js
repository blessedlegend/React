import React from 'react';
import {Container,Row,Col,Navbar,NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar dark color="primary">
          <Container>
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </Container>
        </Navbar>
      </div>
  );
}

export default App;

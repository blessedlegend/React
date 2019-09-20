import React,{Component} from 'react';
import {Container,Row,Col,Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/menucomponents';
import {DISHES} from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes : DISHES,
      naav :'Gunjan'
    };
  }
  render(){
  return (
    <div>
        <Navbar dark color="primary">
          <Container>
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </Container>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
  );
}
}     

export default App;

import React, { Component } from 'react';
import Menu from './menucomponents';
import DishDetail from './dishDetails'
import { DISHES } from '../shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClickProps={(dishId) => this.onDishSelect(dishId)}/> 
        <DishDetail details={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
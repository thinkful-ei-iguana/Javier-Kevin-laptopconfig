import React, { Component } from 'react';
import './App.css';
import LaptopParts from './Components/LaptopParts';
import Cart from './Components/Cart';
import MainForm from './Components/MainForm';
import CartForm from './Components/CartForm';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <MainForm 
              features = {this.props.features}
              state = {this.state.selected}
              currency = {this.USCurrencyFormat}
              updateFeature = {this.updateFeature}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <CartForm 
              features = {this.props.features}
              state = {this.state.selected}
              currency = {this.USCurrencyFormat}
              updateFeature = {this.updateFeature}
            />
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;

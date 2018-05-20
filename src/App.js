import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { requestFlights, tick } from './state/action/Actions.bs';
import { stateToJs } from './state/reducer/Reducer.bs';
import FlightsList from './components/FlightsList.bs';

const mapStateToProps = state => ({
  data: stateToJs(state).data,
  ticks: stateToJs(state).ticks
});

const mapDispatchToProps = { requestFlights, tick };

class App extends Component {
  componentDidMount() {
    this.props.requestFlights('PRG', 'PSD', 'today');
    setInterval(this.props.tick, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.props.ticks}</h1>
        </header>
        <p />
        <FlightsList data={this.props.data} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

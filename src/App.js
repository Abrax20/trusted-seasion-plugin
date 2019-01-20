import React, { Component } from 'react';

import Home from "./Container/Home/Home";
import OnBoarding from "./Container/OnBoarding/OnBoarding";

export default class App extends Component {
  state = {
    activePage: null
  };

  render() {
    switch (this.state.activePage) {
      case 'onBoarding':
        return <OnBoarding changePage={activePage => this.setState({ activePage })} />
      default:
          return <Home changePage={activePage => this.setState({ activePage })} />
    }
  }
};

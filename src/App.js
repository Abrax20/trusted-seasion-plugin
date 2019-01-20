import React, { Component } from 'react';

import Home from "./container/Home/Home";
import OnBoarding from "./container/OnBoarding/OnBoarding";
import AddService from "./container/AddService/AddService";

export default class App extends Component {
  state = {
    activePage: null
  };

  render() {
    switch (this.state.activePage) {
      case 'AddService':
        return <AddService changePage={activePage => this.setState({ activePage })} />;
      case 'onBoarding':
        return <OnBoarding changePage={activePage => this.setState({ activePage })} />;
      default:
          return <Home changePage={activePage => this.setState({ activePage })} />
    }
  }
};

import React, { Component } from 'react';

import Home from "./container/Home/Home";
import OnBoarding from "./container/OnBoarding/OnBoarding";
import AddService from "./container/AddService/AddService";
import {PRIVATE_KEY} from "./constans/LocalStorage";

export default class App extends Component {
  state = {
    private: null,
    activePage: null
  };

  componentDidMount () {
    const privateKey = localStorage.getItem(PRIVATE_KEY);

    if (!privateKey) {
      this.setState({ activePage: 'onBoarding' });
      return;
    }

    this.setState({ private: privateKey });
  }

  render() {
    switch (this.state.activePage) {
      case 'AddService':
        return <AddService private={this.state.private} changePage={activePage => this.setState({ activePage })} />;
      case 'onBoarding':
        return <OnBoarding changePage={activePage => this.setState({ activePage })} />;
      default:
          return <Home changePage={activePage => this.setState({ activePage })} />
    }
  }
};

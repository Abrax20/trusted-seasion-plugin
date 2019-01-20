import React, { Component } from 'react';

import {
  Container,
} from './styled.js';
import { PRIVATE_KEY } from "../../constans/LocalStorage";

import { Button } from 'semantic-ui-react';
import {shoutdown} from "../../api";

export default class Home extends Component {
  state = {
    public: '',
    private: '',
  };

  logout = () => {
    localStorage.removeItem(PRIVATE_KEY);
    this.props.changePage('onBoarding');
  };

  closeSignatures = () => {
    shoutdown();
  };


  render() {
    return (
      <Container>
        <Button onClick={() => this.props.changePage('AddService')}>
          Add new Service
        </Button>
        <Button onClick={this.logout}>
          Logout
        </Button>
      </Container>
    );
  }
}

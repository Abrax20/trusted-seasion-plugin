import React, { Component } from 'react';

import {
  Container,
} from './styled.js';
import { PRIVATE_KEY, PUBLIC_KEY } from "../../constans/LocalStorage";

import { Button } from 'semantic-ui-react';

export default class Home extends Component {
  state = {
    public: '',
    private: '',
  };

  logout = () => {
    localStorage.removeItem(PRIVATE_KEY);
    localStorage.removeItem(PRIVATE_KEY);
    this.props.changePage('onBoarding');
  };

  closeSignatures = () => {};

  componentDidMount () {
    const privateKey = localStorage.getItem(PRIVATE_KEY);
    const publicKey = localStorage.getItem(PUBLIC_KEY);

    if (!privateKey || !publicKey) {
      this.props.changePage('onBoarding');
      return;
    }

    this.setState({ public: publicKey, private: privateKey });
  }

  render() {
    return (
      <Container>
        <Button onClick={() => this.props.changePage('AddService')}>
          Add new Service
        </Button>
        <Button onClick={this.closeSignatures}>
          Close all open Signatures
        </Button>
        <Button onClick={this.logout}>
          Logout
        </Button>
      </Container>
    );
  }
}

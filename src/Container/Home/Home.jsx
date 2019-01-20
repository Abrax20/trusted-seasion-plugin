import React, { Component } from 'react';

import {
  Container,
} from './styled.js';
import {PRIVATE_KEY, PUBLIC_KEY} from "../../constans/LocalStorage";

import { Button } from 'semantic-ui-react';

export default class Home extends Component {
  state = {
    public: '',
    private: '',
  };

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
        <Button>
          Close all open Signatures
        </Button>
      </Container>
    );
  }
}

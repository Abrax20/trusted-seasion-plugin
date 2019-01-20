import React, { Component } from 'react';

import {
  Container
} from './styled';

import {
  Button,
  Input,
} from 'semantic-ui-react';
import { addService } from "../../api";

export default class AddService extends Component {
  state = {
    service: ''
  };

  addAUserService = () => {
    addService(this.state.service);
    this.props.changePage(null);
  };

  render() {
    return (
      <Container>
        <Input value={this.state.service} onChange={event => this.setState({ service: event.target.value })} />
        <Button onClick={() => this.props.changePage(null)}>Back</Button>
        <Button onClick={this.addAUserService}>Add</Button>
      </Container>
    );
  }
}

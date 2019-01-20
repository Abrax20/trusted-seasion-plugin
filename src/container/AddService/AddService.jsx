import React, { Component } from 'react';

import {
  Content,
  Container,
} from './styled';

import {
  Button,
  Input,
} from 'semantic-ui-react';
import { addService } from "../../api";

export default class AddService extends Component {
  state = {
    service: '',
    success: false
  };

  addAUserService = async () => {
    const data = await addService(this.state.service);
    if (!data) {
      return;
    }

    this.setState({ success: true });
  };

  render() {
    if (this.state.success) {
      return (
        <Container>
          <Content>
            You added the service successfully! :)
          </Content>
          <Button onClick={() => this.props.changePage(null)}>Finish</Button>
        </Container>
      );
    }

    return (
      <Container>
        <Content>
          <Input value={this.state.service} onChange={event => this.setState({ service: event.target.value })} />
        </Content>
        <Button onClick={() => this.props.changePage(null)}>Back</Button>
        <Button onClick={this.addAUserService}>Add</Button>
      </Container>
    );
  }
}

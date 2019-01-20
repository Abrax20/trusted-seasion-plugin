import React, { Component, Fragment } from 'react';

import {
  H1,
  Footer,
  Container,
  Description,
  LoaderWrapper
} from "./styled";

import { ClipLoader } from 'react-spinners';

import keypair from 'keypair';
import { register } from "../../api";
import { PRIVATE_KEY, PUBLIC_KEY } from "../../constans/LocalStorage";
import { Button, Form, TextArea } from 'semantic-ui-react';

export default class OnBoarding extends Component {
  state = {
    key: '',
    isLoading: false
  };

  download = (filename, text) => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };


  generate = () => {
    this.setState({ isLoading: true }, () => {
      setTimeout(async () => {
        const keyChain = keypair();
        this.setState({ public: keyChain.public, private: keyChain.private });
        localStorage.setItem(PRIVATE_KEY, keyChain.private);
        localStorage.setItem(PUBLIC_KEY, keyChain.public);
        this.download('keychain.txt', keyChain.public + "\n\n" + keyChain.private);
        await register(keyChain.public, keyChain.private);
        this.props.changePage(null);
        this.setState({ isLoading: false })
      }, 1000);
    });

  };

  save = () => {
    localStorage.setItem(PRIVATE_KEY, this.state.key);
    this.props.changePage(null);
  };


  render() {
    return (
      <Container>
        <H1>Welcome to Unicorn Number 9</H1>
        <Description> Welcome to Unicorn Number 9, so to setup your own personal Identity on our Blockchain or to link you
          used Identity to this Browser we need a private key.</Description>
        <Form>
          {
            this.state.isLoading
              ? <LoaderWrapper>
                  <ClipLoader
                    size={60}
                    color={'#123abc'}
                    sizeUnit={"px"}
                    loading={this.state.loading}/>
                </LoaderWrapper>
              : <Fragment>
                  <TextArea autoHeight placeholder='Public Key' value={this.state.private}
                        onChange={e => this.setState({ private: e.target.value })}/>
                  <TextArea autoHeight placeholder='Private Key' value={this.state.private}
                          onChange={e => this.setState({ private: e.target.value })}/>
                </Fragment>
          }

        </Form>
        <Footer>
          <Button onClick={this.generate}>Generate</Button>
          <Button onClick={this.save}>Save</Button>
        </Footer>
      </Container>
    );
  }
}

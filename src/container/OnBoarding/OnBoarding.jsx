import React, { Component, Fragment } from 'react';

import {
  H1,
  Footer,
  Container,
  Description,
  LoaderWrapper
} from "./styled";

import { ClipLoader } from 'react-spinners';

import { PRIVATE_KEY } from "../../constans/LocalStorage";
import { Button, Form, TextArea } from 'semantic-ui-react';

export default class OnBoarding extends Component {
  state = {
    key: '',
    isLoading: false
  };

  revisedRandId = () => {
    const length = 81;
    let retVal = '';
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ9";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
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
        //const keyChain = keypair();
        const key = this.revisedRandId();
        this.setState({ private: key });
        localStorage.setItem(PRIVATE_KEY, key);
        this.download('masterKey.txt', key);
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
                  <TextArea autoHeight placeholder='Master Key' value={this.state.private}
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

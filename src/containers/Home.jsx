import React, { Component } from 'react';
import { Container, Columns, Column, Box, Title, Notification } from 'bloomer';
import Footer from '../components/menu/Footer';
import Iteration from '../utils/Iteration';
import UploadFile from '../components/menu/UploadFile';
import Canvas from '../components/menu/Canvas';
import Info from '../components/menu/Info';
import { Button } from 'bloomer/lib/elements/Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iteration: new Iteration(),
      xmlFile: [],
      modalMesage: "No message"
   }
    this.handler = this.handler.bind(this);
  }

  handler(state) {
    this.setState(state);
  }


  render() {
    return (
      <Container>
        <Container style={{marginTop: 10, fontSize: 30}}>
          <Notification>Ant Colony Optimization</Notification>
        </Container>
        <Container>
          <Columns>
            <Column isSize="1/3">
              <Title>Menu</Title>
              <Box>
                <UploadFile handler={this.handler} xmlFile={this.state.xmlFile} />
              </Box>
              <Title>Data</Title>
              <Box>
                <Info xmlFile={this.state.xmlFile} />
                <Button isColor='info'>Start Iteration</Button>
              </Box>
            </Column>
            <Column isSize="2/3">
              <Title>Iteration</Title>
              <Box>
                <Canvas handler={this.handler} xmlFile={this.state.xmlFile} iteration={this.state.iteration}/>
              </Box>
            </Column>
          </Columns>
          <Footer></Footer>
        </Container>
      </Container>
    );
  }
}

export default Home;
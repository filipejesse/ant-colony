import React, { Component } from 'react';
import { Container, Columns, Column, Box, Title, Notification } from 'bloomer';
import Footer from '../components/menu/Footer';
import AntTypeInput from '../components/menu/AntTypeInput';
import Iteration from '../utils/Iteration';
// import Feromony from '../components/menu/Feromony';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iteration: new Iteration()
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
                <AntTypeInput handler={this.handler} iteration={this.state.iteration} />
              </Box>
            </Column>
            <Column isSize="2/3">
              <Title>Iteration</Title>
              <Box>
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
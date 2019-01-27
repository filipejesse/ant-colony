import React, { Component } from 'react';
import { Container, Columns, Column, Box, Title, Notification } from 'bloomer';
// import Pheromone from '../components/menu/Pheromone';
import Footer from '../components/menu/Footer';
// import AntTypeInput from '../components/menu/AntTypeInput';
import Iteration from '../utils/Iteration';
// import AddLimit from '../components/menu/AddLimit';
import Modal from '../components/modal';
import AntColony from '../utils/AntColony';
// import AddNode from '../components/menu/AddNode';
// import AddDemand from '../components/menu/AddDemand';
import UploadFile from '../components/menu/UploadFile';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iteration: new Iteration(),
      antColony: new AntColony(),
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
                <UploadFile handler={this.handler} iteration={this.state.iteration} />
                {/* <Pheromone /> */}
                {/* <AntTypeInput handler={this.handler} antColony={this.state.antColony} /> */}
                {/* <AddLimit handler={this.handler} antColony={this.state.antColony} /> */}
              </Box>
              <Box>
                {/* <AddNode handler={this.handler} iteration={this.state.iteration} /> */}
                {/* <AddDemand handler={this.handler} iteration={this.state.iteration} /> */}
              </Box>
            </Column>
            <Column isSize="2/3">
              <Title>Iteration</Title>
              <Box>
                <Modal />
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
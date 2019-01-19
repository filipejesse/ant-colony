import React, { Component } from 'react';
import { Control, Select, Field, Label } from 'bloomer';

class Pheromone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pheromone: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      pheromone: event.target.value
    });
  }

  render() {
    return (
      <div className="menu-row">
        <Field>
          <Control>
          <Label>Select:</Label>
            <Select>
              <option>Pheromone 1</option>
              <option>Pheromone 2</option>
            </Select>
          </Control>
        </Field>
      </div>
    );
  }
}

export default Pheromone;

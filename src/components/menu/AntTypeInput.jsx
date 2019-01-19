import React, { Component } from 'react';
import { Input, Button, Control, Field, Label } from 'bloomer';

class AntTypeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      antType: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      antType: event.target.value
    });
  }

  handleSubmit() {
    this.props.iteration.addAntType(this.state);
    this.props.handler({
      iteration: this.props.iteration
    });
    this.setState({
      antType: ''
    });
    console.log(this.props);
  }

  render() {
    return (
      <div className="menu-row">
        <Field>
          <Control>
          <Label>AntType:</Label>
            <Input type="text" placeholder='Ant Name' value={this.props.antType} onChange={this.handleChange}/>
            <Button isColor='info' onClick={this.handleSubmit} >Create</Button>
          </Control>
        </Field>
      </div>
    );
  }
}

export default AntTypeInput;

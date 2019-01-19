import React, { Component } from 'react';
import { Select, Button, Control, Field, Label } from 'bloomer';

class AddLimit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      antType: "",
      limit: "",
      desc: ""
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
    this.props.iteration.addLimit(
      this.state.antType,
      this.state.desc,
      this.state.limit
    );
    this.props.handler({
      iteration: this.props.iteration
    });
    this.setState({
      antType: '',
      limit: '',
      desc: ''
    });
    console.log(this.props);
  }

  render() {
    return (
      <div className="menu-row">
        <Field>
          <Control>
            <Label>AntType:</Label>
            <Select ></Select>
            <Button isColor='info' onClick={this.handleSubmit} >Create</Button>
          </Control>
        </Field>
      </div>
    );
  }
}

export default AddLimit;

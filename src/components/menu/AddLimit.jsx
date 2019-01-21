import React, { Component } from 'react';
import { Input, Button, Control, Field, Label } from 'bloomer';
import Select from './withSelect';

class AddLimit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      antType: "",
      limit: "",
      desc: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleChangeLimit = this.handleChangeLimit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      antType: event.target.value
    });
  }

  handleChangeDesc(event) {
    this.setState({
      desc: event.target.value
    });
  }

  handleChangeLimit(event) {
    this.setState({
      limit: event.target.value
    });
  }

  handleSubmit() {
    this.props.iteration.addLimit({
      antType: this.state.antType,
      desc: this.state.desc,
      limitation: this.state.limit
    });

    this.setState({
      antType: '',
      limit: '',
      desc: ''
    });

    this.props.handler({
      iteration: this.props.iteration
    });
    console.log(this.props);
  }

  render() {
    return (
      <div className="menu-row">
        <Field>
          <Control>
            <Label>Add Limit:</Label>
            <Select onChange={this.handleChange} value={this.state.antType} options={this.props.iteration} />
            <Input type="text" placeholder='Description' value={this.props.desc} onChange={this.handleChangeDesc} />
            <Input type="text" placeholder='Limitation' value={this.props.limit} onChange={this.handleChangeLimit} />
            <Button isColor='info' onClick={this.handleSubmit} >Create</Button>
          </Control>
        </Field>
      </div>
    );
  }
}

export default AddLimit;

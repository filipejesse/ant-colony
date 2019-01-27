import React, { Component } from 'react';
import { Button } from 'bloomer';
import FileBase64 from 'react-file-base64';
import { Base64 } from 'js-base64';
// var parser = require('xml2json');
// import { parser } from 'xml2json';

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    }

    // this.handleChange = this.handleChange.bind(this);
    this.getFile = this.getFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // this.props.xml2js.addFile(this.state);
    // this.props.handler({
    //   xml2js: this.props.xml2js
    // });
    console.log(this.state.file);
    this.setState({
      file: ''
    });
  }

  getFile(file) {
    let temp = file.base64.substring(21);
    temp = Base64.decode(temp);
    this.setState({file: temp});
    // temp = parser.toJson(temp);
    // console.log(temp);

  }

  render() {
    return (
      <div>
        <FileBase64
          multiple={false}
          onDone={this.getFile} />
        <Button isColor='info' onClick={this.handleSubmit} >Add</Button>
      </div>
    )
  }

}

export default UploadFile;

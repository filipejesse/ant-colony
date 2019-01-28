import React, { Component } from 'react';
import { Button } from 'bloomer';
import FileBase64 from 'react-file-base64';
import { Base64 } from 'js-base64';
var convert = require('xml-js');

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    }
    this.getFile = this.getFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // this.props.iteration.addFile(this.state);
    this.props.handler({
      xmlFile: this.state.file
    });

    this.setState({
      file: ''
    });
  }

  getFile(file) {
    let temp = file.base64.substring(21);
    temp = Base64.decode(temp);
    temp = convert.xml2json(temp, {compact: true, spaces: 4});
    this.setState({file: temp});
  }

  render() {
    return (
      <div>
        <FileBase64
          multiple={false}
          onDone={this.getFile} />
        <Button isColor='info' onClick={this.handleSubmit}>Add</Button>
      </div>
    )
  }

}

export default UploadFile;

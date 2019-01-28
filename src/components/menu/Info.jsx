import React, { Component } from 'react';

class Info extends Component {


  render() {

    let name, capacity, deposit;
    if (this.props.xmlFile.length > 0) {
      let x = JSON.parse(this.props.xmlFile);
      name = x.instance.info.name._text;
      deposit = x.instance.fleet.vehicle_profile.departure_node._text;
      capacity = x.instance.fleet.vehicle_profile.capacity._text;
    }
    return (
      <div>
        <p>Problem name: {name}</p>
        <p>Deposit node: {deposit}</p>
        <p>Capacity: {capacity}</p>
      </div>
    )
  }

}

export default Info;

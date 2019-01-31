import React, { Component } from 'react';
import { Paper, Set, Circle, Rect, Line } from 'react-raphael';
import { Button } from 'bloomer';

class Canvas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      antMemory: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.iteration.antWalk(this.props.xmlFile);
  }


  render() {
    let nodes = [];
    let deposit;
    let lines = [];
    if (this.props.xmlFile.length > 0) {
      let x = JSON.parse(this.props.xmlFile);
      deposit = x.instance.fleet.vehicle_profile.departure_node._text;
      nodes = x.instance.network.nodes.node;
    }

    return (<Paper width={800} height={700}>
      <Set>
        {
          nodes.map(function (ele, pos) {
            if (ele._attributes.id === deposit) {
              return (
                <Rect
                  key={pos}
                  x={(parseInt(ele.cx._text) * 7) + 10}
                  y={parseInt(ele.cy._text) * 7}
                  width={15}
                  height={15}
                  attr={{ "fill": "#10a54a", "stroke": "#f0c620" }}
                />
              )
            }
            else {
              return (
                <Circle
                  key={pos}
                  x={(parseInt(ele.cx._text) * 7) + 10}
                  y={parseInt(ele.cy._text) * 7}
                  r={3}
                  attr={{ "stroke": "#ff0000", "stroke-width": 5 }}
                />
              )
            }
          })
        }

        {
          nodes.map((ele, pos) => {
            return (nodes.forEach((end, i) => {
              lines.push(
                <Line key={pos + '-' + i}
                  x1={parseInt((ele.cx._text) * 7) + 10}
                  y1={parseInt(ele.cy._text) * 7}
                  x2={parseInt((end.cx._text) * 7) + 10}
                  y2={parseInt(end.cy._text) * 7}
                  attr={{ "stroke-width": 0.05 }}
                />)

            }))
          })
        }
        {/* {lines} */}
      </Set>
      <Button isColor='info' onClick={this.handleSubmit}>Start Iteration</Button>
    </Paper>)
  }
}
export default Canvas;
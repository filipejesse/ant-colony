import React, { Component } from 'react';
import { Paper, Set, Circle, Rect, Line } from 'react-raphael';

class Canvas extends Component {

  render() {
    let teste = [];
    let deposit;
    let lines = [];
    if (this.props.xmlFile.length > 0) {
      let x = JSON.parse(this.props.xmlFile);
      console.log(x.instance);
      deposit = x.instance.fleet.vehicle_profile.departure_node._text;
      teste = x.instance.network.nodes.node;
    }

    return (<Paper width={800} height={700}>
      <Set>
        {
          teste.map(function (ele, pos) {
            if (ele._attributes.id === deposit) {
              return (<Rect key={pos} x={parseInt(ele.cx._text) * 6} y={parseInt(ele.cy._text) * 6} width={15} height={15} attr={{ "fill": "#10a54a", "stroke": "#f0c620" }} />)
            }
            else {
              return (
                <Circle key={pos} x={parseInt(ele.cx._text) * 6} y={parseInt(ele.cy._text) * 6} r={3} attr={{ "stroke": "#ff0000", "stroke-width": 5 }} animate={ele.animate} />
              )
            }
          })
        }

        {
          teste.map((ele, pos) => {
            return (teste.forEach((end, i) => {
              lines.push(
                <Line key={pos + '-' + i}
                  x1={parseInt(ele.cx._text) * 6}
                  y1={parseInt(ele.cy._text) * 6}
                  x2={parseInt(end.cx._text) * 6}
                  y2={parseInt(end.cy._text) * 6}
                  attr={{ "stroke-width": 0.05 }}
                />)

            }))
          })
        }
        {lines}
      </Set>
    </Paper>)
  }
}
export default Canvas;
class Iteration {

  antWalk(xmlFile) {
    let unvisited = [];
    let deposit;
    let antMemory = [];
    let capacity;

    if (xmlFile.length > 0) {
      let x = JSON.parse(xmlFile);
      console.log(x.instance);
      deposit = x.instance.fleet.vehicle_profile.departure_node._text;
      unvisited = x.instance.network.nodes.node;
      capacity = x.instance.fleet.vehicle_profile.capacity._text;
    }

    antMemory.push(parseInt(deposit));
    unvisited.splice((antMemory[antMemory.length - 1]) - antMemory.length, 1);


    let pij = []; //qtd de feromoneos na aresta

    /* --------- Inicializar feromoneos ---------- */

    let tal = [unvisited.length];


    unvisited.forEach((node, i) => {
      tal[i] = new Array(unvisited);
    })

    tal.forEach((node, c) => {
      tal[c] = unvisited;
      tal[c].forEach((x, i) => {
        tal[c][i].tal = 1 / unvisited.length;
        if (c !== i) {
          tal[c][i].prob = this.calcProbability(tal, c, i, unvisited);
        }
      })
    })
  }

  calcProbability(tal, i, j, unvisited) {
    const alpha = 0.5;
    const beta = (1 - alpha);

    let prob1 = (Math.pow(tal[i][j].tal, alpha) * Math.pow(1 / this.calcDistance(unvisited, i, j), beta));

    let prob2 = 0;

    unvisited.forEach((elem, s) => {
      return (
        prob2 += Math.pow(tal[i][s].tal, alpha) * Math.pow(1 / unvisited.length, beta)
      )
    })

    let result = prob1 / prob2;

    return result;

  }

  calcDistance(unvisited, i, j) {
    let cat1;
    let cat2;
    let distance;

    let xi = parseInt(unvisited[i].cx._text);
    let xj = parseInt(unvisited[j].cx._text)
    let yi = parseInt(unvisited[i].cy._text)
    let yj = parseInt(unvisited[j].cy._text)
    if (xi > xj) {
      cat1 = xi - xj;
    }
    else {
      cat1 = xj - xi;
    }
    if (yi > yj) {
      cat2 = yi - yj
    }
    else {
      cat2 = yi - yj
    }

    distance = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2))

    return distance;
  }


  updatePheromone() {

  }
}
export default Iteration;
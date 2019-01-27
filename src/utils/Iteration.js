import Client from './Client';

class Iteration {

  addNode({ address }) {
    if (address !== "" && !this.hasOwnProperty(address)) {
      this[address] = Array(0);
    }
  }

  addDemand({address, desc, demand}){
    this[address].push(new Client(desc, demand));
  }



  searchRoute() {

  }

  updatePheromone() {

  }

  calcProbability() {

  }

  addAntToColony() {

  }
}
export default Iteration;
import Ant from './Ant';

class Iteration {

  addClient({ client }) {
    if (client !== "" && !this.hasOwnProperty(client)) {
      this[client] = Array(0);
    }
  }

  addAntType({ antType }) {
    if (antType !== "" && !this.hasOwnProperty(antType)) {
      this[antType] = Array(0);
    }
  }

  addLimit({antType, desc, limitation}) {
    this[antType].push(new Ant(desc, limitation));
  }

  searchRoute() {

  }

  updatePheromone() {


  }

  addAntToColony() {


  }
}
export default Iteration;
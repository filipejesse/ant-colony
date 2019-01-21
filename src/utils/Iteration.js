import Ant from './Ant';

class Iteration {


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

  calcProbability() {

  }

  addAntToColony() {

  }
}
export default Iteration;
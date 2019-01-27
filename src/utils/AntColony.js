import Limit from './Limit';

class AntColony {

  addAntType({ antType }) {
    if (antType !== "" && !this.hasOwnProperty(antType)) {
      this[antType] = Array(0);
    }
  }

  addLimit({ antType, desc, limitation }) {
    this[antType].push(new Limit(desc, limitation));
  }

}
export default AntColony;
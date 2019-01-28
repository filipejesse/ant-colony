class Iteration {

  addFile( {file} ) {
    console.log(file);
    if (file !== "" && !this.hasOwnProperty(file)){
      this[file] = [];
    }
  }

  addNode({ address }) {
    if (address !== "" && !this.hasOwnProperty(address)) {
      this[address] = Array(0);
    }
  }


}
export default Iteration;
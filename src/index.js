class Sorter {
  constructor(sorter) {
	  this.addElem = [];
	  this.comp = function(a,b){
		  return a - b;
	  };
  }

  add(element) {
    this.addElem.push(element);
  }

  at(index) {
    return this.addElem[index];
  }

  get length() {
    return this.addElem.length;
  }

  toArray() {
    return this.addElem;
  }

  sort(indices) {
	var sortElem = [];
	indices.sort(function(a,b){return a - b;});
	for (var i = 0; i < indices.length; i++){
		sortElem.push(this.addElem[indices[i]]);
	}	
	sortElem.sort(this.comp);
	for (var i = 0; i < indices.length; i++){
		this.addElem[indices[i]] = sortElem[i];
	}
	return this.addElem;
	
  }

  setComparator(compareFunction) {
  	this.comp = compareFunction;
  }
}

module.exports = Sorter;
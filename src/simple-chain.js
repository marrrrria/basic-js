const chainMaker = {
  mas: [],
  getLength() {
    return this.mas.length;
  },
  addLink(value) {
    if (value) {
      this.mas.push(`( ${value} )`);
    } else {
      this.mas.push(`()`);
    }

    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position)) {
      this.mas.splice(position, 1);
      return this;
    } else {
      throw "throw";
    }
  },
  reverseChain() {
    this.mas.reverse();
    return this;
  },
  finishChain() {
    return this.mas.join("~~");
  }
};

module.exports = chainMaker;

class SortedList {

    constructor(arr=[]) {
      this.items = arr;
      this.length = arr.length;
    }

    add(item) {
      this.items.push(item)
      this.length++;
      this.items.sort((a,b) => a-b)
    }

    get(pos) {
      if (pos > this.length-1) throw new Error("OutOfBounds");
      return this.items[pos];
    }
    max() {

      if (this.length == 0) throw new Error("EmptySortedList")
      return Math.max(...this.items)

    }
    min() {

      if (this.length == 0) throw new Error("EmptySortedList")
      return Math.min(...this.items)

    }
    average() {
      if (this.length == 0) throw new Error("EmptySortedList")
      return this.sum() / this.length;
    }
    sum() {
      if (this.length == 0) return 0;
      return this.items.reduce((a,b) => a+b)
    }
  };
  
  module.exports = SortedList;
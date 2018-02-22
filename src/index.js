class Sorter {
  constructor() {
    // your implementation
  }

  add(element) {
    let index=this.length;
    this[index]=element;
  }

  at(index) {
    return this[index];// your implementation
  }

  get length() {
      let index=0;
      while(this[index]!==undefined){
        index++;
    }
    return index;
  }

  toArray() {
      let Arr=[];
      let index=0;
      let length=this.length;
      while(index<length){
          Arr[index]=this[index];
          index++;
    }
    return Arr;
  }

sort(indices) {
      let swap=true;
      let length=indices.length;
      indices.sort();

      while(swap===true){
          swap=false;
          for(let i=0; i<length-1;i++){
          if(this.SortingAlgrothm(this[indices[i]],this[indices[i+1]])>0){
              let a=this[indices[i+1]];
              this[indices[i+1]]=this[indices[i]];
              this[indices[i]]=a;
              swap=true;
          }
          }
      }
    // your implementation
  }

  setComparator(compareFunction) {
    this.SortingAlgrothm=compareFunction;
  }

  SortingAlgrothm(a, b){
      return a-b;
  }
}

module.exports = Sorter;

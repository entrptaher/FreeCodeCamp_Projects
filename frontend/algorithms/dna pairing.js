function pairElement(str) {
  var basepair = []
  var array = str.split('')
  console.log(array)
  for(var i=0; i<array.length; i++){
    switch(array[i]){
      case "A":
        basepair.push(["A","T"]);
        break;
      case "T":
        basepair.push(["T","A"])
        break;
      case "C":
        basepair.push(["C","G"])
        break;
      case "G":
        basepair.push(["G","C"])
        break;
      default:
        console.log('None')
        break;
    }
  }
  return basepair;
}

console.log(pairElement("GCG"));
//console.log(pairElement("ATCGA"));

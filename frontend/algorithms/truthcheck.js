
function truthCheck(collection, pre) {
  // Is everyone being true?
  for(var i =0;i<collection.length;i++){
    if(!collection[i][pre]){
      return false;
    }
    else if(i == collection.length -1){
      return true;
    }
  }
}

console.log(truthCheck([{"single": "yes"}], "single"));
console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));

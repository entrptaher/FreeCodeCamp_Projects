// get permutations
// MUST REVISE LATER
/*
Learned from https://initjs.org/all-permutations-of-a-set-f1be174c79f8#.py855xoyj
*/
var permAlone = function(inputstring){
function permutation(string){
  var results = [];
  if(string.length==1){
    results.push(string);
    return results;
  }
  for(var i=0;i<string.length;i++){
    var firstcharacter = string[i];
    var leftcharacters = string.substring(0,i) + string.substring(i+1);
    var innerpermutation = permutation(leftcharacters);
    for(var j=0;j<innerpermutation.length; j++){
      results.push(firstcharacter + innerpermutation[j]);
    }
  }
  return results;
}
// check for duplicates
function checkduplicates(array){
  var count=0;
  for(var i=0; i< array.length; i++){
    if(!(/(\w)\1+/.test(array[i]))){
      count++;
    }
  }
  return count;
}
return checkduplicates(permutation(inputstring))
}
//console.log(permutation('a'));
//console.log(/(\w)\1+/.test('aab'));
console.log(permAlone('aab'));

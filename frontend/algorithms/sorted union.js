
function uniteUnique(arr) {
  sorted = []
  array = Array.from(arguments)

  function extractarray(array){
    if(Array.isArray(array)){
      for(var i=0; i<array.length; i++)
        {
          sorted.push(array[i])
        }
    }
    else if(typeof array !== "undefined"){
      sorted.push(array)
    }
  }

  function uniques(value, index, self){
    return self.indexOf(value) === index;
  }

  array.reduce(function(a,b){
    extractarray(a)
    extractarray(b)
  })
  return sorted.filter(uniques);
}
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))

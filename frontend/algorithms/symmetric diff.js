
function sym(args) {
  /*for(var i =0; i< arguments.length; i++){
    console.log(arguments[i])

  }*/
  var array = Array.from(arguments);
  var sum = array.reduce(function(a, b) {
    var newarr1 =[], newarr2 = [];
    newarr1 = a.filter(function(value){
      return b.indexOf(value) === -1;
    })
    newarr2 = b.filter(function(value){
      return a.indexOf(value) === -1;
    })
    return newarr1.concat(newarr2);
  }, []);
  return sum.filter(function(item, pos){
    return sum.indexOf(item) == pos;
  });
}
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
/*
function diffArray(arr1, arr2) {
  var newArr1 = [];
  var newArr2 = [];
  // Same, same; but different.

  // arr1 has but arr2 doesn't
  newArr1 = arr1.filter(function(value){
    return arr2.indexOf(value) === -1;
  });
  console.log(newArr1);

  // arr2 has but arr1 doesn't
  newArr2 = arr2.filter(function(value){
    return arr1.indexOf(value) === -1;
  });
  console.log(newArr2);

  return newArr1.concat(newArr2);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
*/

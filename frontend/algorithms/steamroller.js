
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flat = [];
  var getarrayelem = function(arr){
    if(Array.isArray(arr)){
      console.log(Array.isArray(arr))
      for(var i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
          getarrayelem(arr[i]);
        }
        else{
          flat.push(arr[i]);
        }
      }
    }
  };
  getarrayelem(arr);
  return flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

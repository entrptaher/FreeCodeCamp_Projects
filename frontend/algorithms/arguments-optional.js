
function addTogether(num1,num2) {
  function checkvalid(num){
    if(typeof num === "number"){
      return true;
    }
    else{
      return undefined;
    }
  }
  if(arguments.length == 2){
    if(checkvalid(num2)){
      return num1 + num2;
    }
    return undefined;
  }
  function argumentadd(num2){
    if(checkvalid(num2)){
      return num1+num2;
    }
    return undefined;
  }
  if(checkvalid(num1)){
    return argumentadd;
  }
}

console.log(addTogether("http://bit.ly/IqT6zt"))
console.log(addTogether(2,3))
console.log(addTogether(2, "3"))
console.log(addTogether(2)([3]))

function binaryAgent(str) {
  var array = str.split(' ')
  var letters = []
  // parseInt will read it clearly if type specified
  for(var i=0; i< array.length;i++){
    letters.push(String.fromCharCode(parseInt(array[i],2)))
  }
  console.log(letters.join(''))
  return letters.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

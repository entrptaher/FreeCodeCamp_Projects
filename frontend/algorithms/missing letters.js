function fearNotLetter(str) {
    var array = str.split('')
    for (var i = 0; i < array.length; i++) {
        if(typeof array[i+1] !== "undefined" && typeof array[i-1] !== "undefined"){
          if(array[i+1].charCodeAt(0) !== array[i].charCodeAt(0)+1){
            return (String.fromCharCode(array[i].charCodeAt(0)+1))
          }
        }
    }
    return undefined;
}
console.log(fearNotLetter("abcdefghjklmno"))
console.log(fearNotLetter("bcd"))

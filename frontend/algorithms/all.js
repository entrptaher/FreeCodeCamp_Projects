
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

function factorialize(num) {
  var result = 1;
  while(num >=1){
    result *= num;
    num--;
  }
  return result;
}

factorialize(5);


function palindrome(str) {
  // Good luck!
  var front = str.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
  
  if(front == front.split('').reverse().join(''))
  {
    console.log(front);
    return true;
  }
  else{
    return false;
  }
}



palindrome("_eye");


function findLongestWord(str) {
  var array = str.split(" ");
  var longest = 0;
  for(var x = 0; x < array.length; x++){
    if(array[x].length > longest){
      longest = array[x].length;
      console.log(longest);
    }
    console.log('shortest');
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


function titleCase(str) {
  var array = str.toLowerCase().split(" ");
  for (var x=0; x< array.length; x++){
    
    var wordarray = array[x].split();
    wordarray = array[x].charAt(0).toUpperCase() + array[x].slice(1);
    
    array[x] = wordarray;
  }
  
  return array.join(" ");
}

titleCase("I'm a little tea pot");


function largestOfFour(arr) {
  // You can do this!
  var largest = [];
  for(var x= 0;x<arr.length;x++){
    largest[x] = x;
    for(var y =0; y < arr[x].length; y++){
      if(arr[x][y]>largest[x]){
        largest[x] = arr[x][y];
      }
     
    } 
    
  }
  return (largest); 
  //return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return target == str.substring(str.length-target.length);
}

confirmEnding("Bastian", "n");


function repeatStringNumTimes(str, num) {
  // repeat after me
  var returnme ='';
  if(num>0){
    for(var x = 0; x<num; x++)
      {
        returnme += str;
      }
    return returnme;
  }
  return "";
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3);

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num <= 3){
    return str.slice(0,num)+"...";
  }
  else if(str.length<=num){
    return str;
  }
  else if(str.length>num){
    return str.slice(0,num-3)+"...";
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newarray = [];
  var temp = [];
  count = 0;
  
  for(var x=0;x<arr.length/size;x++){
     temp = arr.slice(count, count+size);
    newarray.push(temp); 
    count = count+size;
  }
    
  return newarray;

}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);


function slasher(arr, howMany) {
  // it doesn't always pay to be first
  //return arr.slice(-(arr.length-howMany));
  arr.splice(0,howMany);
  return arr;
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 4);
//slasher(["burgers", "fries", "shake"], 1);


function mutation(arr) {
  var firstarray = arr[0].toLowerCase().split('').sort();
  var lastarray = arr[1].toLowerCase().split('').sort();
  for(var x=0; x < lastarray.length; x++)
    {
      if (firstarray.indexOf(lastarray[x]) === -1)
      {
        return false;
      }
    }
  return true;
}

mutation(["hello", "hey"]);


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  noexist=[false, null, 0, "", undefined, NaN];
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);


function destroyer(arr) {
  // Remove all the values
  mainarray = Array.from(arguments)[0];
  destroyers = Array.from(arguments).slice(1);
  
  return mainarray.filter(function(element){
    return destroyers.indexOf(element) == -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  console.log(arr);
  for(var x =0; x <= arr.length; x++){
    if(num > arr[x] && num <= arr[x+1]){
      return x+1;
    }
    else if(num < arr[x]){
      return x;
    }
    else if(num == arr[x])
      {
        return x;
      }
    else if(x==arr.length){
      return x;
    }
  }
}

getIndexToIns([50, 20, 10, 40, 50], 35);
getIndexToIns([5, 3, 20, 3], 5);


function rot13(str) { // LBH QVQ VG!
  var final = "";
  
  for(var i=0;i<str.length;i++){
    var letter = str.charCodeAt(i); // Get the char number at specific point
    if(letter>=65 && letter <=90){ // Uppercase letter A = 65, Z=90
      final += String.fromCharCode((letter-65+13) % 26 +65); // The math to get the encrypted char, will write details later :/
    }
    else{
      final += str.charAt(i);
    }
  }
  console.log(final);
  return final;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


function sumAll(arr) {
  number =0;
  console.log(Math.max.apply(Math,arr));
  for (i=Math.min.apply(Math,arr); i <= Math.max.apply(Math,arr); i++){
    number += i;
  }
  console.log(number);
  return number;
}

sumAll([1, 4]);

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

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*
// couldn't figure out the solution doing this in .splice and indexOf and join method, need to investigate more

var number = String(1111); // stringify the whole thing
var result = 0; // to get leading 0
var numbers = [] // to store the numbers with zeros
var letters = ""; // to store the roman

// Extract Numbers to Decimals
for (var i=0; i < number.length; i++){
  var result = number[i]+"";
  
  for (var j=1; j < number.length-i; j++){
    result += 0;
  }
  numbers.push(result) 
}
*/
// Returns ROman to point
function convertToRoman(num){
   var letters = "";
   var roman = [['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]];
   if(num === 0){return "";}
   
   for(var i=0; i<roman.length; i++){
    while(num >= roman[i][1]){
     letters += roman[i][0];
     num -= roman[i][1];
    }
   }
  return letters;
}/*
returnroman(3999)
console.log(numbers)
console.log(letters)*/

convertToRoman(36);


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
    
for(var i=0;i<collection.length;i++){
  if(Object.keys(source).length > 1){
  for(x=Object.keys(source).length; x > 0; x--){
  if(collection[i].hasOwnProperty(Object.keys(source)[x])){
    if(source[Object.keys(source)[x]] == collection[i][Object.keys(source)[x]]){
      arr.push(collection[i]);
    }
  }
  }
  }
  else{
    for(x=0; x < Object.keys(source).length; x++){
  if(collection[i].hasOwnProperty(Object.keys(source)[x])){
    if(source[Object.keys(source)[x]] == collection[i][Object.keys(source)[x]]){
      arr.push(collection[i]);
    }
  }
  }
  }
  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })


function myReplace(str, before, after) {
  var arr = str.split(' ');

  //console.log(arr)
  for(var i=0; i<arr.length;i++){

    if(arr[i].toLowerCase()==before.toLowerCase()){
      if(arr[i][0] === arr[i][0].toUpperCase()){
        arr[i] = after.substr(0,1).toUpperCase()+after.substr(1);
      }
      else{
        arr[i] =  after;
        }
    }
  }
  return (arr.join(' '));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("His name is Tom", "Tom", "john")


function translatePigLatin(str) {
  var result ="";
  var consresult = [];
  
  if("aeiou".indexOf(str.substr(0,1)) != -1){
    result = str+'way';
  }
  else{
    str2 = str.split('');
    var pos1;
    for(var i=0; i<= str2.length; i++){
      //console.log(i)
      
      if("aeiou".indexOf(str2[i]) != -1){
          pos1 = (str2.indexOf(str2[i]))
          i = str2.length;
      }
      
      if(i === str.length){
        consresult.push(str.substr(pos1))
        consresult.push(str.substr(0,pos1))
        consresult.push('ay');
      }
    }
    result = consresult.join('')
    //result = (str.substr(1)+str.substr(0,1)+'ay');
  }
  
  console.log(result);
  return result;
}

translatePigLatin("glove");
translatePigLatin("algorithm");


var Person = function(firstAndLast) {
    var firstname,lastname;
    this.getFullName = function() {
        this.getFirstName = function() {
            return firstname;
        }
        this.getLastName = function() {
            return lastname;
        }
        return firstname + " " + lastname;
    }


    this.setFullName = function(firstAndLast) {
        this.setFirstName = function(first) {
            firstname = first;
        }
        this.setLastName = function(last) {
            lastname = last;
        }
        firstname = firstAndLast.split(' ')[0];
        lastname = firstAndLast.split(' ')[1];
    }


    this.setFullName(firstAndLast);
};

var bob = new Person('Bob Ross');
bob.getFullName();
console.log(bob.getFullName());
console.log(bob);


function telephoneCheck(str) {
  // Good luck!
  // WELL LETS TEST THE REGEXS
  var regex= /^([0-9]{10}|(1|)(\s|)((\([0-9]{3}\))|([0-9]{3}))(|\-|\s)[0-9]{3}(\s|\-|)[0-9]{4})$/;
  /*var notallower= /[A-Za-z]/;

  function checkfirstdigit(str){
    var count = str.replace(/[^0-9]+/g, '').length
    console.log(count);
    if(count == 11){
      if(str.split(' ')[0] == 1){
        return true;
      }
      else{
        return false;
      }
    }
    else if (count < 10 || count > 11 ) {
      return false
    }
    else {
      return true;
    }
  }

  function checknotallowed(str){
    if(notallower.test(str) || str.split('')[str.length-1] == ")" ){
      return false;
    }
    return true;
  }
  return (checkfirstdigit(str) && checknotallowed(str))*/
  return regex.test(str);
}

console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("55z5 555 5555"));


function sumFibs(num) {
  var original = num;
  var oddarray = [], a=1, b=0, temp, sum = 0;
  while(num > 0){
    
    temp = a;
    a = a+b;
    b = temp;
    
    if(b <= original){
      oddarray.push(b);
    }
    
    num--;
  }
  //console.log(oddarray)
  for(var i = 0; i < oddarray.length; i++){
    if(oddarray[i]%2 ==1){
      sum += oddarray[i];
    }
  }
  return sum;
}

console.log(sumFibs(10));
console.log(sumFibs(75024));
console.log(sumFibs(75025));


function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return (typeof bool === 'boolean');
}

booWho(null);


function convertHTML(str) {
  // &colon;&rpar;
  
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;').replace(/>/g,'&gt;').replace(/'/g,'&apos;');
}

convertHTML("Shindler's List")


function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });


function dropElements(arr, func) {
  // Drop them elements.
  while(typeof arr.slice(0,1).filter(func)[0] === 'undefined'){
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

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
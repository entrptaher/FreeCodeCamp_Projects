function sumPrimes(num) {

    var result = 0;

    function isprime(number) {

        //console.log(Math.floor(Math.sqrt(number)))

        var i = 1;
        while (i < number) {
            //(number === 2) || (number === 3)
            if ((number === 2) || (number === 3) || (number === 5) || (number === 7)) {
                return true
                break;
            } else if ((number % 2) === 0 || (number % 3) === 0 || (number % 5) === 0 || (number % 7) === 0) {
                return false
                break;
            } else {
                return true
                break;
            }
            i++;
        }
    }

    //console.log(Math.floor(Math.sqrt(num)))
    for (var j = 1; j < num; j++) {
        if (isprime(j)) {
            result += j;
        }
    }
    console.log(result);
    return result;
}

sumPrimes(10)
sumPrimes(977)

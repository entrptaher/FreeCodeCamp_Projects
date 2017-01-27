/*NOT COMPLETE*/
function smallestCommons(arr) {
    var stuck = false;
    var common;

    // Find the Range
    var range = []
    for (var i = 0; i <= arr[1] - arr[0]; i++) {
        range[i] = [i + 1];
    }

    // Loop through the range
    for (var i = 0; i < range.length; i++) {
        var j = 0;

        while (j < 100 && stuck == false) {
            var valuetoadd = range[i][j] + range[i][0];
            range[i].push(valuetoadd)

            common = range.reduce((p, c) => p.filter(e => c.includes(e)))
            if (common.length == 1) {
                return common;
                break;
            }

            j++;
        }
    }
    //console.log(range.reduce((p,c) => p.filter(e => c.includes(e))))
    return range;
}


console.log(smallestCommons([1, 5]));

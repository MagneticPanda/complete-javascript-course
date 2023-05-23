// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function (arr) {
    let displayString = '... '
    for (let i = 0; i < arr.length; i++) {
        displayString += `${arr[i]}ºC in ${i} days ... `
    }
    console.log(displayString);
}

let array1 = [17, 21, 23];
let array2 = [12, 5, -5, 0, 4];

printForecast(array1);
printForecast(array2);
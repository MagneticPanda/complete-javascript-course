'use strict';
///////////////////////////////////////
// Coding Challenge #1

// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// }
//
// // Can use 'let' if we're changing the values
// const dolphinAvg = calcAverage(85, 54, 41);
// const koalaAvg = calcAverage(23, 34, 27);
//
// // can assign this as a first-class citizen
// function checkWinner(dolphinAvg, koalaAvg) {
//     if (dolphinAvg > koalaAvg*2) {
//         console.log(`Dolphins win (${dolphinAvg} vs ${koalaAvg})`);
//     } else if (koalaAvg > dolphinAvg*2) {
//         console.log(`Koalas win (${koalaAvg} vs ${dolphinAvg})`)
//     } else {
//         console.log('No winner')
//     }
// }

///////////////////////////////////////
// Coding Challenge #2

const calcTip = billTotal => (billTotal >= 50 && billTotal <= 300) ? 0.15*billTotal: 0.2*billTotal;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total)
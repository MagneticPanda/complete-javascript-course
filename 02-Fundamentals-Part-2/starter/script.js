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

// const calcTip = billTotal => (billTotal >= 50 && billTotal <= 300) ? 0.15*billTotal: 0.2*billTotal;
//
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//
// console.log(bills, tips, total)

///////////////////////////////////////
// Coding Challenge #3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 79,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = (this.mass/this.height**2);
//         return this.bmi;
//     }
// }
//
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = (this.mass/this.height**2);
//         return this.bmi;
//     }
// }
//
// const markBMI = mark.calcBMI();
// const johnBMI = john.calcBMI();
//
// if (markBMI > johnBMI) {
//     console.log(`${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s BMI (${johnBMI})`)
// } else if (johnBMI > markBMI) {
//     console.log(`${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s BMI (${markBMI})`)
// } else {
//     console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${markBMI})`)
// }

///////////////////////////////////////
// Coding Challenge #4

const bills = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250];
const tips = [];
const totals = [];

const calcTip = billTotal => (billTotal >= 50 && billTotal <= 300) ? 0.15*billTotal: 0.2*billTotal;

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

const calcAverage = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum/array.length;
}

console.log(calcAverage(totals));
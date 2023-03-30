////////////////////////////////////
// Coding challenge #1
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
//
// const markBMI = markMass / (markHeight**2)
// const johnBMI = johnMass / (johnHeight**2)
//
// const markHigherBmi = markBMI > johnBMI

////////////////////////////////////
// Coding challenge #2
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
//
// const markBMI = markMass / (markHeight**2)
// const johnBMI = johnMass / (johnHeight**2)
//
// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI is ${markBMI - johnBMI} higher than John's`)
// } else if (johnBMI > markBMI) {
//     console.log(`John's BMI is ${johnBMI - markBMI} higher than Marks's`)
// } else {
//     console.log(`Mark and John have the same BMI of ${markBMI}`)
// }

////////////////////////////////////
// Coding Challenge #3

// const avgDolphins = (96 + 108 + 89) / 3
// const avgKoalas = (88 + 91 + 110) / 3
//
// if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins win the tournament`);
// } else if (avgKoalas > avgDolphins){
//     console.log('Koalas win the tournament');
// } else if (avgDolphins === avgKoalas) {
//     console.log('Draw');
// }
//
// /// Bonus 1
// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
//     console.log('Dolphins win');
// } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
//     console.log('Koalas win');
// } else if (avgKoalas === avgDolphins) {
//     console.log('Draw')
// } else if (avgKoalas < 100 && avgDolphins < 100) {
//     console.log('Nobody wins')
// }
//
// // Bonus 2
// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
//     console.log('Dolphins win');
// } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
//     console.log('Koalas win');
// } else if (avgKoalas === avgDolphins && (avgKoalas >= 100 && avgDolphins >= 100)) {
//     console.log('Draw');
// } else if (avgKoalas < 100 && avgDolphins < 100) {
//     console.log('Nobody wins');
// }

////////////////////////////////////
// Coding Challenge #4

const billValue = 430
const tip = (billValue >= 50 && billValue <=300) ? 0.15*billValue : 0.20*billValue;

console.log(`The bill was ${billValue}, the tip is ${tip} therefore the total is ${billValue + tip}`);
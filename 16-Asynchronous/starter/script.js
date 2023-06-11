'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// ===== XML HTTP REQUEST =====
// const getCountryInfo = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send(); // asynchronous so can't assign to variable yet
//
//     // registering a callback on the load event (when the data, response, arrives)
//     request.addEventListener('load', function() {
//         console.log(this.responseText); // `this` refers to `request` object
//         const [respData] = JSON.parse(this.responseText); // destructuring
//         console.log('JSON response data: ', respData)
//     })
// }
//
// getCountryInfo('portugal');
// getCountryInfo('spain');

// ===== Promises =====
// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log('Fetch API request', request);

// const getCountryData2 = function(country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then( (response) => {
//             console.log('Fulfilled Promise', response); // cannot read the response body; convert to json
//
//             // all fulfilled Response objects from fetch api have .json() available to read body
//             // .json() is an async operation, so it also returns a promise
//             return response.json();
//         })
//         .then( (data) => { // on the successful Response of converting body to JSON
//             console.log(data);
//             return 23;
//         })
//         .then( (data) => {
//             console.log(data)
//         })
// }

// getCountryData2('portugal');

// explicitly returning a value
// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) // this returns the json resposne
//     .then( (response) => {return 23}) // this promise is fulfilled with 23
//     .then( (data) => console.log(data)) // => 23
// }

// getCountryData('portugal');

// ===== BUILDING OUR OWN PROMISE =====
// const lotteryDraw = new Promise( (resolve, reject) => {
//     console.log('Lotto draw is happening!')
//     setTimeout( () => {
//         Math.random() >= 0.5 ? resolve('You Win! ') : reject(new Error('You wasted your money!'));
//     }, 900 );
//
// })

// lotteryDraw
// .then( response => console.log(response) )
// .catch( err => console.log(err) );

// ===== CODING CHALLENGE 1 =====
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      console.log('Response from server: ', response);
      if (!response.ok)
        throw new Error(`Problem with geocoding: ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log('Parsed body data: ', data);
      const { city = 'Johannesburg', region = 'South Africa' } = data;
      console.log(`You are in ${city}, ${region}`);
    })
    .catch(err => console.error(`[ERROR]: ${err}`));
};

whereAmI(52.508, 13.381);

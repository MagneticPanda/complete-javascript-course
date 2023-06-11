'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const car = {
  model: 'M3',
  owner: {
    name: 'Sashen',
    age: 22
  }
}

const { owner: {name: firstName, age} } = car;

console.log(firstName, age);

const carSpecs = function({ brand, model, wheels, owner: {name, age} }) {
  console.log(`${name} (${age}) has a ${brand} ${model} with ${wheels}`);
}

carSpecs({
  owner: {
    name: 'Sashen',
    age: 22
  },
  model: 'M3',
  brand: 'BMW',
  wheels: 4
})

const pizza = {
  name: 'Veg',
  hasToppings: true,
  toppigs: ['pineapple', 'mushroom']
}
const { name, ...toppingDetails } = pizza;
console.log(toppingDetails);

const pizzaIngredients = function(mainIngred, ...otherIngred) {
  console.log(mainIngred, otherIngred);
}

pizzaIngredients('mushroom', 'olives', 'pepper', 'spinach');

const vehicle = {
  registration: 'ND23093',
  owner: {
    name: 'Sashen',
    age: 22
  }
};
const myBike = { brand: 'Ducati', ...vehicle, wheels: 2 };
console.log(myBike);
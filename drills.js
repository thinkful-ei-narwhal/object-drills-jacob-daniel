'use strict';

// 1

const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return ((this.water / this.flour) * 100);
  }
};

console.log(`Flour: ${loaf.flour}, Water: ${loaf.water}`);

console.log(loaf.hydration());

// 2

const fiveProperties = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5
};

for (const key in fiveProperties) {
  console.log(`${key} ${fiveProperties[key]}`);
}

// 3

const foods = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(foods.meals[3]);

// 4


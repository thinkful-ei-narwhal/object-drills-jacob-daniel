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

// 4 & 5

const newArray = [
  {
    name: 'Beethoven',
    jobTitle: 'Boss'
  },
  
  {
    name: 'John',
    jobTitle: 'Manufacturer',
    boss: 'Beethoven'
  },

  {
    name: 'Linda',
    jobTitle: 'Painter',
    boss: 'Beethoven'
  },

  {
    name: 'Mike',
    jobTitle: 'Salesman',
    boss: 'Beethoven'
  }
];

for (let i = 0; i < newArray.length; i++) {
  const object = newArray[i];
  if (!('boss' in object)) {
    console.log(`${object.jobTitle} ${object.name} doesn't report to anybody.`);
  } else {
    console.log(`${object.jobTitle} ${object.name} reports to ${object.boss}`);
  }
}

// 6


function decodeWords(codedSentence) {
  const wordArray = codedSentence.split(' ');
  let decodedMessage = '';
  for (let i = 0; i < wordArray.length; i++) {
    decodedMessage += decode(wordArray[i]);
  }
  return decodedMessage;
}

function decode(word) {
  const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
  };

  for (const key in cipher) {
    if (key === word[0]) {
      return word[(cipher[key]) - 1];
    } 
  }
  return ' ';
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));

// 7


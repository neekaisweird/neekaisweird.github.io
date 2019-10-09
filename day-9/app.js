const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello world');

// Interpolated
console.log('hello I am a %s string!', 'loopy');

// Styled
console.log('%c I am some fab text', 'color: teal; font-size: 20px');

// warning!
console.warn('UH OH');

// Error :|
console.error('GO BACK');

// Info
console.info('hippos are awesome');

// Testing
console.assert(1 === 0, 'that is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.dir(dogs);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('dog');
console.count('dog');
console.count('dog');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/neekaisweird')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);

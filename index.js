// Assigning New Variable Names to Object Keys

var object = {
  name: 'elvis',
  title: 'hip swinger'
}

//Solution
var { name: person, title: job } = object;

// Variable Swapping: Array
var items = ['apple', 'banana', 'pear']

//Solution
var [a, b] = items
[a,b] = [b,a]

//Object Matching
var object = {
  user: 'brenna',
  id: 1,
  date: 'monday',
  module: 3
}
var { user, id, date, module } = object;

//Object Matching: Deep Matching
var object = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
}

var {user, address, address: {city, state}, id} = object;

//Parameter Matching

//Array
var params = (array) => {
  var [a,b] = array;
  console.log(`${a}, ${b}`);
}

//Object w/ Keys
var params = (keys) => {
  var { greeting, name } = keys;
  console.log(`${greeting}, ${name}`)
}

//Object with key value pairs
{greeting: 'hello', name: 'taylor'}

var params = (obj) => {
  var { greeting, name } = obj;
  console.log(`${greeting}, ${name}`)
}

//Variables and Rest
var fruits = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza']

var [thing1, thing2, ...others] = fruits

//Object Variable Assignment Without Declaration
let name, title
// console.log(name) => 'elvis'
// console.log(title) => 'hip swinger'
({name, title} = {name: 'elvis', title: 'hip swinger'})


//Array Variable Assignment
let firstName, lastName, city, state;
[firstName, lastName, city, state] = ['marilyn', 'monroe', 'new york', 'new york']

//Default Values: Array
let firstName, lastName, city, state;
[firstName='marilyn', lastName='monroe', city='new york', state='new york']

// Default Values: Object

var {firstName='marilyn', lastName, city='new york', state} = {firstName: 'marilyn', lastName: 'monroe', city: 'new york', state: 'new york'}

//Parsing An Array From A Function Return
var x = () => {
  return ['hello', 'world']
}
[greeting, target] = x();

//Object Destructuring

var object = {name: 'elvis', title: 'hip swinger'};
var {name, title} = object;

//For Of Iteration
var singers = [
  {
    artist: 'Elvis',
    albums: {
      album1: 'this first title for Elvis',
      album2: 'another second title for Elvis',
      album3: 'third title for Elvis'
    }
  },
  {
    artist: 'Cher',
    albums: {
      album1: 'this first title for Cher',
      album2: 'another second title for Cher',
      album3: 'third title for Cher'
    }
  }
];

for (var {artist: a, albums: {album3: b} } of singers) {
  console.log(`Artist: ${a}, Album3: ${b}`)
}

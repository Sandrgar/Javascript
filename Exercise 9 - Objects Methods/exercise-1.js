const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

for (let key in person) {
  console.log(key, person[key]);
}
console.log(Object.keys(person));

// Print values of person using Object.keys


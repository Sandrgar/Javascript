const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon"

console.log(person1);
console.log(person2);

// Modificando l'oggetto person2, viene modificato anche l'oggetto person1 perchè entrambi hanno gli stessi valori dovuti alla dichiarazione di const person2 = person1;

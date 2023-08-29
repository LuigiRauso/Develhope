// function isAdult(person) {
//   return person.age >= 18;
// }

// const person = {
//   id: 1,
//   firstName: "Mario",
//   lastName: "Rossi",
//   age: 25,
// };

// console.log(isAdult(person));

// Soluzione 1:
function isAdult(person) {
  const { age } = person;
  return age >= 18;
}

const person1 = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

console.log(isAdult(person1));

// Soluzione 2:
function isAdult({ age }) {
  return age >= 18;
}

const person2 = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

console.log(isAdult(person2));

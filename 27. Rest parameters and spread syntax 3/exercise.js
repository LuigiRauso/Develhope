const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age,
// };

// console.log(id, personInfo);

// Soluzione

const { id, ...otherPersonInfo } = person;

console.log(id, otherPersonInfo);

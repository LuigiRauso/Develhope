const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys
Object.keys(person).forEach((key) => {
  console.log(key + ": " + person[key]); // sarebbe come fare -> person[Object.keys(person)[..]]);
});

// EXTRA:
console.log("\n");
// Per stampare  le chiavi dell'oggetto "person", possiamo utilizzare "Object.keys"
console.log(Object.keys(person));

// Per stampare i valori dell'oggetto "person", possiamo utilizzare "Object.values"
console.log(Object.values(person));

// Per stampare sia le chiavi che i valori dell'oggetto "person", possiamo utilizzare "Object.entries":
console.log(Object.entries(person));

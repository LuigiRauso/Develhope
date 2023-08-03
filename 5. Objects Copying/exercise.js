const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

/* SPIEGAZIONE:
La traccia ci chiedere di spiegare il motivo per quale quando andiamo a modificare l'oggetto "person2", si modifica anche l'oggetto "person1"

L'oggetto "person2" non è una copia dell'oggetto "person1", ma piuttosto un riferimento allo stesso oggetto in memoria.
Quindi, quando si assegna "person1" a "person2", si sta semplicemente creando un nuovo riferimento per l'oggetto "person1".
Questo procedimento viene chiamato "copy by reference". */

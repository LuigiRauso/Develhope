class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Soluzione 1:
  static fromJson(json) {
    const info = JSON.parse(json);
    return new Person(...Object.values(info));
  }

  // Soluzione 2:
  // static fromJson(json) {
  //   const info = JSON.parse(json);
  //   return new Person(info.id, info.firstName, info.lastName, info.age);
  // }

  toJson() {
    return JSON.stringify(this);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);

function employees(arr) {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  let personArr = [];

  for (const el of arr) {
    let name = el.split(", ");
    personArr.push(new Person(name));
  }

  for (const person of personArr) {
    let employeeName = person.name;
    let personalNum = employeeName.toString().length;

    console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
  }
}

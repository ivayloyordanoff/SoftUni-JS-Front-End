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
    for (const key in person) {
      let employeeName = person[key];
      let personalNum = employeeName.toString().length;

      console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    }
  }
}

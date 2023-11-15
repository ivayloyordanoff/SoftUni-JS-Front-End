function solve(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let cats = [];

  for (const el of arr) {
    let [name, age] = el.split(" ");
    cats.push(new Cat(name, age));
  }

  for (const cat of cats) {
    cat.meow();
  }
}

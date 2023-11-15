function solve(arr) {
  let phonebook = {};

  for (const el of arr) {
    let [name, number] = el.split(" ");
    phonebook[name] = number;
  }

  for (const key in phonebook) {
    console.log(`${key} -> ${phonebook[key]}`);
  }
}

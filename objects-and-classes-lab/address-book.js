function solve(arr) {
  let addressBook = {};

  for (const el of arr) {
    let [name, address] = el.split(":");
    addressBook[name] = address;
  }

  let sorted = Object.entries(addressBook);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [key, value] of sorted) {
    console.log(`${key} -> ${value}`);
  }
}

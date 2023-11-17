function extractOddOccurrences(sentence) {
  let elements = sentence.toLowerCase().split(" ");
  let map = new Map();

  for (const element of elements) {
    if (map.has(element)) {
      let oldValue = map.get(element);
      let newValue = oldValue + 1;
      map.set(element, newValue);
    } else {
      map.set(element, 1);
    }
  }

  let result = [];

  for (const [key, value] of map) {
    if (value % 2 !== 0) {
      result.push(key);
    }
  }

  console.log(result.join(" "));
}

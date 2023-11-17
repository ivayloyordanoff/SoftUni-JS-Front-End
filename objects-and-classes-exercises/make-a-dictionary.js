function makeDictionary(arr) {
  let dictionary = {};

  for (const data of arr) {
    let obj = JSON.parse(data);

    for (const [term, definition] of Object.entries(obj)) {
      dictionary[term] = definition;
    }
  }

  let sortedTerms = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));

  for (const term of sortedTerms) {
    console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
  }
}

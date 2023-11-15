function objConverter(json) {
  let person = JSON.parse(json);

  for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }
}

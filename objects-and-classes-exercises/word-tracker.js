function wordTracker(arr) {
  const words = arr.shift().split(" ");
  let wordsObj = {};

  for (const word of words) {
    wordsObj[word] = 0;

    for (const string of arr) {
      if (string === word) {
        wordsObj[word]++;
      }
    }
  }

  let sortedWords = Object.entries(wordsObj);
  sortedWords = sortedWords.sort((a, b) => b[1] - a[1]);

  for (const word of sortedWords) {
    console.log(word.join(" - "));
  }
}

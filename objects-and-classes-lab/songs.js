function solve(arr) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];
  let numberOfSongs = arr.shift();
  let typeSong = arr.pop();

  for (const el of arr) {
    let [type, name, time] = el.split("_");
    songs.push(new Song(type, name, time));
  }

  if (typeSong === "all") {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filtered = songs.filter((i) => i.type === typeSong);
    filtered.forEach((i) => console.log(i.name));
  }
}

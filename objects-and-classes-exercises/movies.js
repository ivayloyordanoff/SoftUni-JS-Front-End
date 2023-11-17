function movies(arr) {
  let movies = [];

  for (const line of arr) {
    if (line.includes("addMovie")) {
      let movieName = line.split("addMovie ")[1];
      movies.push({ name: movieName });
    } else if (line.includes("directedBy")) {
      let [movieName, director] = line.split(" directedBy ");
      let searchedMovie = movies.find((movie) => movie.name === movieName);
      if (searchedMovie) {
        searchedMovie["director"] = director;
      }
    } else if (line.includes("onDate")) {
      let [movieName, date] = line.split(" onDate ");
      let searchedMovie = movies.find((movie) => movie.name === movieName);
      if (searchedMovie) {
        searchedMovie["date"] = date;
      }
    }
  }

  for (const movie of movies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}

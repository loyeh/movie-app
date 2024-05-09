const search = document.querySelector(".search");
const container = document.querySelector(".container");

search.focus();

function show(arr) {
  arr.forEach((result) => {
    const movie = document.createElement("div");
    const photo = document.createElement("div");
    const title = document.createElement("div");
    const rating = document.createElement("div");
    const overlay = document.createElement("div");
    const image = document.createElement("img");

    if (result.vote_average > 7) {
      rating.classList.add("green");
    } else if (result.vote_average < 7 && result.vote_average > 5) {
      rating.classList.add("orange");
    } else {
      rating.classList.add("red");
    }
    image.src = `https://image.tmdb.org/t/p/original${result.backdrop_path}`;
    title.textContent = result.title;
    rating.textContent = result.vote_average;
    overlay.textContent = result.overview;

    movie.classList.add("movie");
    photo.classList.add("photo");
    title.classList.add("title");
    rating.classList.add("rating");
    overlay.classList.add("overlay");

    movie.append(photo, title, rating, overlay);
    container.appendChild(movie);
  });
}

fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=5a620c3b38ab8a1af9a19b213eb0e548"
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.results);
    show(response.results);
  })
  .catch((err) => console.error(err));

search.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    if (!search.value) {
      container.innerHTML = "";
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=5a620c3b38ab8a1af9a19b213eb0e548"
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response.results);
          show(response.results);
        })
        .catch((err) => console.error(err));
    } else {
      let serachText = search.value;
      container.innerHTML = "";
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${serachText}&api_key=5a620c3b38ab8a1af9a19b213eb0e548`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response.results);
          show(response.results);
        })
        .catch((err) => console.error(err));
    }
  }
});

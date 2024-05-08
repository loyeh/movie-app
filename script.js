const search = document.querySelector(".search");
const container = document.querySelector(".container");

const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTM5YWI2ZTdiNTFiOTBiZjQzYzU1YTM5ZWQ1ZGRlZSIsInN1YiI6IjY2M2I5NTAxYWYxMjBjMjAwYTNjMWZiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oa_-7qqVI_62p5OWy4126p6EAmb4cXGlfj7N3rwH7OE",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=5a620c3b38ab8a1af9a19b213eb0e548"
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.results);
    response.results.forEach((result) => {
      const movie = document.createElement("div");
      const photo = document.createElement("div");
      const title = document.createElement("div");
      const rating = document.createElement("div");
      const overlay = document.createElement("div");
      const image = document.createElement("img");

      image.src = `https://api.themoviedb.org/3${result.backdrop_path}`;
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
  })
  .catch((err) => console.error(err));

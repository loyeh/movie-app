const search=document.querySelector('.search');
const container=document.querySelector('.container');


const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTM5YWI2ZTdiNTFiOTBiZjQzYzU1YTM5ZWQ1ZGRlZSIsInN1YiI6IjY2M2I5NTAxYWYxMjBjMjAwYTNjMWZiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oa_-7qqVI_62p5OWy4126p6EAmb4cXGlfj7N3rwH7OE'
  }
};

fetch('https://api.themoviedb.org/3/movie/157336?api_key=5a620c3b38ab8a1af9a19b213eb0e548')
  .then(response => response.json())
  .then(response => console.log(response,response.title))
  .catch(err => console.error(err));
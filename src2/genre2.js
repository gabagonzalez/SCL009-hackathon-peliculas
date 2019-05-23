/* Manejo de data */
// Mi Data, parametro con el que traigo la info

let arrGenre= ["It","Mama","Annabelle","The Conjuring","The Nun","Halloween","Alien","Insidious"];

const container = document.getElementById("movie");//para visualizar en container
let randomNumb = Math.floor((Math.random() * arrGenre.length - 1) + 1);//numero aleatorio segun elementos del array
let randomMov = arrGenre[randomNumb];//el número representa una pelicula
console.log(randomMov);

function getMovie() {
  let urlBuscar = ('https://www.omdbapi.com/?t=' + encodeURI(randomMov) + '&apikey=271279d6');
  axios.get(urlBuscar)
    .then((response) => {
      let movie = response.data;
      console.log(movie);
      let output =
      container.innerHTML += `
	  	        <div class="row">
	  	           <div class="col-md-4"> 
	  	              <img src="${movie.Poster}" class="thumbnail">
	  	           </div>
	  	           <div class="col-md-8">
                   <h2>${movie.Title}</h2>
                   <h3>Sinopsis</h3>
						        <h3>${movie.Plot}</h3>
					        	<hr>
					        	<a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">Ver en IMDB</a>
                    <a href="genre2.html" title="Información peliculas" class="navbar-brand">Siguiente</a>
	  	           </div>
	  	        </div>
	  	        <div class="row">
          <div class="well">
          <ul class="list-group">
            <h4><li class="list-group-item"><h2>Genero:</h2> ${movie.Genre}</li>
            <li class="list-group-item"><h2>Estreno:</h2> ${movie.Released}</li>
            <li class="list-group-item"><h2>Clasificación:</h2> ${movie.Rated}</li>
            <li class="list-group-item"><h2>Rating:</h2> ${movie.imdbRating}</li>
            <li class="list-group-item"><h2>Actores:</h2> ${movie.Actors}</li>
            <li class="list-group-item"><h2>Languaje:</h2> ${movie.Language}</li>
          </ul> 
					</div>
	  	        </div>
	  	      `;
      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

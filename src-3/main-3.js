//APIS//
const dataOMDB = "http://www.omdbapi.com/?i=tt3896198&apikey=5a2182d7";
const dataTMDB = "https://api.themoviedb.org/3/discover/movie?api_key=f1398813842891afd3168eb1700013e0&with_genres=";

//REsultados APIS//
const result = document.getElementById("show-data");
const resultText = document.getElementById("resultText");
const resultGenre = document.getElementById("show-genre");

//Buscador y filtro//
const btnSearchName = document.getElementById("btnSearch");
const btnSearchGenre = document.getElementById("action");


//OBTENER PELÏCULAS POR NOMBRE
btnSearchName.addEventListener('click', (e) => {
  e.preventDefault();
  resultGenre.innerHTML = "";
  let flickName = document.getElementById("searchText").value;
  showResult(dataOMDB)

  function showResult(dataOMBD) {

    fetch(dataOMBD + "&s=" + flickName)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const searchByTitle = data.Search;

        searchByTitle.forEach(element => {

          resultText.innerHTML = `<div id="tu-busqueda" class="card border-dark text-center rounded-lg mb-3">Buscaste la película: ${flickName}</div>`
          result.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2" >
              <div class="card border-dark text-center rounded-lg mb-3"  >
                <img src="${element.Poster}" class="card-img-top" alt="${element.Title}">
                <button type="button" id="info" class="btn btn-primary" data-toggle="modal" data-target="#modal${element.imbdID}">Ver más</button>
              </div>
            </div>`
        })
      })
  }
  console.log(data.results)
})

//OBTENER PELÍCULAS POR GÉNERO
btnSearchGenre.addEventListener('click', (e) => {
  e.preventDefault();
  result.innerHTML = "";

  let flickGenre = document.getElementsByTagName("button")[1].value;

  showGenre(dataTMDB)

  function showGenre(dataTMDB) {

    fetch(dataTMDB + flickGenre)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const searchByGenre = data.results;

        searchByGenre.forEach(element => {
          resultGenre.innerHTML +=
            `<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2" >
              <div class="card border-dark text-center rounded-lg mb-3"  >
                <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" class="card-img-top" alt="${element.title}">
                <button type="button" id="info" class="btn btn-primary" data-toggle="modal" data-target="#modal${element.imbdID}">Ver más</button>
              </div>
            </div>`
        })
      })
  }

});

//Recargar pagina//
document.getElementById('home').addEventListener('click', () => {
  location.reload();
});
document.getElementById('brand-name').addEventListener('click', () => {
  location.reload();
});
//Mostrar Generos//
document.getElementById("genders").addEventListener("click", () => {
  document.getElementById("container-gen").style.display = "block";
  document.getElementById("gender-complete").style.display = "block";
  document.getElementById("container-reco").style.display = "none"
});
//Mostrar recomendaciones//
document.getElementById("recom").addEventListener("click", () => {
  document.getElementById("container-reco").style.display = "block"
  document.getElementById("reco-complete").style.display = "block"
  document.getElementById("container-gen").style.display = "none";
});
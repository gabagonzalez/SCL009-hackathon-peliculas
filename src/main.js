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


//FUNCION PARA CARRUSEL
let timer = 4000;
let i = 0;
let max = $("#c > li").length;

$("#c > li").eq(i).addClass('active').css('left', '0');
$("#c > li").eq(i + 1).addClass('active').css('left', '25%');
$("#c > li").eq(i + 2).addClass('active').css('left', '50%');
$("#c > li").eq(i + 3).addClass('active').css('left', '75%');


setInterval(function () {

  $("#c > li").removeClass('active');

  $("#c > li").eq(i).css('transition-delay', '0.25s');
  $("#c > li").eq(i + 1).css('transition-delay', '0.5s');
  $("#c > li").eq(i + 2).css('transition-delay', '0.75s');
  $("#c > li").eq(i + 3).css('transition-delay', '1s');

  if (i < max - 4) {
    i = i + 4;
  } else {
    i = 0;
  }

  $("#c > li").eq(i).css('left', '0').addClass('active').css('transition-delay', '1.25s');
  $("#c > li").eq(i + 1).css('left', '25%').addClass('active').css('transition-delay', '1.5s');
  $("#c > li").eq(i + 2).css('left', '50%').addClass('active').css('transition-delay', '1.75s');
  $("#c > li").eq(i + 3).css('left', '75%').addClass('active').css('transition-delay', '2s');

}, timer);



//OBTENER PELÏCULAS POR NOMBRE
btnSearchName.addEventListener('click', (e) => {
  e.preventDefault();
  resultGenre.innerHTML = "";
  result.innerHTML = "";
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
          document.getElementById("carousel").style.display = "none";
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
          document.getElementById("carousel").style.display = "none";
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
  document.getElementById("carousel").style.display = "none";
  document.getElementById("container-reco").style.display = "none"
});
//Mostrar recomendaciones//
document.getElementById("recom").addEventListener("click", () => {
  document.getElementById("container-reco").style.display = "block"
  document.getElementById("reco-complete").style.display = "block"
  document.getElementById("carousel").style.display = "none";
  document.getElementById("container-gen").style.display = "none";
});

const dataOMDB ="http://www.omdbapi.com/?i=tt3896198&apikey=5a2182d7";


const btnSearchName = document.getElementsByTagName("button")[0];
const result= document.getElementById("root");


//OBTENER PELÏCULAS POR NOMBRE
btnSearchName.addEventListener('click',(e) =>{
  e.preventDefault();
  let flickName = document.getElementsByTagName("input")[0].value;
  showResult(dataOMDB)
  
  function showResult(dataOMBD) {

    let searchTitle = flickName;
    fetch(dataOMBD + "&t=" + searchTitle)
        .then(function(response){
          return response.json();
        })
  
        .then (function (element) {
            result.innerHTML += `<img src="${element.Poster}" alt="${element.Title}">`
        })
     
  }
  

})



/*fetch("http://www.omdbapi.com/?i=tt3896198&apikey=5a2182d7")
  .then(function(response){
    return response.json();
  }
  )

  .then(function(data){
    console.log(data)
  })*/
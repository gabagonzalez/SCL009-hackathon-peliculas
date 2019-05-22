
const dataOMDB ="http://www.omdbapi.com/?i=tt3896198&apikey=5a2182d7";


const btnSearchName = document.getElementsByTagName("button")[0];
const result= document.getElementById("show-data");


//OBTENER PELÏCULAS POR NOMBRE
btnSearchName.addEventListener('click',(e) =>{
  e.preventDefault();
  result.innerHTML = "";
  let flickName = document.getElementsByTagName("input")[0].value;
  showResult(dataOMDB)
  
  function showResult(dataOMBD) {

    let searchTitle = flickName;
    fetch(dataOMBD + "&s=" + searchTitle)
        .then(function(response){
          return response.json();
        })
  
        .then (function (data) {
          const searchByTitle = data.Search;
          
            searchByTitle.forEach(element => {
              result.innerHTML +=
              `<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2" >
              <div class="card border-dark text-center rounded-lg mb-3"  >
                <img src="${element.Poster}" class="card-img-top" alt="${element.Title}">
                
      
                <button type="button" id="info" class="btn btn-primary" data-toggle="modal" data-target="#modal${element.imbdID}">Ver más</button>
              </div>
            </div>`
            })
        

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
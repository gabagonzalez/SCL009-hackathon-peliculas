
window.onload
 fetch('http://http://www.omdbapi.com/?s=&apikey=76e14ebc')
 .then(function(response) {
     return response.json();
 }).then(function(myJson) {
     console.log(myJson.results);
 });

 
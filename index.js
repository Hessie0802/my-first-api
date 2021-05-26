



knop = document.getElementById("btnsearch")

knop.addEventListener("click", function myScript(){
    var x = document.getElementById("Tekstvak").value;
    

    fetch(`https://restcountries.eu/rest/v2/name/${x}?fullText=true`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        landplaceholder = document.getElementById("country")
        landplaceholder.innerHTML = data[0].name
        vlagholder = document.getElementById("vlag")
        vlagholder.src = data[0].flag
        habitants = document.getElementById("habitants")
        habitants.innerHTML = data[0].population
        capitalcity = document.getElementById("capitalcity")
        capitalcity.innerHTML = data[0].capital
    });
    
});


let dagen = document.getElementById("Day");
let jaren = document.getElementById("Year");
let maanden = document.getElementById("Month");

let dezeDag = new Date;
dezeDag = dezeDag.getDate();

let dezeMaand = new Date;
dezeMaand = dezeMaand.getMonth();
dezeMaand =+ 1;

let dezeJaar = new Date;
dezeJaar = dezeJaar.getFullYear();

function toonDatum(){
    dagen.innerHTML = "Day: "+dezeDag;
    maanden.innerHTML = "Month: " + dezeMaand;
    jaren.innerHTML = "Year: "+ dezeJaar;
}

window.addEventListener('DOMContentLoaded', toonDatum);
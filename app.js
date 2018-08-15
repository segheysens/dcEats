import './master.scss';

const pizza = document.getElementById("pizza");
pizza.addEventListener("click", (e) => alert("Mmm... pizzaaa.") );

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VnaGV5c2VucyIsImEiOiJjamtkaTM1c3UwMWd6M3JudnNic2xlNzNyIn0.ev497aFfqUil1_90BzrJQQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/segheysens/cjkujjvr30rjl2sldh342cb1i',
  center: [-77.035, 38.891],
  zoom: 11
});

console.log("mama, we made it");

var imagenes = [];

imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png"

console.log(imagenes);
var cauchin = new Pakiman("Cauchin", 100, 30);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
var pokacho = new Pakiman("Pokacho", 80, 50);

var pakimanes = [];

pakimanes.push(cauchin);
pakimanes.push(tocinauro);
pakimanes.push(pokacho);

for (var pakiman of pakimanes) {

  pakiman.mostrar();
}

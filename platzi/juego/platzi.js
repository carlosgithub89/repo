var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var fondo = {
  url:"tile.png",
  cargado:false
};
var vaca = {
  url:"vaca.png",
  cargado: false
};
var cerdo = {
  url:"cerdo.png",
  cargado: false
};
var pollo = {
  url:"pollo.png",
  cargado: false
};

init();

function creaActores(){

  actor(vaca);
  vaca.imagen.addEventListener("load", dibujar);
  actor(cerdo);
  cerdo.imagen.addEventListener("load", dibujar);

}

function actor (parametro) {
  parametro.imagen = new Image();
  parametro.imagen.src = parametro.url;
}

function init(){

  actor(fondo);
  fondo.imagen.addEventListener("load", dibujarFondo);
}

function dibujarFondo(){

  papel.drawImage(fondo.imagen,0,0);
  creaActores();
}

function dibujar(evento){

  x = aleatorio(0,420);
  y = aleatorio(0,420);
  papel.drawImage(evento.target,x,y);
}

function aleatorio(min, max){

  return Math.floor((Math.random() * (max - min  + 1))) + min;;
}

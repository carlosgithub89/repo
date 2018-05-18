document.addEventListener("keydown",mover);
var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

vp.addEventListener("load", creaActores);
var x;
var y;

var pollo = {
  url:"pollo.png",
  cargado: false
};

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};
function creaActores(){

  actor(pollo);
  pollo.imagen.addEventListener("load", dibujar);
}

function actor (parametro) {
  parametro.imagen = new Image();
  parametro.imagen.src = parametro.url;
}
function mover(evento){
  var movimiento = 80;
  console.log(evento);
  switch(evento.keyCode) {

      case teclas.UP:
      dibujarMovimiento(x, y - movimiento);
      y = y - movimiento;
      break;

      case teclas.DOWN:
      dibujarMovimiento(x, y + movimiento);
      y = y + movimiento;
      break;

      case teclas.LEFT:
      dibujarMovimiento(x - movimiento, y);
      x = x - movimiento;
      break;

      case teclas.RIGHT:
      dibujarMovimiento(x + movimiento, y);
      x = x + movimiento;
      break;
  }
}

function dibujarMovimiento(x,y){

  papel.clearRect(0,0,500,500);
  papel.drawImage(pollo.imagen,x,y);
}

function dibujar(evento){

  x = 100;
  y = 100;
  papel.drawImage(evento.target,x,y);
}

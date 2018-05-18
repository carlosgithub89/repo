var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

document.addEventListener("keydown",dibujar);
var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext("2d");

var colorPincel = "red";
var x = 150;
var y = 150;

dibujarLinea(papel, colorPincel, 149, 149, 151, 151);

function dibujar(evento){
  var movimiento = 10;

  switch(evento.keyCode) {

      case teclas.UP:
      dibujarLinea(papel, colorPincel, x, y, x, y - movimiento);
      y = y - movimiento;
      break;

      case teclas.DOWN:
      dibujarLinea(papel, colorPincel, x, y, x, y + movimiento);
      y = y + movimiento;
      break;

      case teclas.LEFT:
      dibujarLinea(papel, colorPincel, x, y, x - movimiento, y);
      x = x - movimiento;
      break;

      case teclas.RIGHT:
      dibujarLinea(papel, colorPincel, x , y, x + movimiento, y);
      x = x + movimiento;
      break;
  }
}

function dibujarLinea(lienzo, color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth =3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

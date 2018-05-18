
var cuadrito = document.getElementById("area_dibujo");

cuadrito.addEventListener("click", creaPincel);
cuadrito.addEventListener("mousedown", activarPincel);
cuadrito.addEventListener("mouseup", activarPincel);
cuadrito.addEventListener("mousemove", dibujar);

var papel = cuadrito.getContext("2d");

var colorPincel = "red";
var x;
var y;
var mousePresionado;
var movimiento = 1;
function creaPincel(evento){

  console.log(evento);
  x = evento.offsetX;
  y = evento.offsetY;
}
function activarPincel(evento){

  if (evento.type == "mousedown") {

    mousePresionado = true;
  }else if (event.type == "mouseup"){

      mousePresionado = false;
  }
}

function dibujar(evento){

  if (mousePresionado){
    
    dibujarLinea(papel, colorPincel, x, y, evento.layerX, evento.layerY);

    x = evento.layerX;
    y = evento.layerY;
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

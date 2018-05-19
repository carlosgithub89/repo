document.getElementById("num0").addEventListener("click", num_listener);
document.getElementById("num1").addEventListener("click", num_listener);
document.getElementById("num2").addEventListener("click", num_listener);
document.getElementById("num3").addEventListener("click", num_listener);
document.getElementById("num4").addEventListener("click", num_listener);
document.getElementById("num5").addEventListener("click", num_listener);
document.getElementById("num6").addEventListener("click", num_listener);
document.getElementById("num7").addEventListener("click", num_listener);
document.getElementById("num8").addEventListener("click", num_listener);
document.getElementById("num9").addEventListener("click", num_listener);
document.getElementById("botonBorrar").addEventListener("click", borrar_listener);
document.getElementById("botonExtraer").addEventListener("click", extraer_listener);

var dineroInput = document.getElementById("dinero");
var resultado = document.getElementById("resultado");
var texto = "0";
var caja = new Caja();
var retiros = [];
var entregado = [];
var dinero = 0;

caja.agregar(new Billete(DOLARES["CIEN"], 100));
caja.agregar(new Billete(DOLARES["CINCUENTA"], 100));
caja.agregar(new Billete(DOLARES["VEINTE"], 100));
caja.agregar(new Billete(DOLARES["DIEZ"], 100));
caja.agregar(new Billete(DOLARES["CINCO"],0));
caja.agregar(new Billete(DOLARES["UNO"], 5));
console.log("Monto disponible: " + caja.montoTotal());

function num_listener(numberEvent){

  let numero = numberEvent.target.value;

  if (texto == "0" && numero != "0") {

    texto = "";
  }
  if(texto == "0" && numero == "0"){

    texto = "0";

  } else {

    texto += numero;
  }

  dineroInput.value = texto;
}

function borrar_listener(){

  texto = "0";
  dineroInput.value = texto;
}

function extraer_listener(){

  resultado.innerHTML = "";
  dinero = parseInt(dineroInput.value);

  var montoTotal = caja.montoTotal();

  console.log(caja.caja);

  if (dinero <= montoTotal) {

    for (let billete of caja.caja) {

      billetes = billete.billetesRetirables(dinero);

      if (billetes > 0) {

        let retiro = new Billete(billete.valor, billetes);

        dinero -= retiro.total;
        billete.retirar(retiro);
        retiros.push(retiro);
      }
    }
  }else {

      resultado.innerHTML = "Fondos insuficientes para completar transacción.";
  }

  if (dinero == 0){

    for (let retiro of retiros) {

      resultado.innerHTML += retiro.total + "$ en " + retiro.cantidad + " billetes de " + retiro.valor + "$ <br/>";
    }

  }else if (retiros.length > 0 && dinero > 0) {

    caja.regresar(retiros);

    resultado.innerHTML = "No hay billetes disponibles para acomodar su monto.";
  }

  console.log("Monto disponible: " + caja.montoTotal());
  retiros = [];
}

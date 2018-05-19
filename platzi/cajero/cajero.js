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
var texto = "";
var caja = new Caja();
var entregado = [];
var dinero = 0;

caja.agregar(new Billete(DOLARES["CIEN"], 100));
caja.agregar(new Billete(DOLARES["CINCUENTA"], 100));
caja.agregar(new Billete(DOLARES["VEINTE"], 100));
caja.agregar(new Billete(DOLARES["DIEZ"], 100));
caja.agregar(new Billete(DOLARES["CINCO"],100));
caja.agregar(new Billete(DOLARES["UNO"], 100));

function num_listener(numberEvent){

  let numero = numberEvent.target.value;

  if(texto == "0" && numero != "0"){

    texto = "";
  }

  if (texto.length > 0){

    texto += numero;
  }

  dineroInput.value = texto;
}

function borrar_listener(){

  texto = "0";
  dineroInput.value = texto;
}

function extraer_listener(){

  dinero = parseInt(dineroInput.value);
  var montoTotal = caja.montoTotal();

  console.log("Monto disponible: " + montoTotal);

  if (dinero <= montoTotal) {

    for (var billete of caja.caja) {

      billetes = billete.billetesRetirables(dinero);

      if (billetes > 0) {

        let retiro = new Billete(billete.valor, billetes);

        billete.retirar(retiro);
        dinero -= retiro.total;
        entregado.push(retiro);
      }
    }

  }else{

    console.log("Fondos insuficientes para completar transacción.");
  }

  console.log(entregado);

  entregado = [];
}

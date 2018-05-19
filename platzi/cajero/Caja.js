class Caja{

  constructor(){

    this.caja = [];
    this.total = 0;
  }

  agregar(billete){

    this.caja.push(billete);
    this.total += billete.total;
  }

  montoTotal(){

    var resultado = 0;

    for (var billete of this.caja) {

      resultado += billete.total;
    }

    return resultado;
  }

}

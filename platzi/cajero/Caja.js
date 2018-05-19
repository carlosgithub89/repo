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

    for (let billete of this.caja) {

      resultado += billete.total;
    }

    return resultado;
  }


  regresar(retiros){

    for (let billete of this.caja) {

      for (let retiro of retiros) {

        if (retiro.valor == billete.valor){

          billete.regresar(retiro);
          continue;
        }
      }
    }
  }

}

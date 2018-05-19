class Billete{

  constructor(valor, cantidad){

    this.valor = valor;
    this.cantidad = cantidad;
    this.total = this.valor * this.cantidad;
  }

  billetesRetirables(dinero){

    var resultado = 0;

    resultado = Math.floor(dinero / this.valor);

    if (resultado > this.cantidad) {

      resultado = this.cantidad;
    }

    return resultado;
  }

  retirar(billete) {

    this.cantidad = this.cantidad - billete.cantidad;
    this.total = this.valor * this.cantidad;
  }

  regresar(billete){

    this.cantidad = this.cantidad + billete.cantidad;
    this.total = this.valor * this.cantidad;
  }
}

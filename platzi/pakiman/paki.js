

class Pakiman{

  constructor(nombre, vida, ataque){

    this.imagen = new Image();
    this.nombre = nombre;
    this.ataque = ataque;
    this.vida = vida;

    this.imagen.src = imagenes[this.nombre];
  }

  hablar(){
    alert(this.nombre);
  }

  mostrar(){
    document.write("<p>");
    document.body.appendChild(this.imagen);
    document.write("Nombre " + this.nombre);
    document.write("Vida " + this.vida);
    document.write("Ataque: " + this.ataque);
    document.write("</p>");
  }

}

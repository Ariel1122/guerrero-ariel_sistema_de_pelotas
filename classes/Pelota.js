class Pelota {
  constructor(_X, _Y) {
    this.posx = _X;
    this.posy = _Y;
    this.velx = random(-5, 5);
    this.vely = random(5, 15);
    this.acely = 0.98;

    this.diam = int(random(5, 50));
    this.rad = this.diam / 2;
    this.colorin = color(255, random(100, 250), random(0, 150));
  }

  update(_piso) {
    this.vely += this.acely;
    this.posy += this.vely;

    // Comprueba si la pelota ha tocado el suelo
    if (this.posy + this.rad >= _piso) {
      //  verifica si la parte inferior de la pelota toca o cruza el suelo
      this.posy = _piso - this.rad; //posición vertical de la pelota para que no pase a través del suelo
      this.vely *= -1; //Esto simula un rebote
      // this.velx *= 0.99;
    }

    if (this.posx + this.rad >= windowWidth) {
      // verifica si la pelota ha alcanzado o cruzado el borde derecho de la ventana.

      this.posx = windowWidth - this.rad; //posición horizontal de la pelota para que no pase más allá del borde derecho de la ventana
      this.velx *= -1; // simula un rebote, haciendo que la pelota rebote en la dirección opuesta.
    } else if (this.posx - this.rad <= 0) {
      //  verifica si la pelota ha cruzado el borde izquierdo de la ventana
      this.posx = this.rad; //ajusta la posición horizontal de la pelota para que no pase más allá del borde izquierdo de la ventana
      this.velx *= -1; // Invierte la velocidad horizontal, multiplicándola por -1. simula un rebote, la pelota rebota en la dirección opuesta.
    }

    this.posx += this.velx; //actualiza la posición horizontal de la pelota, this.posx agregando la velocidad horizontal actual this.velx
  }

  display() {
    fill(this.colorin);
    circle(this.posx, this.posy, this.diam);
  }
}

// blue printe, se conoce al metedo, o plano de contruccion, en este caso el plano es la clase que contienen todos los elementos de codificacion, con el cual podemos repetir el objeto sin usando el mismo plano.
// OOP - OBJECT ORIENTED PROGRAMING /PROGRAMACION ORIENTADA A OBJETOS.
// ENCALUPSACION - EN EL CUAL TRBAJAMOS,(la funcion de update), encapsular una funcionalidad en una accion.
// HERENCIA
// POLIRMOFISMO-A SUS CARACTERISTICAS DE UN ELEMENTO PRINCIPAL O SUS SUBELEMENTOS HEREDADOS
//
// dominar el sistema de visualizacion con fill, transparencia, etc.

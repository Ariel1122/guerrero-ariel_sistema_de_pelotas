class Pelota {
  constructor() {
    this.posx = random(50, windowWidth - 50);
    this.posy = random(50, 70);
    this.velx = random(-5, 5); // Agregar velocidad inicial en X
    this.vely = random(5, 15); // Agregar velocidad inicial en Y
    this.acely = 0.98;

    this.diam = int(random(5, 50));
    this.rad = this.diam / 2;
    this.colorin = color(255, random(100, 250), random(0, 150));
  }

  update(_piso) {
    this.vely += this.acely;
    this.posy += this.vely;

    // Verificar si la pelota ha llegado al suelo
    if (this.posy + this.rad >= _piso) {
      this.posy = _piso - this.rad; // Asegurarse de que no pase más allá del suelo
      this.vely *= -0.9; // Rebote con una pérdida de energía (coeficiente de restitución)
      this.velx *= 0.99; // Simular una pequeña pérdida de energía en la dirección X
    }

    // Verificar si la pelota ha llegado a los bordes de la ventana
    if (this.posx + this.rad >= windowWidth) {
      this.posx = windowWidth - this.rad; // Asegurarse de que no pase más allá del borde derecho
      this.velx *= -1; // Invertir la dirección en X al llegar al borde
    } else if (this.posx - this.rad <= 0) {
      this.posx = this.rad; // Asegurarse de que no pase más allá del borde izquierdo
      this.velx *= -1; // Invertir la dirección en X al llegar al borde
    }

    this.posx += this.velx;
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

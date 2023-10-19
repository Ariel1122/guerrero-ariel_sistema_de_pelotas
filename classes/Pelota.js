class Pelota {
  constructor() {
    this.posx = random(50, windowWidth - 50);
    this.posy = random(50, 70);
    this.velx = 0;
    this.vely = 0;
    this.acely = 0.98;

    this.diam = int(random(5, 50));
    this.rad = this.diam / 2;
    this.colorin = color(255, random(100, 250), random(0, 150));

    print("ya");
  }

  update(_piso) {
    if (this.posy + this.rad <= _piso) {
      this.vely += this.acely;
      this.posy += this.vely;
    } else {
      this.vely *= -1.0;
      this.posy += this.vely;
    }
    if (this.posx > windowWidth) {
      this.velx *= -1;
    }
    if (this.posx < 0) {
      this.velx *= -1;
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

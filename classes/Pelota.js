class Pelota {
  constructor() {
    this.posx = random(50, windowWidth - 50);
    this.posy = random(50, 70);
    this.velx = 0;
    this.vely = 0;
    this.acely = 0.98;
    this.diam = int(random(10, 50));
    this.rad = this.diam / 2;
    this.clor = color(255, random(100, 200), random(0, 355));

    print("ya");
  }

  update(_piso) {
    if (this.posy + this.rad <= _piso) {
      this.vely += this.acely;
      this.posy += this.vely;
    } else {
      this.vely *= -1;
      this.posy += this.vely;
    }
  }

  display() {
    fill(this.clor);
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

pelotas = []; //es una matriz que se utiliza para almacenar valores, los valores de cada pelota en la anumacion.

function setup() {
  createCanvas(windowWidth, windowHeight);
  // print(pelotas);
}

function draw() {
  background(163, 99, 252);
  // primero se establece el valor de la variable i (unica dentro del for) que es 0, luego indicamos al bucle for, que si i es menor que la longitud de la matriz pelotas este se seguira ejecutando, y al final le indicamos al bucle que despues de cada repeticion se incrementa el valor de i

  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].update(windowHeight); //actualiza la posición y la velocidad de la pelota.
    pelotas[i].display(); //e encarga de dibujar la pelota en el lienzo.
  }
}

function mousePressed() {
  let pelota = new Pelota(mouseX, mouseY); // Pasar las coordenadas del clic como argumentos
  pelotas.push(pelota);
}

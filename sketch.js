pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // print(pelotas);
}

function draw() {
  background(163, 99, 252);
  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
  }
}

function mousePressed() {
  let pelota = new Pelota(mouseX, mouseY); // Pasar las coordenadas del clic como argumentos
  pelotas.push(pelota);
}

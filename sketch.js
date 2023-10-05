// let pelotas = [];
let pel1 = [];
// let frutas = [];
// parentesis para almacenar un conjunto de elementos, al momento de inicial la variable puedo inicializar la de elementos["manzana", "peras"]

// for bucle de javascript

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    console.group(i);
  }
  pel1 = new Pelota();
}

function draw() {
  background(0, 200, 150, 70);
  pel1.update(300);
  pel1.display();
  print("ya");
}

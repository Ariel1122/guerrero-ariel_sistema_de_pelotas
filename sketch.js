// let pelotas = [];
let pels = [];
const NP = 1000;
// let frutas = [];
// parentesis para almacenar un conjunto de elementos, al momento de inicial la variable puedo inicializar la de elementos["manzana", "peras"]

// for bucle de javascript

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NP; i++) {
    let pelota = new Pelota();
    pels.push(pelota);
  }
  print("pelotas");
  // pel1 = new Pelota();

  // noLoop();
  // para que draw no divude de manera continua en draw--ek funtion draw se ejecuta una sola vez - draw 60 veces por segundo
}

function draw() {
  background(0, 200, 150, 70);
  //   pel1.update(300);
  //   pel1.display();
  //   print("ya");

  //  oara ek for loop se necesitan 3 deckararion, la 1 existe para el bucle del forloop, se ejecuta al inicio del loop, el 2 es la compqrcion para la variable del loop,
  // se pregunta si la variable i es menor que 10, como es 0 se ejecutq el codigo.
  // la 3ra variable le usa un punto y i ahora la variable vale 1, el loop vuelve a comparar, asta que el valor sea menor a 10
  // se cuenta desde sero
  // el ++ es +1
  for (let i = 0; i < NP; i++);
  {
    pels[i].update(windowHeight);
    pels[i].display();
    // esta for loop puede ayudar a ejecutar la operacion dentro de las llaves las beces que ordene, en mi caso 10
  }
  print("fin");
  // recomendable no tener activa el print siempre por consume mas recursos que las operaciones
}

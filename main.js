class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido);
    }
  }
  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
    // this.nombre = nombre;
    // this.apellido = apellido;
    // this.altura = altura;
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrolador/a`);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mira, no sabia que eras Desarrollador/a`);
  }
}

var jose = new Desarrollador("jose", "Acevedo", 1.7);
var erika = new Persona("Erika", "Luna", 1.9);
var ana = new Desarrollador("Ana", "Escorcia", 1.95);

jose.saludar(responderSaludo);
erika.saludar(responderSaludo);
ana.saludar(responderSaludo);

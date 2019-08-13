function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soyAlto = function() {
  return this.altura > 1.8;
};

var jose = new Persona("jose", "Acevedo", 1.7);
var erika = new Persona("Erika", "Luna", 1.9);
var ana = new Persona("Ana", "Escorcia", 1.95);

jose.saludar();

jose.soyAlto();
erika.soyAlto();
ana.soyAlto();

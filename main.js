var sasha = {
  nombre: "Sasha",
  apellido: "Lifszyc",
  altura: 1.72,
  cantidadDeLibros: 82
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
  cantidadDeLibros: 72
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
  cantidadDeLibros: 67
};

var dario = {
  nombre: "Dario",
  apellido: "Ruiz",
  altura: 1.71,
  cantidadDeLibros: 85
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
  cantidadDeLibros: 50
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
  cantidadDeLibros: 182
};

const esAlta = persona => persona.altura > 1.8;

var personas = [sasha, alan, martin, dario, vicky, paula];

var personasAltas = personas.filter(esAlta);

const pasarAlturaCms = persona => {
  persona.altura *= 100;
  return persona;
};

var personasCms = personas.map(pasarAlturaCms);

// var acum = 0;

// for (var i = 0; i < personas.length; i++) {
//   acum += personas[i].cantidadDeLibros;
// }

const reducer = (acum, personas) => {
  return acum + personas.cantidadDeLibros;
};

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros`);

var sasha = {
  nombre: "Sasha",
  apellido: "Lifszyc",
  altura: 1.72
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85
};

var dario = {
  nombre: "Dario",
  apellido: "Ruiz",
  altura: 1.71
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76
};

const esAlta = persona => persona.altura > 1.8;

var personas = [sasha, alan, martin, dario, vicky, paula];

var personasAltas = personas.filter(esAlta);

const pasarAlturaCms = persona => {
  persona.altura *= 100;
  return persona;
};

var personasCms = personas.map(pasarAlturaCms);

console.log(personasCms);

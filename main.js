var jose = {
  nombre: "Jose",
  apellido: "Acevedo",
  edad: 19,
  ingeniero: false,
  cantante: false,
  cocinero: true,
  guitarrista: false
};

var ana = {
  nombre: "Ana",
  apellido: "Escorcia",
  edad: 18,
  ingeniero: false,
  cocinero: true
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `);
  if (persona.ingeniero) {
    console.log("Ingeniero");
  }

  if (persona.cantante) {
    console.log("cantante");
  }

  if (persona.Cocinero) {
    console.log("cocinero");
  }

  if (persona.guitarrista) {
    console.log("Guitarrista");
  }
}

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

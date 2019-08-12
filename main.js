var jose = {
  nombre: "Jose",
  apellido: "Acevedo",
  edad: 19,
  peso: 75
};

console.log(`Al inicio del año ${jose.nombre} pesa ${jose.peso}Kg`);

// function aumentarDePeso(persona){
//   return persona.peso += 200
// }

const INCREMENTO_DE_PESO = 200;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => (persona.peso += INCREMENTO_DE_PESO);
const adelgazar = persona => (persona.peso -= INCREMENTO_DE_PESO);

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random();

  if (random < 0.25) {
    aumentarDePeso(jose);
    // Aumentar de peso
  } else if (random < 0.5) {
    adelgazar(jose);
    // adelgazar
  }
}

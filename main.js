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
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = jose.peso - 3;
var dias = 0;

while (jose.peso > META) {
  // debugger;
  if (comeMucho) {
    aumentarDePeso(jose);
  }

  if (realizaDeporte()) {
    adelgazar(jose);
  }
}

console.log(`Al final del año ${jose.nombre} pesa ${jose.peso}Kg`);

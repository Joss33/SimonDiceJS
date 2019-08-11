var jose = {
  nombre: 'Jose',
  apellido: 'Acevedo',
  edad: 19
}

var ana = {
  nombre: 'Ana',
  apellido: 'Escorcia',
  edad: 18
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var {
    nombre
  } = persona

  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(jose)
imprimirNombreEnMayusculas(ana)

function imprimirNombreYEdad(persona) {
  var {
    nombre,
    edad
  } = persona
  console.log(`Hola mi nombre es ${nombre} y mi edad es ${edad}`)
}

imprimirNombreYEdad(jose)
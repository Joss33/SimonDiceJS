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

function imprimirNombreEnMayusculas({
  nombre
}) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(jose)
imprimirNombreEnMayusculas(ana)
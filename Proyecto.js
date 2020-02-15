// Solicitamos los datos del futuro cliente.
//var nombreCompleto = prompt("Ingrese nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
//var conyuge = prompt("¿Tiene cónyuge?", "Si/No");
var hijos = prompt("¿Tiene hijos?", "Si/No");

if (hijos == "Si") {
   var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");
} else {
  cantidadHijos = 0;
}

// Obtenemos la fecha actual.
var fechaActual = new Date();
var diaActual = fechaActual.getDate();
var mesActual = (fechaActual.getMonth() + 1 );
var anioActual = fechaActual.getFullYear();
var diferencia = anioActual - anioNacimiento

// Comparamos la fecha actual con la fecha ingresada para ver si es mayor de edad y continuar con el proceso.
if (mesActual <= mesNacimiento) {
  if (mesActual == mesNacimiento) {
    if (diaNacimiento > diaActual) {
      diferencia--;
    }
  } else {
    diferencia--;
  }
}

const precioBase = 250;

var comision = precioBase * 0.30;

if (diferencia < 18){
  alert('No se le puede asegurar.');
} else {

  // El siguiente es un comentario.
  // Por favor no elimine los caracteres // que se encuentran al inicio.

  // En la siguiente variable usted debe calcular los cargos correspondientes.
  // Puede crear la cantidad de variables necesarias para calcular cada uno
  // de los recargos que sean necesarios

  var recargos = 0;
  var totalPagar = precioBase + comision + recargos;

  //document.write('Nombre: ' + nombreCompleto + '<br>');
  document.write('Fecha de nacimiento: ' + diaNacimiento + '/' + mesNacimiento + '/'+ anioNacimiento + '<br>');
  //document.write('Conyuge: ' + conyuge + ' <br>');
  document.write('Hijos menores de 21 años: ' + cantidadHijos + ' <br><br>');

  document.write('Edad: ' + diferencia + '<br><br>');
  //document.write(totalPagar);
}

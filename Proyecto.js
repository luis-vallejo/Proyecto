// Solicitamos los datos del futuro cliente.
var nombreCompleto = prompt("Ingrese nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

// Obtenemos la fecha actual y las asignamos a variables.
var fechaActual = new Date();
var diaActual = fechaActual.getDate();
var mesActual = (fechaActual.getMonth() + 1 );
var anioActual = fechaActual.getFullYear();
var edad = anioActual - anioNacimiento

var mensaje = "Datos ingresados con exito";

// Comparamos la fecha actual con la fecha ingresada para ver si es mayor de edad y continuar con el proceso.
if (mesActual <= mesNacimiento) {
  if (mesActual == mesNacimiento) {
    if (diaNacimiento > diaActual) {
      edad--;
    }
  } else {
    edad--;
  }
}

if (edad >= 18 && edad <= 65) {

  // Solicitamos los datos del coyuge y los hijos si es que tiene.
  var conyuge = prompt("¿Tiene cónyuge?", "Si/No");

  if (conyuge == "Si") {
    var edadconyuge = prompt("Ingrese la edad de su conyuge:", "Por favor ingrese únicamente números");
  }else {
    edadconyuge = '--';
  }

  var hijos = prompt("¿Tiene hijos?", "Si/No");

  if (hijos == "Si") {
     var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");
  } else {
    cantidadHijos = 0;
  }

  // Asignamos valor a nuestras variables.
  const precioBase = 250;
  var comision = precioBase * 0.30;
  var recAseg = 0;
  var recCony = 0;
  var recHijo = 0;
  var recargos = 0;
  var totalPagar = 0;
  var mensaje = "Datos ingresados con exito"

  // El siguiente es un comentario.
  // Por favor no elimine los caracteres // que se encuentran al inicio.

  // En la siguiente variable usted debe calcular los cargos correspondientes.
  // Puede crear la cantidad de variables necesarias para calcular cada uno
  // de los recargos que sean necesarios

  // Calculamos el recargo por edad del asegurado
  if (edad > 18 && edad < 21) {
    recAseg = 0;
  }else if (edad >= 21 && edad < 25) {
    recAseg = precioBase * 0.01;
  }else if (edad >= 25 && edad < 30) {
    recAseg = precioBase * 0.02;
  }else if (edad >= 30 && edad < 40) {
    recAseg = precioBase * 0.05;
  }else if (edad >= 40 && edad < 50) {
    recAseg = precioBase * 0.08;
  }else if (edad >= 50 && edad < 65) {
    recAseg = precioBase * 0.12;
  }
  else {
    recAseg = 0;
  }

  // Calculamos el valor del recargo del conyuge "recCony"
  if (conyuge == "Si") {
    if (edadconyuge < 30){
      recCony = precioBase * 0.01;
    }
    if (edadconyuge >= 30 && edad < 40){
      recCony = precioBase * 0.02;
    }
    if (edadconyuge >= 40 && edad < 50){
      recCony = precioBase * 0.03;
    }if (edadconyuge >= 50 && edad < 70){
      recCony = precioBase * 0.05;
    }
  }else {
    recCony = 0;
  }

  // Calculo del recargo por hijos majores a 21 años "recHijo"
  if (hijos == "Si") {
    recHijo = precioBase * 0.01 * cantidadHijos;
  }else {
    recHijo = 0;
  }

  // Suma los recargos en una sola variable "recargos"
  if (conyuge == "Si" && hijos == "No") {
    recargos = recAseg + recCony;
  }
  if (conyuge == "Si" && hijos == "Si") {
    recargos = recAseg + recCony + recHijo;
  }
  if (conyuge == "No" && hijos == "Si") {
    recargos = recAseg + recHijo;
  }
  if (conyuge == "No" && hijos == "No") {
    recargos = recAseg;
  }

  // Sumamos el total a pagar, precio base, comisión y recargos
  totalPagar = precioBase + comision + recargos;
  document.write('Bienvenidos a Seguros TK-U' + '<br><br>');
  document.write('Nombre: ' + nombreCompleto + '<br>');
  document.write('Fecha de nacimiento: ' + diaNacimiento + '/' + mesNacimiento + '/'+ anioNacimiento + '<br>');
  document.write('Edad: ' + edad + '<br>');
  document.write('Cónyuge: ' + conyuge + ' <br>');
  document.write('Edad del cónyuge: ' + edadconyuge + '<br>');
  document.write('Hijos menores de 21 años: ' + cantidadHijos + ' <br><br>');
  document.write('Precio del seguro: Q. ' + precioBase + '<br>');
  document.write('Comisión: Q. ' + comision + '<br>');
  document.write('Cargos por edad : Q. ' + recAseg + '<br>');
  document.write('Cargos por cónyuge: Q. ' + recCony + '<br>');
  document.write('Cargos por hijos: Q. ' + recHijo + '<br><br>');
  document.write('____________________________________________' + '<br>');
  document.write('Total a pagar: Q. ' + totalPagar + '<br><br>');
  document.write("Datos ingresados con éxito, gracias por preferirnos.")
}else {
  alert("No se le puede asegurar.");
}

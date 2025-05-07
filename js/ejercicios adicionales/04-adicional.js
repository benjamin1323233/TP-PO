/*Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números).
 Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al 
 array de calificaciones del alumno. Usa un bucle para calcular la calificación más alta del 
 alumno y un switch para clasificar al alumno según su calificación más alta (A para 9-10, B 
 para 7-8, C para 5-6, D para 0-4). */
 let nota = "";
 let calificacionFinal= "";
const alumno = {
  nombre: "mingolin",
  curso: "4to",
  calificaciones: [],
};

function agregarCalificacion(calificacion) {
  if (calificacion >= 0 && calificacion <= 10) {
    alumno.calificaciones.push(calificacion);
    nota = alumno.calificaciones[0];
    for (let i = 0; i <= alumno.calificaciones.length - 1; i++) {
      if (nota <= alumno.calificaciones[i]) {
        nota = alumno.calificaciones[i];
      }
      console.log(nota);
    }
  } else {
    alert(document.writeln("el valor ingresado no es valido"));
  }
  const opcion = nota;
  switch (opcion) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      calificacionFinal = ("Tu calificacion final es D");
      break;
    case 5:
    case 6:
      calificacionFinal= ("Tu calificacion final es C");
      break;
    case 7:
    case 8:
      calificacionFinal=("Tu calificacion final es B");
      break;
    case 9:
    case 10:
      calificacionFinal=("Tu calificacion final es A!");
      break;
  }
}
alert(
    "la calificacion final es dada por el documento al final de la operacion"
  );
do {
  agregarCalificacion(
    parseInt(prompt("agrega la nueva calificacion del alumno"))
  );
} while (confirm("quieres agregar otra calificacion?"));
document.writeln(calificacionFinal)

/*Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota.
 Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. Usa un bucle
  para recorrer el array. Usa prompt para ingresar los datos de los estudiantes. */
  const objetos = []
  const alumnouno = {
    nombre: prompt("Ingresa el nombre del primer alumno"),
    nota: prompt("ingresa la nota del primer alumno"),
    //metodo
    agregarArray(){
        objetos.unshift(this.nombre,this.nota)
    }
}
alumnouno.agregarArray();
const alumnodos = {
    nombre: prompt("Ingresa el nombre del segundo alumno"),
    nota: prompt("ingresa la nota del segundo alumno"),
    agregarArraydos(){
        objetos.unshift(this.nombre,this.nota)
    }
}
alumnodos.agregarArraydos();
const alumnotres = {
    nombre: prompt("Ingresa el nombre del tercer alumno"),
    nota: prompt("ingresa la nota del tercer alumno"),
    agregarArraytres(){
        objetos.unshift(this.nombre,this.nota)
    }
}
alumnotres.agregarArraytres();
console.log(objetos)

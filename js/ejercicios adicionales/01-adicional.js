/*Crea un objeto persona que contenga las propiedades nombre, edad y hobbies
 (los hobbies son un array de strings). Luego, escribe una función que reciba
  un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies
   de la persona. Finalmente, imprime los hobbies de la persona usando un bucle.
    Usa prompt para ingresar los datos de la persona y el nuevo hobby. */
const hobbys = ["f1", "basquet", "play", "natacion"];
const persona = {
  nombre: prompt("Ingresa tu nombre"),
  edad: parseInt(prompt("Ingresa tu edad")),
  hobbies: hobbys,
//metodos
  mostrarDatos() {
    document.writeln("El nombre es: " + this.nombre);
    document.writeln("<br>La edad es: " + this.edad);
  },
  mostrarHobbys() {
    document.writeln("<h2>hobbys</h2>");
    document.writeln("<ul>");
    for (let i = 0; i < this.hobbies.length; i++) {
      document.writeln("<li>" + this.hobbies[i] + "</li>");
    }
    document.writeln("</ul>");
  },
};
//funcion
const agregarHobby = function (hobby) {
  hobbys.unshift(hobby);
};
//mostrar datos
persona.mostrarDatos();
agregarHobby(prompt("Ingresa un hobby nuevo"));
persona.mostrarHobbys();

console.log(hobbys);
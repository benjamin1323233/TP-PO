/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
tabla.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/
class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #nacimiento;
  constructor(nombrep, edadp, dnip, sexop, pesop, alturap, nacimientop) {
    this.#nombre = nombrep;
    this.#edad = edadp;
    this.#sexo = sexop;
    this.#peso = pesop;
    this.#altura = alturap;
    this.#nacimiento = nacimientop;
    this.#dni = dnip;
  }
  //metodos
  mostrarGeneracion(){
    if(this.#nacimiento>=1994&&this.#nacimiento<=2010){
        document.writeln("<br>eres de la generacion Z!")
        document.writeln("<ul><li>POBLACION DE LA GENERACION: 7.800.000</li><li>CIRCUNSTANCIA HISTORICA: expansion masiva del internet</li><li>RASGO CARACTERISTICO: irrelevancia</li></ul>")
    }else if(this.#nacimiento>=1981&&this.#nacimiento<=1993){
        document.writeln("<br>eres de la generacion Y!")
        document.writeln("<ul><li>POBLACION DE LA GENERACION: 7.200.000</li><li>CIRCUNSTANCIA HISTORICA: inicio de la digitalizacion</li><li>RASGO CARACTERISTICO: frustracion</li></ul>")
    }else if(this.#nacimiento>=1969&&this.#nacimiento<=1980){
        document.writeln("<br>eres de la generacion X!")
        document.writeln("<ul><li>POBLACION DE LA GENERACION: 9.300.000</li><li>CIRCUNSTANCIA HISTORICA: Crisis del 73 y transicion española</li><li>RASGO CARACTERISTICO: Obsesion por el exito</li></ul>")
    }else if (this.#nacimiento>=1949&&this.#nacimiento<=1968){
        document.writeln("<br>eres de la generacion Baby Boom!")
        document.writeln("<ul><li>POBLACION DE LA GENERACION: 12.200.000</li><li>CIRCUNSTANCIA HISTORICA: paz y explosion demografica</li><li>RASGO CARACTERISTICO: ambicion</li></ul>")
    }else if (this.#nacimiento>=1930&&this.#nacimiento<=1948){
        document.writeln("<br>eres de la generacion Silent Generation(los niños de la postguerra)")
        document.writeln("<ul><li>POBLACION DE LA GENERACION: 6.300.000</li><li>CIRCUNSTANCIA HISTORICA: conflictos belicos</li><li>RASGO CARACTERISTICO: Austeridad</li></ul>")
    }else{
        document.writeln("<br>lo sentimos, los datos de su generacion no se encuentran en nuestra base de datos.")
    }
  }
  esMayorDeEdad(){
    if(this.#edad<18){
        document.writeln("<br>eres menor de edad")
    }else{
        document.writeln("<br>eres mayor de edad")
    }
  }
  MostrarDatos(){
    document.writeln("<ul><li>nombre: ",this.#nombre,"</li><li>edad: ",this.#edad,"</li><li>dni: ",this.#dni,"</li><li>sexo: ",this.#sexo,"</li><li>peso: ",this.#peso,"</li><li>altura :",this.#altura,"</li><li>nacimiento: ",this.#nacimiento,"</li></ul>")
  }
  generarDNI(){
    let dniGenerado =Math.floor(Math.random() * (99999999 - 1) + 1);
    document.writeln("<br>tu dni es ",dniGenerado)
  }
}
//personas
const personaUno = new Persona("juan",31,"consultar abajo","H","70kg","180cm",1994)
const personaDos = new Persona("malena",3,"consultar abajo","F","13kg","100cm",2022)
document.writeln("<h2>primera persona</h2>")
personaUno.MostrarDatos()
personaUno.esMayorDeEdad()
personaUno.generarDNI()
personaUno.mostrarGeneracion()
document.writeln("<h2>segunda persona</h2>")
personaDos.MostrarDatos()
personaDos.esMayorDeEdad()
personaDos.generarDNI()
personaDos.mostrarGeneracion()
/* Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión",
 y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes
  valores para sus propiedades y llama a sus métodos "saludar" y "despedirse". */
  class persona{
    #nombre
    #edad
    #profesion
    constructor(nombrep,edadp,profesionp){
        this.#nombre = nombrep
        this.#edad = edadp
        this.#profesion = profesionp
    };
    //metodos
    saludar(){
     document.writeln("<br>",this.#nombre,": hola, que tal, como te ha ido?, tengo ",this.#edad," y soy ",this.#profesion)
    }
    despedir(){
        document.writeln("<br>",this.#nombre,": adios, que te vaya bien, buena suerte")
    }
  }
  const personaUno = new persona("raul",34,"arquitecto");
  const personaDos = new persona("pedro",31,"actor");
console.log(personaUno)
console.log(personaDos)
personaUno.saludar()
personaDos.saludar()
personaUno.despedir()
personaDos.despedir()
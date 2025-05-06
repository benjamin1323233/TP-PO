/*Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y 
el método "emitirSonido".
 Luego, crea dos clases hijas llamadas "Perro" y "Gato"
  que hereden de "Animal" y tengan su propio método "emitirSonido".
   Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato",
 y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.  */
 class animal{
    #nombre
    #edad
    constructor(nombrep,edadp){
        this.#nombre=nombrep
        this.#edad=edadp
    }
    //getters
    get getnombre(){
        return this.#nombre  }
        get getedad(){
            return this.#edad  }
    //setters
    set setNombre(nuevoNombre){
        this.#nombre=nuevoNombre
    }
    set setEdad(nuevaEdad){
     this.#edad=nuevaEdad
    }
    //metodo
    emitirSonido(){
        document.writeln("emitir  sonido")
    }
 }
 class perro extends animal{
    constructor(nombrep,edadp){
        super(nombrep,edadp)
    }
//metodo
emitirSonido(){
    document.writeln("<br>Guau Guau! ",)
}
 }
 class gato extends animal{
    constructor(nombrep,edadp){
        super(nombrep,edadp)
    }
//metodo
emitirSonido(){
    document.writeln("<br>Miau Miau!")
}
 }
 //creacion de los animales
 const pug = new perro("rodolfo","7 años")
 const siberiano = new gato("michilun","2 años")
 document.writeln("<br>",pug.getnombre," tiene ",pug.getedad)
 pug.emitirSonido()
 document.writeln("<br>",siberiano.getnombre," tiene ",siberiano.getedad)
 siberiano.emitirSonido()
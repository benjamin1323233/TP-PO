/*Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */
class libros {
    #ISBN
    #Titulo
    #Autor
    #NumeroPaginas
    constructor(ISBNP,titulop,Autorp,paginasp){
        this.#ISBN = ISBNP
        this.#Titulo = titulop
        this.#Autor = Autorp
        this.#NumeroPaginas = paginasp
    }
    //getters
    get getPaginas() {
        return this.#NumeroPaginas;
      }
      get getNombre() {
        return this.#Titulo;
      }
    //metodos
    MostrarDatos(){
        document.writeln("<br>El libro ",this.#Titulo," con ISBN ",this.#ISBN," creado por el autor ",this.#Autor," tiene ",this.#NumeroPaginas," páginas")
    }
}
const libroUno = new libros(123456,"One Piece","Eichiro Oda",90)
const libroDos = new libros(987654,"SLAM DUNK","Takehiko Hinoue",75)
libroUno.MostrarDatos();
libroDos.MostrarDatos();
if(libroUno.getPaginas<libroDos.getPaginas){
    document.writeln("<br>",libroDos.getNombre," es mas largo que ", libroUno.getNombre)
}else{
    document.writeln("<br>",libroUno.getNombre," es mas largo que ", libroDos.getNombre)
}


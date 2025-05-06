/*Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
 */
//----------------------------------------------------------------------------------------------------------------
//crear una clase contacto con las propiedades nombre y un telefonno
//una clase agenda,propiedades tamanio,contactos=()
//metodo aniadir contacto
//aniadirContacto(contacto){contacto.push(contacto)}
const contactos = []
const largoAgenda = parseInt(prompt("ingresa de que largo quieres realizar tu lista de contactos"))
do{
class contacto {
  #Nombre;
  #Telefono;
  constructor(nombrep, telefonop) {
    this.#Nombre = nombrep;
    this.#Telefono = telefonop;
  }
  //setters y getters
  get getNombre(){
    return this.#Nombre
  }
  get getTelefono(){
    return this.#Telefono
  }
  set setNombre(nuevoSetNombre){
    this.#Nombre = nuevoSetNombre
  }
  set setTelefono(nuevoSetTelefono){
    this.#Nombre = nuevoSetTelefono
  }
}
class agenda{
    #largo
    #contactos
    constructor(){
        this.#largo=largoAgenda
        this.#contactos=contactos
    }
    //getters y setters
    get getlargo(){
        return this.#largo
    }
    get getcontactos(){
        return this.#contactos
    }
    set setLargo(nuevoLargo){
       this.#largo= nuevoLargo
    }
    set setContactos(nuevoContactos){
        this.#contactos= nuevoContactos
     }
     //metodos
     
}
const opcion = parseInt(
    prompt(
      "seleccione una opcion: <ul><li>a</li>b<li>c</li>d<li>e</li>f<li>g</li><li>h</li><li>i</li><li>j</li></ul>"
    )
  );
  switch (opcion) {
    case 1:
      break;
    case 2:
      break;
      default:
        document.writeln("ingresaste un valor no valido")
    }
}while(confirm("quieres realizar otra operacion?"))


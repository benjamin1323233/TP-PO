/*crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones,
 esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión,
  además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información 
  en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, 
lista de pasajeros. Los aviones tienen el método abordar el cual permite que un
 pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario 
 mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
 */
/*
agendaLlena() {
      return this.contactos.length >= this.#largo;
    } */
class aeropuerto{
    #nombreAeropuerto
    #listaAviones
    constructor(nombrep){
        this.#nombreAeropuerto=nombrep
        this.#listaAviones=[]
    }
    //setters
    set setNombreAeropuerto(nuevonombre){
        this.#nombreAeropuerto=nuevonombre
    }
   // getters
   get getNombreaeropuerto(){
    return this.#nombreAeropuerto
   }
   get getNombreaeropuerto(){
    return this.#nombreAeropuerto
   }
   aniadirAvion(avion) {
    if(this.#listaAviones.some(
        (c) => c.getNombre.toLowerCase() === avion.getNombre.toLowerCase()
      )){
        document.writeln("este avion ya existe")
      }else{
      this.#listaAviones.push(avion);}
  }
  buscarAvion(nombre) {
    const encontrado = this.#listaAviones.find(
      (encontrar) => encontrar.getNombre.toLowerCase() === nombre.toLowerCase()
    );
    if (encontrado) {
      console.log(`el avion ${getnombreavion} ha sido enontrado, se dirige a  ${getDestino} y tiene una capacidad de ${getcapacidad}`);
      document.writeln(`el avion ${getnombreavion} ha sido enontrado, se dirige a  ${getDestino} y tiene una capacidad de ${getcapacidad}`)
    } else {
      console.log(`No se encontró el avion con nombre ${nombre}.`);
      document.writeln(`No se encontró el avion con nombre ${nombre}.`)
    }
  }
}
class avion{
    #nombreavion
    #destino
    #capacidadavion
    #listapasajeros
    constructor(nombrep,destinop,){
     this.#nombreavion=nombrep
     this.#capacidadavion= 10
     this.#destino= destinop
     this.#listapasajeros= []
    }
    //setters
    set setNombreAvion(nuevonombre){
        this.#nombreavion= nuevonombre
    }
    set setnuevacapacidad(nuevacapacidad){
        this.#capacidadavion= nuevacapacidad
    }
    set setNombreDestino(nuevonombre){
        this.#destino= nuevonombre
    }
    set setPasajeros(nuevospasajeros){
        this.#listapasajeros= nuevospasajeros
    }
    get getnombreavion(){
        return this.#nombreavion
    }
    get getcapacidad(){
        return this.#capacidadavion
    }
    get getDestino(){
        return this.#destino
    }
    get getpasajeros(){
        return this.#listapasajeros
    }
    //metodos
    abordar(){
      if( this.#listapasajeros.length < this.#capacidadavion){
       this.#listapasajeros.push("pasajero")
       console.log(this.#listapasajeros)
      }
    }
}
//Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
const AeropuertoInternacional = new aeropuerto("Aeropuerto internacional")
const avionuno = new avion("gpairline 910","madrid")
const aviondos = new avion("jet privado 43","shibuya")
const aviontres = new avion("qatar airline 1231","miami")
AeropuertoInternacional.aniadirAvion(avionuno)
AeropuertoInternacional.aniadirAvion(aviondos)
AeropuertoInternacional.aniadirAvion(aviontres)
AeropuertoInternacional.buscarAvion("jet privado 43")
AeropuertoInternacional.buscarAvion("vuelo11")
avionuno.abordar()
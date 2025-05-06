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
const largoAgenda = parseInt(
    prompt("Ingresa de qué largo quieres realizar tu lista de contactos:")
  );
  
  class Contacto {
    #Nombre;
    #Telefono;
    constructor(nombre, telefono) {
      this.#Nombre = nombre;
      this.#Telefono = telefono;
    }
  
    get getNombre() {
      return this.#Nombre;
    }
  
    get getTelefono() {
      return this.#Telefono;
    }
  
    set setNombre(nuevoNombre) {
      this.#Nombre = nuevoNombre;
    }
  
    set setTelefono(nuevoTelefono) {
      this.#Telefono = nuevoTelefono;
    }
  }
  
  class Agenda {
    #largo;
    contactos;
    constructor() {
      this.#largo = largoAgenda || 10;
      this.contactos = [];
    }
  
    get getLargo() {
      return this.#largo;
    }
  
    set setLargo(nuevoLargo) {
      this.#largo = nuevoLargo;
    }
  
    aniadirContacto(contacto) {
      if (this.agendaLlena()) {
        console.log("La agenda está llena. No se puede añadir más contactos.");
      } else if (this.existeContacto(contacto)) {
        console.log("El contacto ya existe.");
      } else {
        this.contactos.push(contacto);
        console.log("Contacto añadido correctamente.");
      }
    }
  
    existeContacto(contacto) {
      return this.contactos.some(
        (c) => c.getNombre.toLowerCase() === contacto.getNombre.toLowerCase()
      );
    }
  
    listarContactos() {
      if (this.contactos.length === 0) {
        console.log("La agenda está vacía.");
      } else {
        console.log("Lista de contactos:");
        this.contactos.forEach((c) => {
          console.log(`Nombre: ${c.getNombre}, Teléfono: ${c.getTelefono}`);
        });
      }
    }
  
    buscarContacto(nombre) {
      const encontrado = this.contactos.find(
        (c) => c.getNombre.toLowerCase() === nombre.toLowerCase()
      );
      if (encontrado) {
        console.log(`Teléfono de ${nombre}: ${encontrado.getTelefono}`);
      } else {
        console.log(`No se encontró el contacto con nombre ${nombre}.`);
      }
    }
  
    eliminarContacto(contacto) {
      const index = this.contactos.findIndex(
        (c) => c.getNombre.toLowerCase() === contacto.getNombre.toLowerCase()
      );
      if (index !== -1) {
        this.contactos.splice(index, 1);
        console.log("Contacto eliminado.");
      } else {
        console.log("El contacto no se encuentra en la agenda.");
      }
    }
  
    agendaLlena() {
      return this.contactos.length >= this.#largo;
    }
  
    huecosLibres() {
      return this.#largo - this.contactos.length;
    }
  }
  
  // Menú interactivo
  const miAgenda = new Agenda();
  
  do {
    const opcion = parseInt(
      prompt(`Selecciona una opción: 
  1 - Añadir contacto
  2 - Verificar si un contacto existe
  3 - Listar contactos
  4 - Buscar contacto por nombre
  5 - Eliminar contacto
  6 - Verificar si la agenda está llena
  7 - Ver huecos libres`)
    );
  
    switch (opcion) {
      case 1:
        const nombre1 = prompt("Introduce el nombre del contacto:");
        const telefono1 = prompt("Introduce el teléfono del contacto:");
        miAgenda.aniadirContacto(new Contacto(nombre1, telefono1));
        break;
      case 2:
        const nombre2 = prompt("Introduce el nombre del contacto a verificar:");
        const existe = miAgenda.existeContacto(new Contacto(nombre2, ""));
        alert(existe ? "El contacto existe." : "El contacto no existe.");
        break;
      case 3:
        miAgenda.listarContactos();
        break;
      case 4:
        const nombreBuscar = prompt("Introduce el nombre a buscar:");
        miAgenda.buscarContacto(nombreBuscar);
        break;
      case 5:
        const nombreEliminar = prompt("Introduce el nombre del contacto a eliminar:");
        miAgenda.eliminarContacto(new Contacto(nombreEliminar, ""));
        break;
      case 6:
        alert(miAgenda.agendaLlena() ? "La agenda está llena." : "La agenda tiene espacio.");
        break;
      case 7:
        alert(`Huecos disponibles: ${miAgenda.huecosLibres()}`);
        break;
      default:
        alert("Opción no válida.");
    }
  } while (confirm("¿Deseas realizar otra operación?"));
  
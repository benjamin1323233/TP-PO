/*Escribe una clase que permita crear distintos objetos “rectángulos”,
 con las propiedades de alto y ancho, mas los métodos necesarios para modificar
  y mostrar sus propiedades, calcular el perímetro y el área
 */
class rectangulos {
  #ancho;
  #alto;
  #perimetro;
  #area;
  constructor(anchop, altop) {
    this.#ancho = anchop;
    this.#alto = altop;
    this.#perimetro = 2 * (altop + anchop);
    this.#area = altop * anchop;
  }
  //metodos
  MostrarDatos() {
    document.writeln(
      "<ul><li>Ancho: ",
      this.#ancho,
      "</li><li>alto: ",
      this.#alto,
      "</li><li>perimetro: ",
      this.#perimetro,
      "</li><li>area: ",
      this.#area,
      "</li></ul>"
    );
  }
  set setAncho(nuevoAncho){
  this.#ancho = nuevoAncho
  this.#perimetro =2 * (this.#alto + nuevoAncho);
  this.#area = this.#alto * nuevoAncho;
  }  
  set setAlto(nuevoAlto){
    this.#alto = nuevoAlto
    this.#perimetro =2 * (nuevoAlto + this.#ancho);
    this.#area = nuevoAlto * this.#ancho;
    }  
}
document.writeln("<h2>crea y muestra los valores de un rectangulo</h2>")
const primerectanculo = new rectangulos(10, 15);
primerectanculo.MostrarDatos();
document.writeln("<h3>crea y muestra un segundo rectangulo</h3>")
const segundorectangulo = new rectangulos (15,20)
segundorectangulo.MostrarDatos();
document.writeln("<h2>realiza un cambio en el alto</h2>")
segundorectangulo.setAlto = 25;
segundorectangulo.MostrarDatos();
document.writeln("<h2>realiza cambios en el ancho</h2>")
segundorectangulo.setAncho = 10;
segundorectangulo.MostrarDatos();
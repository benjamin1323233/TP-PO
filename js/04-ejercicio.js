/*Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
class productos {
  #codigo;
  #nombre;
  #precio;
  constructor(codigop, nombrep, preciop) {
    this.#codigo = codigop;
    this.#nombre = nombrep;
    this.#precio = preciop;
  }
  mostrarDatos() {
    document.writeln(
      "<ul><li>el codigo del producto es : ",
      this.#codigo,
      "</li><li>el nombre del producto es : ",
      this.#nombre,
      "</li><li>el precio es de :$",
      this.#precio,
      "</li></ul>"
    );
  }
}
const listaProductos = [];
const sal = new productos(56092, "sal de mar", 3000);
const azucar = new productos(54816, "azucar mascabo", 5500);
const harina = new productos(24854, "harina integral", 7000);
listaProductos.unshift(sal);
listaProductos.unshift(azucar);
listaProductos.unshift(harina);
console.log(listaProductos);
for (let puesto = 0; puesto <= listaProductos.length; puesto++) {
  listaProductos[puesto].mostrarDatos();
}

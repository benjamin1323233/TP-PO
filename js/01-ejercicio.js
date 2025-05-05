/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();    auto encendido
objeto.apadar()       El auto se apagó

*/
const auto = {
  color: "negro",
  marca: "ferrari",
  modelo: "ferrari italia",
  encedido: false,
  //metodos
  encender: function () {
    this.encedido = true;
    document.writeln("<br>el auto se ha encendido");
  },
  apagar: function () {
    this.encedido = false;
    console.log("<br>encendido = ", this.encedido);
    document.writeln("<br>el auto se ha apagado");
  },
};
document.writeln("color :", auto.color);
document.writeln("<br>marca :", auto.marca);
document.writeln("<br>modelo :", auto.modelo);
document.writeln("<br>encendido :", auto.encedido);
document.writeln("<h2>metodos para apagar y encender el auto</h2>");
auto.encender();
document.writeln("<br>encendido :", auto.encedido);
auto.apagar();
document.writeln("<br>encendido :", auto.encedido);

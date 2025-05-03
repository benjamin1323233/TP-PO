/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/
const cuenta = {
    titular: "axel",
    saldo:0,
    //metodos
    ingresar: function(ingreso){
        document.writeln("<br>tu anterior saldo era de ",this.saldo)
      this.saldo = this.saldo + ingreso
      document.writeln("<br>tu saldo actual es de = ", this.saldo )
    },
    extraer: function(extracction){
      if(this.saldo> extracction){
        document.writeln("<br>tu anterior saldo era de ",this.saldo)
        this.saldo = this.saldo - extracction
        document.writeln("<br>tu saldo actual es de = ", this.saldo )
      }else{
        document.writeln("<br>tu saldo es de ",this.saldo)
        document.writeln("<br>saldo insuficiente")
      }
    }
}
document.writeln("titular de la cuenta: ", cuenta.titular)
document.writeln("<br>el saldo actual es de ", cuenta.saldo)
document.writeln("<br><h3>ingreso de dinero</h3>")
cuenta.ingresar(1200);
document.writeln("<br><h3>extraccion de dinero</h3>")
cuenta.extraer(1300)
cuenta.extraer(1100)
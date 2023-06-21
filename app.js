/*
Al ejecutar el archivo, se importará el módulo "datosBici.js"
y se creará el objeto literal "dhBici" con las funcionalidades
requeridas. Luego se comprobará la funcionalidad de cada función
llamando a las mismas y mostrando los resultados utilizando console.log().
*/

// Importar el módulo datosBici.js
const bicicletas = require("./datosBici.js");

// Crear objeto literal dhBici con la lista de bicicletas importadas
const dhBici = {
  bicicletas: bicicletas,

  // Funcionalidad buscarBici
  buscarBici: function(id) {
    const bicicletaEncontrada = this.bicicletas.filter(bici => bici.id === id);
    return bicicletaEncontrada.length > 0 ? bicicletaEncontrada[0] : null;
  },

  // Funcionalidad venderBici
  venderBici: function(id) {
    const bicicleta = this.buscarBici(id);
    if (bicicleta) {
      bicicleta.estado = "vendida";
      return bicicleta;
    } else {
      return "Bicicleta no encontrada";
    }
  },

  // Funcionalidad biciParaLaVenta
  biciParaLaVenta: function() {
    return this.bicicletas.filter(bici => bici.estado !== "vendida");
  },

  // Funcionalidad totalDeVentas
  totalDeVentas: function() {
    const ventas = this.bicicletas.filter(bici => bici.estado === "vendida");
    const total = ventas.reduce((suma, bici) => suma + bici.precio, 0);
    return total;
  }
};

// Comprobar la funcionalidad de las funciones
console.log("Bicicleta con ID 3:", dhBici.buscarBici(3));
console.log("Vender bicicleta con ID 2:", dhBici.venderBici(2));
console.log("Lista de bicicletas para la venta:", dhBici.biciParaLaVenta());
console.log("Total de ventas realizadas:", dhBici.totalDeVentas());

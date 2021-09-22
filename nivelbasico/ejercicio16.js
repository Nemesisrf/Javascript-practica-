//DOM - Document Object Model JS puede acceder al DOM, y atravez de el puede modificar la pagina
//De hecho, puede modificar todos los estilos de CSS, eliminar o añadir elementos y atributos relacionados con la pagina
//Tambien reacciona a todos los eventos de la pagina
//Obtener elemento del HTML

let datos = document.getElementById("datos");
let numero = "Gene";
const nombreUsuario = () => {
  let nombre = prompt("Ingresa tu nombre");
  let nombredos = "Gene";
  alert("Tu nombre es:" + nombre);
};

nombredos;
datos.onclick = function name() {
  nombreUsuario();
};

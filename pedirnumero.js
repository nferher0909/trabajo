function pedirNumeroEnRango(1, 50) {
  var numero;
  do {
    numero = prompt("Ingrese un número entre " + 1 +" y " + 50 + ":");
    numero = Number(numero); 
  } while (numero < 1 || numero > 50);

  return numero;
}

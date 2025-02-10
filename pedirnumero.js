function pedirnumeroEnRango(1, 10) {
  var numero;
  do {
    numero = prompt("Ingrese un número entre " + 1 +" y " + 10 + ":");
    numero = Number(numero); 
  } while (numero < 1 || numero > 10);

  return numero;
}

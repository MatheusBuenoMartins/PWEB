var num1 = prompt('Insira o valor do primeiro número:');
var num2 = prompt('Insira o valor do segundo número:');
var num3 = prompt('Insira o valor do terceiro número:');

numeroMaior(num1, num2, num3);

function numeroMaior(num1, num2, num3) {
  var arrayNumeros = [num1, num2, num3];

  arrayNumeros.sort((a, b) => a - b);

  alert(arrayNumeros[arrayNumeros.length - 1]);
}

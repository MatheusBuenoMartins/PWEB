const primeiroNum = prompt("Digite o valor do primeiro número")
const segundoNum = prompt("Digite o valor do segundo número")

const soma = parseFloat(primeiroNum) + parseFloat(segundoNum)
const subtracao = parseFloat(primeiroNum) - parseFloat(segundoNum)
const divisao = parseFloat(primeiroNum) / parseFloat(segundoNum)
const resto = parseFloat(primeiroNum) % parseFloat(segundoNum)

alert("Soma: " + soma + "\n" + "Subtração: " + subtracao + "\n" + "Divisão: " + divisao + "\n" + "Resto Divisão: " + resto)
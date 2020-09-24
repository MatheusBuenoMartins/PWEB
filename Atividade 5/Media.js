const nomeAluno = prompt("Digite o nome do aluno")

const nota1 = prompt("Digite o valor da primeira nota")
const nota2 = prompt("Digite o valor da segunda nota")
const nota3 = prompt("Digite o valor da terceira nota")

const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3

alert("O aluno " + nomeAluno + " teve a média " + media)
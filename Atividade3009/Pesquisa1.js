let qtdVezes = 45;
let somaIdades = 0;
let pessoaMaisVelha = 0;
let pessoaMaisNova = 200;
let qtdePessimo = 0;
let qtdeOtimoBom = 0;
let qtdHomem = 0;
let qtdMulher = 0;

for(var i = 0; i < qtdVezes; i++){
    const idade = prompt("Digite a sua idade: ")
    const sexo = prompt("Qual é o seu sexo: F ou M ")
    const opniao = prompt("Qual é a sua opnião sobre a palestra onde: ótimo=4, bom=3, regular=2, péssimo=1: ")

    // Soma de todas idades
    somaIdades += parseInt(idade)

    // 2. Idade pessoa mais velha
    if(idade > pessoaMaisVelha) pessoaMaisVelha = idade;

    // 3. Idade pessoa mais nova
    if(idade < pessoaMaisNova) pessoaMaisNova = idade;

    // 4. Quantidade pessoas responderam pessimo
    if(parseInt(opniao) == 1 ) qtdePessimo += 1; 

    // Soma opnião ótimo e bom
    if(parseInt(opniao) == 4 || parseInt(opniao) == 3) qtdeOtimoBom += 1;

    // 6. Número de mulheres e Número de homens
    if(sexo == 'F' || sexo == 'f') {
        qtdMulher += 1;
    } else {
        qtdHomem += 1;
    }
}

// 1. Media da idade das pessoas
const media = somaIdades / qtdVezes;

// 5. Porcentagem pessoas responderam ótimo e bom
const porcentOtimoBom = (100 * qtdeOtimoBom) / qtdVezes;

alert(`
    Média da idade : ${media}
    Idade pessoa mais velha : ${pessoaMaisVelha}
    Idade pessoa mais nova : ${pessoaMaisNova}
    Quantidade de pessoas que responderam péssimo: ${qtdePessimo} 
    Porcentagem de ótimo e bom: ${porcentOtimoBom}%
    Número de mulheres que responderam ao questionário: ${qtdMulher}
    Número de homens que responderam ao questionário: ${qtdHomem}
`)     

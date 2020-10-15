var Aluno1 = {
    RA: '0030481823001',
    nome: 'Jorge Henrique'
}
console.log(Aluno1);
alert("Nome: " + Aluno1.nome + "\nRA: " + Aluno1.RA);

  
Aluno1.RA = '0030481823002';
Aluno1.nome = 'José Augusto';
console.log(Aluno1);
alert("Nome: " + Aluno1.nome + "\nRA: " + Aluno1.RA);

Aluno1['RA'] = '0030481823003';
Aluno1['nome'] = 'Maria Luiza';
console.log(Aluno1);
alert("Nome: " + Aluno1.nome + "\nRA: " + Aluno1.RA);
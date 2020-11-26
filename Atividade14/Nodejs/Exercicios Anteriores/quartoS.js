const fs = require('fs');
const data = fs.readFileSync('file.txt');
// A EXECUÇÃO É BLOQUEADA AQUI ATÉ O ARQUIVO SER LIDO
console.log(data.toString());
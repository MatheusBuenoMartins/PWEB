// Parte 1
function Retangulo (x, y) {
  this.base = x;
  this.altura = y;
  this.calcArea = function () {
    return this.base * this.altura;
  }
}

const quadradoQualquer = new Retangulo (2, 3);

console.log(quadradoQualquer.calcArea());

// Parte 2
function Conta (nome, banco, conta, saldo) {
  this.nome = nome;
  this.banco = banco;
  this.conta = conta;
  this.saldo = saldo;
}

function Corrente (nome, banco, conta, saldo, saldoEspecial) {
  Conta.call(this, nome, banco, conta, saldo);
  this.saldoEspecial = saldoEspecial;
  this.setSaldoEspecial = function (novoSaldo) {
    return this.saldoEspecial = novoSaldo;
  }
  this.getSaldoEspecial = function () {
    return this.saldoEspecial;
  }
}

function Poupanca (nome, banco, conta, saldo, juros, dataVencimento) {
  Conta.call(this, nome, banco, conta, saldo);
  this.juros = juros;
  this.dataVencimento = dataVencimento;
  this.setPoupanca = function(juros, dataVencimento) {
    this.juros = juros;
    this.dataVencimento = dataVencimento;
  }
  this.getPoupanca = function () {
    return `juros : ${this.juros} 
  data vencimento : ${this.dataVencimento}`
  }
}


const matheus = new Poupanca('Matheus', 'Santander', 10485, 1950.55, 5, "10/08")

matheus.setPoupanca(5, "10/09")
console.log(matheus.getPoupanca())

// TIPOS DE DADOS

var nome = 'Ana' // String

var idade = 22 // Number

var valorLogico = true // Boolean, que pode ser true ou false

var listaDeNomes = ['Anna', 'Davi', 'Brenda', 'Nandara'] // Array

var valorInicial = null

var pessoa = {
  idade: 22,
  nome: 'Brenda',
  trabalho: 'não trabalha',
  faculdade: 'reprovada'
}

var indefinida = undefined

var trabalho

console.log(typeof trabalho)

// OPERADORES ARITIMÉTICOS

// + soma
var soma = 2 + 2
console.log('2 + 2 = ' + soma)

// - subtração
var diferenca = 2 - 1
console.log('2 - 1 = ' + diferenca)

// * multiplicação
var resultadoMultiplicacao = 2 * 4
console.log('2 * 4 = ' + resultadoMultiplicacao)

// / divisão
var resultadoDivisao = 8 / 2
console.log('8 / 2 = ' + resultadoDivisao)

// ** potencia
var resultadoPotencia = 2 ** 3
console.log('2 ** 3 = ' + resultadoPotencia)

// % resto
var resultadoResto = 5 % 2
console.log('5 % 2 = ' + resultadoResto)

// OPERADORES LÓGICOS

// == igualdade
var eIgual = 2 == 2
console.log(eIgual)

// != diferença
var eDiferente = 2 != 2
console.log(eDiferente)

// === igualdade estrita
var temOMesmoTipo = 2 === '2'
console.log(temOMesmoTipo)

// diferença estrita
var eDiferenteETemOmesmoTipo = 2 !== '2'
console.log(eDiferenteETemOmesmoTipo)

// maior que
var maiorQue = 3 > 1
console.log(maiorQue)

// menor que
var menorQue = 2 < 3
console.log(menorQue)

// maior ou igual
var maiorOuIgual = 2 >= 2
console.log(maiorOuIgual)

// menor ou igual
var menorOuIgual = 4 <= 4
console.log(menorOuIgual)
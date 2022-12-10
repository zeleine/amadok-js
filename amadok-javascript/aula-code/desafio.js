var numero1 = 13
var numero2 = 14
var resultado = numero1 + numero2

function retornaResultado() {
    if (resultado % 2 === 0) {
        return 'O resultado é Par.'
    } else if (resultado % 2 === 1) {
        return 'O resultado é Ímpar.'
    } 
}

var statusResultado = retornaResultado()

console.log(statusResultado)
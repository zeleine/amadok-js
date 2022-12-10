var idade = 20

function returnsStatusIdade() {
    if(idade > 0 && idade <= 18) {
        return "você é uma criança"
    } else if(idade > 10 && idade <=17) {
        return 'você é um adolescente'
    } else {
        return 'você é um adulto'
    }
}

var statusIdade = retornarStatusIdade()

console.log(StatusIdade)


var numero = 10

if (numero % 2 === 0) {
    console.log("O número é par")
} else {
    console.log("O número é impar")
}

//ou com dois if (mas é melhor com else)

// Switch - CASE

var idade = 10

switch(idade) {
    case 10: {
        console.log("você é uma criança")
        break;
    }

    case 18: {
        console.log("você atingiu a maioridade")
    }

    default: {
        console.log("Idade não reconhecida")
    }
}

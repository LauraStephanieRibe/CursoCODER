// Exercicio 1
function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1 * operador2, operador1 / operador2)
}


calcularOperacoes(8, 2)
// exercicio 2 

function classificaTriangulos(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Equilatero'
    } else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return "Isóceles"
    } else {
        return "Escaleno"
    }
}

console.log(classificaTriangulos(6, 6, 6))
console.log(classificaTriangulos(6, 6, 4))
console.log(classificaTriangulos(6, 4, 2))

// exercicos 3

function valores (base, expoente) {
    let resultado = Math.pow(base, expoente)
    return resultado
}

console.log(valores(2, 4))

// Exercicios 4

function divisao(dividendo, divisor) {
    console.log('Resultado é ' + Math.floor(dividendo/divisor));
    console.log(`O resto é ${dividendo % divisor}` )
}

console.log(divisao(13, 2))

// Exercicios 5

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.3 + 0.1)
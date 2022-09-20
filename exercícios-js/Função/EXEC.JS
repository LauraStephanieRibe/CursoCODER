function calcularValores(a, b) {
    console.log(a + b, a - b, a * b, a / b)

}

calcularValores(8, 2)

//2

function triangulos(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return "Equilatero"
    } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        return "Isóseles"
    } else {
        return "Escaleno "
    }
}

console.log(triangulos(6, 6, 6))
console.log(triangulos(6, 6, 4))
console.log(triangulos(6, 4, 2))

// 3

function valores(base, expoente) {
    let resultado = Math.pow(base, expoente)
    return resultado
}

console.log(valores(8, 2))

// 4

function operacao(dividendo, divisor) {
    console.log('O resultado é ' + Math.floor(dividendo / divisor))
    console.log(` O resto é ${dividendo % divisor}`)
}

operacao(13, 2)

// 5

function resultadoValor(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace('.', ',')}`
    console.log(valorEmReais)

}

resultadoValor(1.300004)

// 6

function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao)
}

function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao
}

console.log(jurosSimples(10, 10 / 100, 2))
console.log(jurosComposto(100, 10 / 100, 2))

// 7 - Não conseguir realizar nem enteder 

function formulaDeBhaskara(ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        return "Delta é negativo"
    }
    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados
}

console.log(formulaDeBhaskara(1, 3, 2))
console.log(formulaDeBhaskara(3, 1, 2))

// 8

let pontuacoesBasquete = "10 20 20 8 25 3 0 30 1"

function avaliarPontuacoes(pontuacoesBasquete) {
    let pontuacoes = pontuacoesBasquete.split(",")
    let quantidadeQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            quantidadeQuebraDeRecords++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [quantidadeQuebraDeRecords, piorJogo]
}

console.log(avaliarPontuacoes(pontuacoesBasquete))

//9

function notasAlunos(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`)
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`)
    }
}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

notasAlunos(100)
notasAlunos(30)
notasAlunos(5)
notasAlunos(88)
notasAlunos(61)

// 10

function verficarNumero(numero) {
    if (numero % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verficarNumero(3))
console.log(verficarNumero(2))
console.log(verficarNumero(135))

//11

function calcularAnoBissexto(ano) {
    if (ano <= 0) {
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(2021))
console.log(calcularAnoBissexto(2022))
console.log(calcularAnoBissexto(2024))

// 12

function algoritmo(numero) {
    if (numero == 0) {
        return 1
    } else {
        return numero * algoritmo(numero - 1)
    }
}

console.log(algoritmo(10))

// 13


function diasDaSemana(numero) {
    switch (numero) {
        case 1:
            return 'Fim de semana'
            break;

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
            break;
        case 7:
            return 'Fim de semana'
        default:
            return " Dia inválido"
    }
}

console.log(diasDaSemana(1))
console.log(diasDaSemana(2))
console.log(diasDaSemana(3))
console.log(diasDaSemana(4))
console.log(diasDaSemana(5))
console.log(diasDaSemana(6))
console.log(diasDaSemana(7))
console.log(diasDaSemana())

// 14

function venderFruta(fruta) {
    switch (fruta) {
        case 'Maçã':
            console.log('Não vendemos essa fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'Melancia': ('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Fruta invalida')
    }
}

venderFruta('Maçã')
venderFruta('kiwi')
venderFruta('Melancia')
venderFruta('Morango')

// 15

function comprarCarro(carro) {
    switch (carro) {
        case 'Hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'Sedans':
        case 'Motocicletas':
        case 'Caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

comprarCarro('Sedans')
comprarCarro('Caminhonetes')
comprarCarro('Motocicletas')
comprarCarro('Hatch')
comprarCarro('Corola')

// 16

function calculadora(valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2
            break
        case '-':
            return valor1 - valor2
            break
        case '*':
            return valor1 * valor2
            break
        case '/':
            return valor1 / valor2
            break
        default:
            return 'Operação invalida'
    }
}

console.log(calculadora(2, '+', 6))
console.log(calculadora(12, '-', 6))
console.log(calculadora(2, '*', 6))
console.log(calculadora(24, '/', 6))
console.log(calculadora(2, 'a', 6))

// 17
function trabalho(plano, atualSalario) {
    switch (plano) {
        case 'A':
            return atualSalario * 1.1
            break
        case 'B':
            return atualSalario * 1.15
            break
        case 'C':
            return atualSalario * 1.2
        default:
            return 'Plano invalido'
    }
}

console.log(trabalho('A', 2000))
console.log(trabalho('B', 1000))
console.log(trabalho('C', 1000))
console.log(trabalho('D', 1000))

// 18

function numeroPorExtenso(numero) {
    switch (numero) {
        case '0':
            console.log('Zero')
            break
        case '1':
            console.log('Um')
            break
        case '2':
            console.log('Dois')
            break
        case '3':
            console.log('Três')
            break
        case '4':
            console.log('Quatro')
            break
        case '5':
            console.log('Cinco')
            break
        case '6':
            console.log('Seis')
            break
        case '7':
            console.log('Sete')
            break
        case '8':
            console.log('Oito')
            break
        case '9':
            console.log('Nove')
            break
        case '10':
            console.log('Dez')
            break
        default:
            console.log('Número fora do intervalo')

    }
}

numeroPorExtenso('0')
numeroPorExtenso('1')
numeroPorExtenso('2')
numeroPorExtenso('3')
numeroPorExtenso('4')
numeroPorExtenso('5')
numeroPorExtenso('6')
numeroPorExtenso('7')
numeroPorExtenso('8')
numeroPorExtenso('9')
numeroPorExtenso('10')
numeroPorExtenso('11')

// 19

function cardapio(codigo, quantidadeDoProduto) {
    switch (codigo) {
        case '100':
            return quantidadeDoProduto * 3
            break
        case '200':
            return quantidadeDoProduto * 4
            break
        case '300':
            return quantidadeDoProduto * 5.50
            break
        case '400':
            return quantidadeDoProduto * 7.50
            break
        case '500':
            return quantidadeDoProduto * 3.50
            break
        case '600':
            return quantidadeDoProduto * 2.80
            break
        default:
            return 'Produto não existente'

    }
}

console.log(cardapio('100', 4))
console.log(cardapio('200', 2))
console.log(cardapio('300', 3))
console.log(cardapio('400', 2))
console.log(cardapio('500', 2))
console.log(cardapio('600', 2))
console.log(cardapio('700', 2))

//20

function dinheiro(sacarDinheiro) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(sacarDinheiro)
    while (sacarDinheiro >= valorNota) {
        switch (valorNota) {
            case 100:
                sacarDinheiro -= 100
                contador100++
                break
            case 50:
                sacarDinheiro -= 50
                contador50++
                break
            case 10:
                sacarDinheiro -= 10
                contador10++
                break
            case 5:
                sacarDinheiro -= 5
                contador5++
                break
            case 1:
                sacarDinheiro -= 1
                contador1++
                break
        }
        valorNota = calcularValorNota(sacarDinheiro)
    }

    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(sacarDinheiro) {
    if (sacarDinheiro >= 100) {
        return 100
    } else if (sacarDinheiro >= 50) {
        return 50
    } else if (sacarDinheiro >= 10) {
        return 10
    } else if (sacarDinheiro >= 5) {
        return 5
    } else if (sacarDinheiro >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''
    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }
    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }
    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10`
    }
    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5`
    }
    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1`
    }
    return resultado
}

console.log(dinheiro(151))

// 21

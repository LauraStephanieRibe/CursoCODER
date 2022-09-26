function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}

console.log(cumprimentar('Leonardo'))

// 2

function converterIdadeEmAnosParaDias(idadeEmAnos) {
    const diasDoAno = 365
    return diasDoAno * idadeEmAnos
}

console.log(converterIdadeEmAnosParaDias(25))

// 3

function calcularSalario(horasTrabalhadas, valorPorHora) {
    return ` Salário igual a R$ ${horasTrabalhadas * valorPorHora}.`
}

console.log(calcularSalario(46, 40.50))

// 4

function nomeDoMes(mes) {
    switch (mes) {
        case 1:
            return 'Janeiro'
            break
        case 2:
            return 'Fevereiro'
            break
        case 3:
            return 'Março'
            break
        case 4:
            return 'Abril'
            break
        case 5:
            return 'Maio'
            break
        case 6:
            return 'Junho'
            break
        case 7:
            return 'Julho'
            break
        case 8:
            return 'Agosto'
            break
        case 9:
            return 'Setembro'
            break
        case 10:
            return 'Outubro'
            break
        case 11:
            return 'Novembro'
            break
        case 12:
            return 'Dezembro'
            break
        default:
            return 'Mês invalido'
    }
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(3))
console.log(nomeDoMes(5))
console.log(nomeDoMes(7))
console.log(nomeDoMes(13))

// 5

function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) {
        return false
    } else {
        return primeiro >= segundo
    }
}

console.log(maiorOuIgual(8, '7'))

// 6

function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "Boolean") {
        return !valor
    } else if (tipo == "number") {
        return -valor
    } else {
        return 'Booleano ou números esperado, mas o parâmetro e do tipo string'
    }
}

console.log(inverso(12))

// 7

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) return (numero >= minimo && numero <= maximo) || (numero == minimo || numero == maximo)
    return numero > minimo && numero < maximo
}

console.log(estaEntre(16, 100, 160))

// 8
function multiplicar(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) {
        return 0
    } else {
        return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador - 1)
    }
}

console.log(multiplicar(0, 3))
console.log(multiplicar(2, 6))
console.log(multiplicar(2, 8))

//9
function repeticao(repetir, quantidadeDeVezes) {
    let resultado = []

    for (let i = 0; i < quantidadeDeVezes; i++) {
        resultado.push(repetir)
    }
    return resultado
}

console.log(repeticao('Olá', 3))

// 10

function simboloMais(quantidade) {
    let resultado = ""

    for (let i = 0; i < quantidade; i++) {
        resultado += "+"
    }
    return resultado
}

console.log(simboloMais(6))

// 11

function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()

    return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([8, 9, 5, 'Tchau']))

// 12

function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]

    return copia
}

console.log(removerPropriedade({ a: 1, b: 2 }, "a"))

// 13
function filtrarNumeros(array) {
    return array.filter(item => typeof item === "number")
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))

// 14

function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resutado = chaves.map(chave => [chave, objeto[chave]])

    return resutado
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}))

// 15

function receberSomenteOsParesDeIndicesPares(numeros) {
    let resultado = []
    for (let i = 0; i < numeros.length; i += 2) {
        const numeroPar = numeros[i] % 2 === 0
        if (numeroPar)
            resultado.push(numeros[i])
    }
    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

// 16

function checarAnoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0

    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))

// 17

function somarNumeros(numeros) {
    const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    return soma
}
console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))


// 18


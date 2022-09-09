// par nome/valor
const saudacao = 'Opa' // contexto léxico

function exec() {
    const saudacao = 'Falaaaa' // contexto lexico 2
    return saudacao 
}

// Objetos sãp grupos alinhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    Idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

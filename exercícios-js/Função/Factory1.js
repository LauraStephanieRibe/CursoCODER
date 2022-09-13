// const prod1 = {
//     nome: ' ...',
// precos: 45
// }

// const prod2 = {
//     nome:'...',
//     preco: 1234
// }

// Factory simples

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

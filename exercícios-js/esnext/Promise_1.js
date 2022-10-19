const prinmeiroElemento = arrayOuString => arrayOuString[0]
// const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
    .then(prinmeiroElemento)
    .then(prinmeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
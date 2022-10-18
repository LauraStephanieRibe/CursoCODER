// ES8 Object.values(pegar os valores de um objeto)  /object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notacao literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

// class
class Animal { }
class Cachorro extends Animal {
    falar() {
        return 'AU AU'
    }
}
console.log(new Cachorro().falar())
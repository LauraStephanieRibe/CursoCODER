function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notbook', 2199.40));
console.log(criarProduto('ipad', 1199.40));

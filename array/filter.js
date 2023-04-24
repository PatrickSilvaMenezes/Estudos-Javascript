const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

//filter recebe um callback

//filtro tudo
console.log(produtos.filter(p => false))

const igualMaior500 = p => {
    return p.preco >= 500
}

const isFragil = p => p.fragil 

console.log(produtos.filter(igualMaior500).filter(isFragil))
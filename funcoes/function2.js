// armazenando uma funcao em uma variavel

const imprimirSoma = function(a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)


// armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))


// retorno implicito sem a palavra return

const subtracao = (a, b) => a < b ? a + b : a - b

console.log(subtracao(5,3))

// se for so um parametro nem precisa do parentesis

const imprimir = a => console.log(a)

imprimir("hello")
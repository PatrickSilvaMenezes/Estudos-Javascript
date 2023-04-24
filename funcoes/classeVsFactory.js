class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}


const p1 = new Pessoa('Patrick')
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Joao')
p2.falar()


const soma = (a ,b) => a + b

console.log(soma.call(2,3))
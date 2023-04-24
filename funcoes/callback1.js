//callback é chamar uma outra funcao dentro de uma funcao sempre que um evento ocorrer 
// nesse exemplo o evento é a cada loop do laço forEach ele executa a funcao imprimir para cada
// elemento do array fabricantes

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
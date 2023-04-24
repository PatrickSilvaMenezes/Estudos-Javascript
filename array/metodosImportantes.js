const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // massa quebrou o carro // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento no ultimo indice do array
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//deletar
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)

// metodo slice gera um novo array pegando uma parte do array original

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
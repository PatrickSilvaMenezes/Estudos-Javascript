const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

// as funcoes tem contextos lexicos bem definidos nesse exemplo
// minhaFuncao() ira mostrar no console Global pois no contexto onde ela foi definida
// não havia outro valor definido dentro da funcao para valor sendo assim a funçao busca
// no contexto mais abrangente, é por isso que ao chamar minhaFuncao() dentro da funcao exec()
// que o valor de minhaFuncao não é sobrescrito
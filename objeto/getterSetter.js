const sequencia = {
    _valor: 1, //convencao valor privado
    get valor() {return this._valor++},
    set valor(valor) {
        if(this._valor < valor){
            this._valor = valor
        }
     }
}

//chamando get
console.log(sequencia.valor, sequencia.valor)
//chamando set
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)


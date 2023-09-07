class OrdenaLista {
    static Ordenacao(lista, lista_ordenada){
        for (let i=0; i <= (lista.length - 1); i++){
            console.log((i+1) + '°: ' + lista_ordenada[i])
        }
        return lista_ordenada
    }
    
}

export default OrdenaLista
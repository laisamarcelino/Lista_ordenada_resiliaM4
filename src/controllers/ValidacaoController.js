/**
 * Verifica se a palavra digitada é válida, isto é, se não possui numeros ou caracteres especiais
 */
class VerificaCaracter {
    static ValidaPalavra(palavra){
        return /^[a-zA-Z\s]+$/.test(palavra)
    }
    
}

export default VerificaCaracter
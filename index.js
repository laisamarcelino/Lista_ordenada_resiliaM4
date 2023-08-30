import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import _ from "lodash"
import chalk from "chalk"

/**
 * Verifica se a palavra digitada é válida, isto é, se não possui numeros ou caracteres especiais
 */
function verificaCaracter(palavra){
    return /^[a-zA-Z\s]+$/.test(palavra)
}

/**
 * Cria uma instancia da interface readline usando o metodo createInterface
 * Define a entrada que sera digitada pelo usuario no terminal
 * Define a saida que sera exibida no terminal
 */
const entradaUsuario = readline.createInterface({
    input, 
    output
}) 

/**
 * Solicita ao usuario que digite uma lista de palavras
 * Encerra a entrada de palavras quando é digitado SAIR
 * cria o vetor lista com as palavras inseridas
 * Configuracao do evento line - emitido quando o usuario pressiona enter
 */

const lista = []
let lista_ordenada = []

console.log("Bem vindo(a) ao ordenador de palavras! Digite uma palavra por linha ou digite SAIR para finalizar: ")
entradaUsuario.on("line", (input)=>{
    
    if (input === "SAIR" || input === "sair"){
        entradaUsuario.close()
        lista_ordenada = _.sortBy(lista)
        console.log('Itens ordenados: ')
        for (let i=0; i <= (lista.length - 1); i++){
            console.log((i+1) + '°: ' + lista_ordenada[i])
        }
    }
    else if (verificaCaracter(input)){
        console.log("Digite outra palavra (ou digite SAIR para finalizar): ")
        lista.push(input)
    }
    else {
        console.log(chalk.red("Não é uma palavra válida! Digite outra (ou digite SAIR para finalizar): "))
    }
})



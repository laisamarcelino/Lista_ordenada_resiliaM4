import readline from 'readline';
import { stdin as input, stdout as output } from 'node:process';
import _ from "lodash"
import chalk from "chalk"
import VerificaCaracter from './ValidacaoController.js';
import ListaModel from '../models/ListaModel.js';
import OrdenaLista from './OrdenaLista.js';


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

console.log("Bem vindo(a) ao ordenador de palavras! Digite uma palavra por linha ou digite SAIR para finalizar: ")

const ListaModelada = new ListaModel

entradaUsuario.on("line", (input)=>{
    
    if (input === "SAIR" || input === "sair"){
        entradaUsuario.close()

        ListaModelada.lista_ordenada = _.sortBy(ListaModelada.lista)

        console.log('Itens ordenados: ')
        OrdenaLista.Ordenacao(ListaModelada.lista, ListaModelada.lista_ordenada)
    }
    else if (VerificaCaracter.ValidaPalavra(input)){
        console.log("Digite outra palavra (ou digite SAIR para finalizar): ")
        ListaModelada.lista.push(input)
    }
    else {
        console.log(chalk.red("Não é uma palavra válida! Digite outra (ou digite SAIR para finalizar): "))
    }
})



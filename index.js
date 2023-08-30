import express from "express"
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import lodash from "lodash"

const app = express()
const port = process.env.PORT || 3000

/**
 * Trata erro de requisicao
 */
// app.listen(port, ()=>{
//     console.log("servidor rodando")
// })

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

entradaUsuario.on("line", (input)=>{
    if (input === "SAIR" || input === "sair"){
        entradaUsuario.close()
        console.log(_.sortBy(lista))
    }
    else {
        lista.push(input)
    }
})



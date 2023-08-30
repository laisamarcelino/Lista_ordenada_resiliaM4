# Lista_ordenada_resiliaM4
Projeto individual do Módulo 4 -> Criação de uma ferramenta de ordenação de palavras em ordem alfabética

Objetivo: Fornecer uma ferramenta que receba uma lista de palavras e as devolve ordenadas de A-Z. 

Sobre: A ferramenta foi desenvolvida utilizando o Node.js, versão 18.17.1 e foi projetada para interagir no terminal do coumputador. O código roda em uma laço automático, isto é, gerado internamente pelo evento 'line' da biblioteca 'readline' até que o usuário digite a palavra 'SAIR' e evento 'close' seja chamado. Finalizado o laço, é impresso uma lista das palavras ondernadas de A-Z uma em cada linha, numeradas de 1-n. 

Bibliotecas instaladas:

* readline -> Permite interagir com a entrada padrão do terminal de forma assíncrona, facilitando a obtenção de entrada do usuário. Nesse projeto, o readline foi utilizado para solicitar ao usuário que digitasse uma lista de palavras.
 -> Documentação: https://nodejs.org/api/readline.html
 -> Versão: 1.3.0

* lodash -> Foi projetada para simplificar a manipulação e transformação de dados, fornecendo métodos utilitários para tarefas comuns como manipulação de arrays e objetos, trabalho com strings e numeros, etc. Neste projeto, a lodash foi utilizada para ordenar as palavras em ordem alfabética. 
-> Documentação: https://lodash.com/docs/4.17.15
-> Versão: 4.17.21

* chalk -> Permite adicionar cores e estilos de formatação ao texto que é impresso no terminal. Nesse projeto, o chalk foi utilizado para realçar o aviso de palavra inválida.
-> Documentação: https://www.npmjs.com/package/chalk
-> Versão: 5.3.0

Como executar o projeto:

* Passo 1: No terminal do seu computador faça o clone deste repositório utilizando o comando -> git clone https://github.com/laisamarcelino/Lista_ordenada_resiliaM4.git

* Passo 2: No terminal do Visual Studio Code (ou IDE similar) inicialize o Node.js e complete as informações solicitadas -> npm init

* Passo 3: Abra o terminal dentro da pasta Lista_ordenada_resiliaM4 e execute o programa utilizando o comando -> node index.js

* Passo 4: Digite uma palavra por linha pressionando a tecla ENTER, utilizando a palavra SAIR para encerrar o programa.
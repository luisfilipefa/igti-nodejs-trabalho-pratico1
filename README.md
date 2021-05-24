# Bootcamp IGTI Node.js - Trabalho prático 1
Desenvolver uma API para obter informações sobre marcas de carro em um arquivo JSON.
 
## Overview
Projeto bem simples para dar os primeiros passos no desenvolvimento de API's usando Node.js. A aplicação tem algumas rotas listadas abaixo e ao serem chamadas, retornam algumas informações sobre marcas de carros contidas em um arquivo JSON.
 
## Rotas
|Método|Rota|Parâmetros|Descrição|
|---|---|---|---|
|GET|/marcas/maisModelos||Lista todas as marcas em ordem descrescente de quantidade de modelos|
|GET|/marcas/menosModelos||Lista todas as marcas em ordem crescente de quantidade de modelos|
|GET|/marcas/listaMaisModelos|:amount|Lista `amount` marcas em ordem descrescente de quantidade de modelos|
|GET|/marcas/listaMenosModelos|:amount|Lista `amount` marcas em ordem crescente de quantidade de modelos|
|POST|/marcas/listaModelos|{"nomeMarca": "marca"}|Lista as informações de uma marca específica recebida via body da requisição em formato JSON|

## Como rodar localmente
### Dependências
- Node versão `14.x.x`;
### Passos
- Clonar repositório com `git clone https://github.com/luisfilipefa/igti-nodejs-trabalho-pratico1.git`;
- Instalar dependências do projeto com `yarn` ou `npm install`;
- Rodar o projeto com `yarn dev` ou `npm run dev`;

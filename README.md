<h2 align="center">
  :rocket: Bootcamp GoStack
</h2>

O GoStack é um treinamento online, prático e intensivo, no formato de bootcamp realizado pela [Rocketseat](https://rocketseat.com.br/) 💜, focado nas tecnologias NodeJS, ReactJS e React Native, e todo o ecossistema ao redor dessas ferramentas, do zero ao deploy. Incluindo testes automatizados, integração contínua, publicação nas stores, e todas as bibliotecas e frameworks importantes.

Esse repositório é dedicado às aulas e desafios realizados durante o bootcamp.

## Sobre os desafios
* __Desafio 01:__ Entrega do cronograma de estudos
* [__Desafio 02:__ ](https://github.com/tmegumi/gostack-desafio-conceitos-nodejs) Back-end para armazenar repositórios
* [__Desafio 03:__](https://github.com/tmegumi/gostack-desafio-conceitos-reactjs) Front-end web para armazenar repositórios
* [__Desafio 04:__](https://github.com/tmegumi/gostack-desafio-conceitos-react-native) Mobile app para listar e curtir repositórios
* [__[Atual] Desafio 05:__](https://github.com/tmegumi/gostack-desafio-fundamentos-node) Back-end para armazenar transações financeiras de entrada e saída.

# Desafio 05: Fundamentos de Node.js

Nesse desafio, será criada uma aplicação no __Node.js__, junto ao TypeScript, para treinar o que foi aprendido no módulo de Primeiro projeto com Node.JS, utilizando o conceito de models, repositories e services.

Essa será uma aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.

## Executando o projeto

Instale as dependências do projeto
```
yarn
```
Inicie o servidor utilizando o comando yarn
```
yarn dev:server
```
Para executar os testes do projeto, basta rodar o comando
```
yarn test
```

## Rotas da aplicação

- **`POST /transactions`**: A rota deve receber `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saídas (retiradas).
```json
// Exemplo de body
{
  "title": "Compras no mercado",
  "value": 100,
  "type": "outcome"
}
```

- **`GET /transactions`**: Essa rota retorna uma listagem com todas as transações cadastradas, junto com o valor de soma de entradas, retiradas e total de crédito. 

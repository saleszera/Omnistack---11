# Back-end BE-THE-HERO!

##### Requisitos para utilização da API :warning:

- [NodeJs](https://nodejs.org/en/download/)
- [Insomnia](https://insomnia.rest/) : Para testar as rotas


##### Ferramentas utilizadas :wrench:

- Conexão com serviços externos: **cors**
- Criação do servidor e das rotas: **express**
- Reload automatico: **nodemon**
- Conexão com banco de dados: **knex**
- Gerar ID aleatória: **crypto**

###### Ferramenta extra

- Uso do import/export: **sucrase**

###### Funcionalidades extras

1. No controller [OngController.js](https://github.com/saleszera/Omnistack-11/blob/master/aulas/backend/src/controllers/OngController.js) foram criadas as seguintes rotas:
    - Listagem de todas as ONGs, teste utilizando a rota ```http://localhost:3333/ongs```
    - Delete de ONG, uma ONG pode deletar apenas o seu proprio cadastro, teste utilizando a rota ```http://localhost:3333/ongs/(ID da ONG)```.


##### Scripts disponíveis :scroll:

- npm test: Para os testes unitarios e de integração.
- npm start: inicializa a aplicação na porta 3333
- Após a inicialização basta testar as rotas utilizando o Insomnia. As rotas estão que estão [aqui](https://github.com/saleszera/Omnistack-11/blob/master/aulas/backend/src/routes.js).<br>**Exemplo de rota:** ```http://localhost:3333/ongs```

[Voltar para inicio](https://github.com/saleszera/Omnistack-11)

# Front-end BE-THE-HERO!

##### Ferramentas utilizadas :wrench:

- Conexão com o back-end: **axios**
- Para as rotas: **BrowserRouter, Route, Switch**
- Para navegação: **Link, useHistory**
- Para armazenamento de estado: **useState**
- Para atualização da pagina: **useEffect**
- Para icones: **react-icons**
- Formatação de moeda: **Intl**

###### Funcionalidades extras
  
- Paginação;
- Para todas as funções contidas na aplicação, é verificado se o usuário está logado, caso contrário, o mesmo é redirecionado para a página de login;
- Adicionada mascara para telefone no cadastro de ONG utilizando MaskedInput do react-text-mask, veja das linhas 128 à 149, [clicando aqui](https://github.com/saleszera/Omnistack-11/blob/master/aulas/frontend/src/pages/Register/index.js);
- Adicionada a função que formata o telefone informado no cadastro de ONGs, veja das linhas 91 à 96, [clicando aqui](https://github.com/saleszera/Omnistack-11/blob/master/aulas/frontend/src/pages/Register/index.js);
- Carregamento de UFs e cidades no cadastro de ONGs:
    - Sempre que a página for recarregada o useEffect é executado e as UFs são armazenadas em um estado por meio de uma requisição HTTP na API do IBGE, veja das linhas 23 à 44, [clicando aqui](https://github.com/saleszera/Omnistack-11/blob/master/aulas/frontend/src/pages/Register/index.js);
    - Quando o usuário selecionar uma UF, é disparada uma função que faz uma nova requisição HTTP na API do IBGE que armazena em um estado todas as cidades relativas a UF selecionada, veja das linhas 151 à 162 e das linhas 70 à 89, [clicando aqui](https://github.com/saleszera/Omnistack-11/blob/master/aulas/frontend/src/pages/Register/index.js);


##### Scripts disponíveis :scroll:

- ```yarn start```: roda em modo de desenvolvimento. Abra no navegador no endereço ```http://localhost:3000``` <br>
- ```yarn build```: roda em modo de produção

[Voltar para inicio](https://github.com/saleszera/Omnistack-11)

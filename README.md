<h1>Semana Omnistack 11.0 !!!</h1>

<p>Este projeto será desenvolvido durante a semana (23/03 à 29/03)!
  O projeto se trata de uma aplicação que armazena ONGS sem fins lucrativos,
  na aplicação a ONG poderá cadastrar casos e o usuário pela plataforma mobile
  poderá entrar em contato com a ONG via WhatsApp ou email</p><br>
<p>O projeto utilizará NodeJS, ReactJS e React Native</p><br>

<h1>sobre o back-end</h1>
<p>Foi criada uma API RESTful utilizando express. Também foi utilizado o Knex para a criação da estrutura de banco de dados SQLite.</p><br>
<p>Tomei a liberdade de implementar verificações a mais e funções, como por exemplo o sucrase que possibilita o uso o import/export, além disso,
  configurei o eslint e prettier para organizar o código.
</p>

<h2>Requisitos para utilização da API</h2>
<ul>
  <li>NodeJS (<strong>recomendavel instalar versão LTS</strong>>): https://nodejs.org/en/download/</li>
  <li>Insomnia (<strong>Para testar as rotas</strong>): https://insomnia.rest/</li>
</ul>

<h2>Ferramentas utilizadas</h2>
<ul>
  <li>Conexão com serviços externos: <strong>cors</strong></li>
  <li>Criação do servidor e das rotas: <strong>express</strong></li>
  <li>Reload automatico: <strong>nodemon</strong></li>
  <li>Uso do import/export: <strong>sucrase</strong></li>
  <li>Conexão com banco de dados: <strong>knex</strong></li>
  <li>Gerar ID aleatória: <strong>crypto</strong></li>
</ul>

<h2>Scripts disponíveis</h2>
<ul>
  <li>npm start: inicializa a aplicação na porta 3333</li>
  <li>Após a inicialização basta testar as rotas que estão em <strong>./src/routes.js</strong>> utilizando "http://localhost:3333/(rotas)" no insomnia</li>
</ul>

<h1>Sobre o Font-end</h1>
<p>Front-end da aplicação "<strong>Be-The-Hero</strong>" finalizada!</p>
<h2>Ferramentas utilizadas</h2>
<h2>Requisitos para utilização da aplicação</h2>
<ul>
  <li>expo: npm install -g expo</li>
  <li>Celular com android ou IOS ou emulador</li>
</ul>

<ul>
  <li>Conexão com o back-end: <strong>axios</strong></li>
  <li>Para as rotas: <strong>BrowserRouter, Route, Switch</strong></li>  
  <li>Para navegação: <strong>Link, useHistory</strong></li>
  <li>Para armazenamento de estado: <strong>useState</strong></li>
  <li>Para atualização da pagina: <strong>useEffect</strong></li>
  <li>Para icones: <strong>react-icons</strong></li>
  <li>Formatação de moeda: <strong>Intl</strong></li>
</ul>

<h2>Scripts disponíveis</h2>
<ul>
  <li><strong>yarn start</strong>: roda em modo de desenvolvimento. Abra no navegador no endereço "http://localhost:3000" <br></li>
  <li><strong>yarn build</strong>: roda em modo de produção</li>
</ul>

<h1>Sobre o mobile</h1>
<p>Front-end da aplicação "<strong>Be-The-Hero</strong>" finalizada!</p>
<p>Aqui o usuário pode visualizar todos os casos abertos pelas ONGS e é possível entrar em contato com a mesma por meio de e-mail ou WhatsApp</p>

<h2>Ferramentas/metodologias utilizadas</h2>
<ul>
  <li>Conexão com back-end: <strong>axios</strong></li>
  <li>Navegação entre paginas: <strong>NavigationContainer, createStackNavigator, useNavigation</strong></li>
  <li>Armazenamento de estado: <strong>useState</strong></li>
  <li>Atualização da pagina: <strong>useEffect</strong></li>
  <li>Para icones: <strong>Feather do @expo/vector-icons</strong></li>
  <li>Formatação de moeda: <strong>Intl</strong></li>
  <li>Para envio de e-mail: <strong>MailComposer do expo-mail-composer</strong></li>
</ul>
<h2>Scripts disponíveis</h2>
<ul>
  <li><strong>expo start</strong>: inicia a aplicação</li>
  <li><strong>expo start</strong>: --android: Inicia a aplicação no android</li>
  <li><strong>expo start</strong>: --ios: Inicia a aplicação no IOS</li>
  <li><strong>expo start</strong>: --web: Inicia a aplicação na web</li>
</ul>
<h1 align="center" style="font-weight: bold;">🔧 Backend - Controle de Estoque de Amortecedores</h1>

<p align="center">
  <em>API REST desenvolvida com Node.js e Express, utilizando banco de dados SQLite para o gerenciamento de estoque de produtos.</em>
</p>

<p align="center">
  <a href="#tech">Tecnologias</a> • 
  <a href="#install">Como Executar</a> • 
  <a href="#routes">Endpoints</a> • 
  <a href="#integration">Integração</a> • 
  <a href="#team">Participantes</a>
</p>

<h2 id="tech">🧰 Tecnologias Utilizadas</h2>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>SQLite (via Sequelize ORM)</li>
  <li>CORS</li>
  <li>dotenv</li>
  <li>Nodemon (para desenvolvimento)</li>
</ul>

<h2 id="install">🚀 Como Executar Localmente</h2>
<ol>
  <li>Clone o repositório:</li>
  <pre><code>git clone https://github.com/CeloHelp/controle-de-estoque.git</code></pre>

  <li>Instale as dependências:</li>
  <pre><code>npm install</code></pre>

  <li>Crie um arquivo <code>.env</code> com as variáveis de ambiente básicas (opcional):</li>
  <pre><code>PORT=3000</code></pre>

  <li>Inicie o servidor com o Nodemon:</li>
  <pre><code>npm run dev</code></pre>

  <li>Acesse a API via navegador ou ferramenta como Postman:</li>
  <pre><code>http://localhost:3000</code></pre>
</ol>

<h2 id="routes">📌 Endpoints da API</h2>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Rota</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/produtos</td>
      <td>Lista todos os produtos</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/produtos</td>
      <td>Cria um novo produto</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/produtos/:id</td>
      <td>Atualiza os dados de um produto</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/produtos/:id</td>
      <td>Remove um produto do estoque</td>
    </tr>
  </tbody>
</table>

<h2 id="integration">🌐 Integração com o Frontend</h2>
<p>
  O frontend desenvolvido em React + Vite está hospedado na Vercel:<br/>
  <a href="https://controle-de-estoque-frontend-c2lfpox04-celohelps-projects.vercel.app/" target="_blank">
    https://controle-de-estoque-frontend-c2lfpox04-celohelps-projects.vercel.app/
  </a>
</p>

<p>Para rodar localmente, defina no frontend o endereço do backend via arquivo <code>.env</code>:</p>
<pre><code>VITE_API_URL=http://localhost:3000</code></pre>

<h2 id="team">👨‍💻 Participantes do Projeto</h2>
<ul>
  <li><strong>Marcelo Henrique Pacobello</strong> – RA: 24001795</li>
  <li><strong>João Victor Camargo Ribeiro</strong> – RA: 24001165</li>
</ul>

<h2>📎 Observações</h2>
<ul>
  <li>Este projeto foi desenvolvido como atividade prática da disciplina de Desenvolvimento Web.</li>
  <li>O banco de dados utilizado é o SQLite, armazenado localmente como um arquivo.</li>
  <li>A estrutura segue o padrão REST e permite fácil expansão para outros módulos.</li>
  <li>e-mail para contato: marcelo.pacobello@sou.unifeob.edu.br</li>
</ul>



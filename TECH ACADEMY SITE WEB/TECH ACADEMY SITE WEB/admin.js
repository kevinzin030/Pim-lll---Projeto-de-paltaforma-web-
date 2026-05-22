/* =========================
   INICIALIZAÇÃO ADMIN
========================= */

function initAdmin(){

  let user = JSON.parse(localStorage.getItem("logado"));

  if(!user || user.tipo !== "admin"){
    alert("Acesso negado!");
    window.location.href = "login.html";
    return;
  }

  carregarAdmin();
}


/* =========================
   TELA ADMIN
========================= */

function carregarAdmin(){

  document.getElementById("app").innerHTML = `

    <div class="dashboard">

      <h2 class="saudacao">Painel do Admin</h2>

      <!-- CRIAR USUÁRIO -->
      <div class="card">
        <h3>Criar Usuário</h3>

        <input id="nome" placeholder="Nome">
        <input id="login" placeholder="Login">
        <input id="senha" placeholder="Senha">

        <select id="tipo">
          <option value="admin">Admin</option>
          <option value="gestor">Gestor</option>
        </select>

        <button onclick="criarUsuario()">Criar</button>
      </div>

      <!-- LISTA -->
      <h3 style="margin-top:30px;">Usuários cadastrados</h3>

      <div class="cursos" id="listaUsuarios"></div>

    </div>
  `;

  listarUsuarios();
}


/* =========================
   CRIAR USUÁRIO
========================= */

function criarUsuario(){

  let nome = document.getElementById("nome").value;
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;
  let tipo = document.getElementById("tipo").value;

  if(!nome || !login || !senha){
    alert("Preencha todos os campos!");
    return;
  }

  // 🔥 evita duplicado
  if(loginExiste(login)){
    alert("Login já existe!");
    return;
  }

  let novo = { nome, login, senha };

  if(tipo === "admin"){
    admins.push(novo);
  }

  if(tipo === "gestor"){
    gestores.push(novo);
  }

  salvar();

  alert("Usuário criado com sucesso!");

  limparCampos();
  listarUsuarios();
}


/* =========================
   LISTAR USUÁRIOS
========================= */

function listarUsuarios(){

  let html = "";

  // ADMINS
  html += admins.map(a => `
    <div class="card">
      <h3>${a.nome}</h3>
      <p>👑 Admin</p>
      <p>${a.login}</p>
    </div>
  `).join("");

  // GESTORES
  html += gestores.map(g => `
    <div class="card">
      <h3>${g.nome}</h3>
      <p>🧑‍💼 Gestor</p>
      <p>${g.login}</p>
    </div>
  `).join("");

  // ALUNOS
  html += alunos.map(a => `
    <div class="card">
      <h3>${a.nome}</h3>
      <p>🎓 Aluno</p>
      <p>${a.login}</p>
    </div>
  `).join("");

  document.getElementById("listaUsuarios").innerHTML = html;
}


/* =========================
   LIMPAR CAMPOS
========================= */

function limparCampos(){
  document.getElementById("nome").value = "";
  document.getElementById("login").value = "";
  document.getElementById("senha").value = "";
}

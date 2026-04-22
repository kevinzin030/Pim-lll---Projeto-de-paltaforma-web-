function carregarAdmin(){
  document.getElementById("app").innerHTML = `
  <h2>Admin</h2>

  <input id="nome">
  <input id="login">
  <input id="senha">

  <button onclick="criarUsuario()">Criar</button>
  `;
}

function criarUsuario(){
  usuarios.push({
    nome: nome.value,
    login: login.value,
    senha: senha.value,
    tipo:"gestor"
  });

  salvar();
  alert("Criado!");
}
function criarUsuario(){

  let nome = document.getElementById("nome").value;
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;
  let tipo = document.getElementById("tipo").value;

  let novo = {
    nome,
    login,
    senha
  };

  if(tipo === "admin"){
    admins.push(novo);
  }

  if(tipo === "gestor"){
    gestores.push(novo);
  }

  salvar();

  alert("Usuário criado!");
}
function carregarAdmin(){
  document.getElementById("app").innerHTML = `
    <h2>Admin</h2>

    <input id="nome" placeholder="Nome">
    <input id="login" placeholder="Login">
    <input id="senha" placeholder="Senha">

    <select id="tipo">
      <option value="admin">Admin</option>
      <option value="gestor">Gestor</option>
    </select>

    <button onclick="criarUsuario()">Criar</button>
  `;
}

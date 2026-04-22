function login(){

  let log = document.getElementById("usuario").value;
  let sen = document.getElementById("senha").value;

  let user = admins.find(u => u.login === log && u.senha === sen);
  if(user){
    localStorage.setItem("logado", JSON.stringify({...user, tipo:"admin"}));
    return window.location.href="dashboard.html";
  }

  user = gestores.find(u => u.login === log && u.senha === sen);
  if(user){
    localStorage.setItem("logado", JSON.stringify({...user, tipo:"gestor"}));
    return window.location.href="dashboard.html";
  }

  user = alunos.find(u => u.login === log && u.senha === sen);
  if(user){
    localStorage.setItem("logado", JSON.stringify({...user, tipo:"aluno"}));
    return window.location.href="dashboard.html";
  }

  alert("Login inválido");
}


function cadastrar(){

  let nome = document.getElementById("nome").value;
  let cpf = document.getElementById("cpf").value;
  let nascimento = document.getElementById("nascimento").value;
  let userLogin = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  let novo = {
    nome,
    cpf,
    nascimento,
    login: userLogin,
    senha,
    xp: 0
  };

  alunos.push(novo);

  salvar();

  alert("Aluno cadastrado!");
  window.location.href="login.html";
}

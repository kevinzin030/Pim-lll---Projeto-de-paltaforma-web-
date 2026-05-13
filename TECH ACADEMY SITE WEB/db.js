/* =========================
   BASE DE DADOS LOCAL
========================= */

let admins = JSON.parse(localStorage.getItem("admins")) || [];
let gestores = JSON.parse(localStorage.getItem("gestores")) || [];
let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
let logsLogin = JSON.parse(localStorage.getItem("logsLogin")) || [];


/* =========================
   ADMIN PADRÃO
========================= */

function criarAdminPadrao(){
  let existe = admins.find(a => a.login === "god");

  if(!existe){
    admins.push({
      nome: "Administrador",
      login: "god",
      senha: "1234"
    });

    salvar();
  }
}


/* =========================
   GARANTIR ESTRUTURA
========================= */

function corrigirEstrutura(){

  alunos.forEach(aluno => {

    if(!aluno.cursos){
      aluno.cursos = [];
    }

    if(!aluno.xp){
      aluno.xp = 0;
    }

  });

}


/* =========================
   SALVAR DADOS
========================= */

function salvar(){
  localStorage.setItem("admins", JSON.stringify(admins));
  localStorage.setItem("gestores", JSON.stringify(gestores));
  localStorage.setItem("alunos", JSON.stringify(alunos));
  localStorage.setItem("logsLogin", JSON.stringify(logsLogin));
}


/* =========================
   VERIFICAR LOGIN EXISTENTE
========================= */

function loginExiste(login){

  return (
    admins.find(u => u.login === login) ||
    gestores.find(u => u.login === login) ||
    alunos.find(u => u.login === login)
  );
}


/* =========================
   BUSCAR USUÁRIO
========================= */

function buscarUsuario(login, senha){

  let user =
    admins.find(u => u.login === login && u.senha === senha) ||
    gestores.find(u => u.login === login && u.senha === senha) ||
    alunos.find(u => u.login === login && u.senha === senha);

  return user;
}


/* =========================
   TIPO DE USUÁRIO
========================= */

function tipoUsuario(login){

  if(admins.find(u => u.login === login)) return "admin";
  if(gestores.find(u => u.login === login)) return "gestor";
  if(alunos.find(u => u.login === login)) return "aluno";

  return null;
}


/* =========================
   LOG DE LOGIN
========================= */

function salvarLogLogin(usuario){

  logsLogin.push({
    usuario: usuario.login,
    nome: usuario.nome,
    tipo: tipoUsuario(usuario.login),
    data: new Date().toLocaleString()
  });

  salvar();
}


/* =========================
   CADASTRAR GESTOR 🔥
========================= */

function cadastrarGestor(nome, login, senha){

  if(loginExiste(login)){
    alert("Login já existe!");
    return false;
  }

  gestores.push({
    nome,
    login,
    senha
  });

  salvar();

  return true;
}


/* =========================
   CADASTRAR ALUNO 🔥
========================= */

function cadastrarAluno(nome, cpf, nascimento, login, senha){

  if(loginExiste(login)){
    alert("Login já existe!");
    return false;
  }

  alunos.push({
    nome,
    cpf,
    nascimento,
    login,
    senha,
    xp: 0,
    cursos: []
  });

  salvar();

  return true;
}


/* =========================
   MATRICULAR EM CURSO
========================= */

function matricularCurso(login, cursoId){

  let aluno = alunos.find(a => a.login === login);

  if(!aluno) return;

  if(!aluno.cursos.includes(cursoId)){
    aluno.cursos.push(cursoId);
    salvar();
  }
}


/* =========================
   LISTAGENS (ADMIN)
========================= */

function getAdmins(){
  return admins;
}

function getGestores(){
  return gestores;
}

function getAlunos(){
  return alunos;
}

function getLogs(){
  return logsLogin;
}


/* =========================
   INICIALIZAÇÃO
========================= */

criarAdminPadrao();
corrigirEstrutura();
salvar();

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

function criarAdminPadrao() {
  let existe = admins.find(a => a.login === "god");

  if (!existe) {
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

function corrigirEstrutura() {
  alunos.forEach(aluno => {

    if (aluno.xp == null) aluno.xp = 0;

    if (!aluno.foto)
      aluno.foto = "https://i.pravatar.cc/300?u=" + aluno.login;

    if (!aluno.cursos) aluno.cursos = [];
    if (!aluno.certificados) aluno.certificados = [];
    if (!aluno.notas) aluno.notas = [];
    if (!aluno.documentos) aluno.documentos = [];

    if (!aluno.dataCadastro)
      aluno.dataCadastro = new Date().toLocaleDateString("pt-BR");
  });
}

/* =========================
   SALVAR
========================= */

function salvar() {
  localStorage.setItem("admins", JSON.stringify(admins));
  localStorage.setItem("gestores", JSON.stringify(gestores));
  localStorage.setItem("alunos", JSON.stringify(alunos));
  localStorage.setItem("logsLogin", JSON.stringify(logsLogin));
}

/* =========================
   LOGIN EXISTE
========================= */

function loginExiste(login) {
  return (
    admins.find(u => u.login === login) ||
    gestores.find(u => u.login === login) ||
    alunos.find(u => u.login === login)
  );
}

/* =========================
   BUSCAR USUÁRIO
========================= */

function buscarUsuario(login, senha) {
  return (
    admins.find(u => u.login === login && u.senha === senha) ||
    gestores.find(u => u.login === login && u.senha === senha) ||
    alunos.find(u => u.login === login && u.senha === senha)
  );
}

/* =========================
   TIPO USUÁRIO
========================= */

function tipoUsuario(login) {
  if (admins.find(a => a.login === login)) return "admin";
  if (gestores.find(g => g.login === login)) return "gestor";
  if (alunos.find(a => a.login === login)) return "aluno";
  return null;
}

/* =========================
   LOG LOGIN
========================= */

function salvarLogLogin(usuario) {
  logsLogin.push({
    usuario: usuario.login,
    nome: usuario.nome,
    tipo: tipoUsuario(usuario.login),
    data: new Date().toLocaleString()
  });

  salvar();
}

/* =========================
   CADASTRAR GESTOR
========================= */

function cadastrarGestor(nome, login, senha) {
  if (loginExiste(login)) {
    alert("Login já existe!");
    return false;
  }

  gestores.push({ nome, login, senha });
  salvar();
  return true;
}

/* =========================
   CADASTRAR ALUNO
========================= */

function cadastrarAluno(nome, cpf, nascimento, login, senha) {
  if (loginExiste(login)) {
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
    foto: "https://i.pravatar.cc/300?u=" + login,
    cursos: [],
    certificados: [],
    notas: [],
    documentos: [],
    dataCadastro: new Date().toLocaleDateString("pt-BR")
  });

  salvar();
  return true;
}

/* =========================
   CURSOS / AÇÕES ALUNO
========================= */

function matricularCurso(login, curso) {
  let aluno = alunos.find(a => a.login === login);
  if (!aluno) return;

  aluno.cursos.push(curso);
  salvar();
}

function concluirCurso(login, nomeCertificado) {
  let aluno = alunos.find(a => a.login === login);
  if (!aluno) return;

  aluno.certificados.push(nomeCertificado);
  salvar();
}

function adicionarNota(login, materia, valor) {
  let aluno = alunos.find(a => a.login === login);
  if (!aluno) return;

  aluno.notas.push({ materia, valor });
  salvar();
}

function adicionarDocumento(login, documento) {
  let aluno = alunos.find(a => a.login === login);
  if (!aluno) return;

  aluno.documentos.push(documento);
  salvar();
}

function ganharXP(login, valor) {
  let aluno = alunos.find(a => a.login === login);
  if (!aluno) return;

  aluno.xp += valor;
  salvar();
}

/* =========================
   LISTAGENS
========================= */

function getAdmins() { return admins; }
function getGestores() { return gestores; }
function getAlunos() { return alunos; }
function getLogs() { return logsLogin; }

/* =========================
   ALUNO TESTE
========================= */

function criarAlunoTeste() {
  let existe = alunos.find(a => a.login === "kevin");

  if (!existe) {
    alunos.push({
      nome: "Kevin Luiz",
      cpf: "000.000.000-00",
      nascimento: "2000-01-01",
      login: "kevin",
      senha: "123",
      xp: 750,
      foto: "https://i.pravatar.cc/300?img=12",

      cursos: [
        {
          nome: "React Avançado",
          categoria: "DESENVOLVIMENTO",
          descricao: "Aprenda React moderno.",
          imagem: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
        },
        {
          nome: "UX/UI Design",
          categoria: "DESIGN",
          descricao: "Criação de interfaces modernas.",
          imagem: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
        }
      ],

      certificados: ["React_Avancado_Certificado.pdf"],

      notas: [
        { materia: "Algoritmos", valor: "9.5" },
        { materia: "Banco de Dados", valor: "8.7" }
      ],

      documentos: [
        "Contrato_Academico.pdf",
        "Historico_Escolar.pdf"
      ],

      dataCadastro: "15/05/2026"
    });

    salvar();
  }
}

/* =========================
   INICIALIZAÇÃO
========================= */

criarAdminPadrao();
corrigirEstrutura();
criarAlunoTeste();
salvar();
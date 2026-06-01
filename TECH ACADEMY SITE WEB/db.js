/* =========================
   BASE DE DADOS LOCAL
========================= */

let admins = JSON.parse(localStorage.getItem("admins")) || [];
let gestores = JSON.parse(localStorage.getItem("gestores")) || [];
let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
let logsLogin = JSON.parse(localStorage.getItem("logsLogin")) || [];


/* =========================
   CURSOS BASE
========================= */

const cursosBase = [

  {
    id: 1,

    nome: "UX e UI Design",

    categoria: "DESIGN",

    descricao:
      "Curso voltado para experiência do usuário e criação de interfaces digitais.",

    imagem:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",

    aulas: [

      {
        id: 1,

        titulo: "Fundamentos de UX",

        material: {

          titulo: "Introdução ao UX",

          conteudo: `
O UX Design é uma área muito importante no desenvolvimento de sites, aplicativos e sistemas. A sigla UX significa User Experience, que em português quer dizer “Experiência do Usuário”. O principal objetivo do UX é fazer com que o usuário tenha uma experiência boa, simples e agradável ao utilizar um sistema.

Um profissional de UX pensa em como as pessoas usam aplicativos e páginas da internet no dia a dia. Ele busca criar telas organizadas, fáceis de entender e intuitivas, para que qualquer pessoa consiga navegar sem dificuldades.

Além disso, o UX melhora a navegação, deixando menus, botões e funções mais simples de usar. Isso aumenta a satisfação do usuário e faz com que as pessoas tenham mais vontade de continuar utilizando o sistema.

A usabilidade é um fator importante no UX, pois garante facilidade e conforto no uso do sistema.

A usabilidade inclui características como inteligibilidade, aprendizado, operacionalidade e atratividade.
          `
        },

        questoes: [

          {
            pergunta:
              "A usabilidade de um sistema está relacionada principalmente a:",

            alternativas: [
              "Aumento da memória RAM",
              "Facilidade e conforto no uso do sistema",
              "Velocidade do processador",
              "Capacidade do hardware"
            ],

            correta: 1
          },

          {
            pergunta:
              "Qual requisito está diretamente relacionado à ergonomia de interfaces?",

            alternativas: [
              "Portabilidade",
              "Confiabilidade",
              "Usabilidade",
              "Interoperabilidade"
            ],

            correta: 2
          },

          {
            pergunta:
              "A usabilidade inclui características como:",

            alternativas: [
              "Inteligibilidade, aprendizado e operacionalidade",
              "Overclock e processamento paralelo",
              "Virtualização e criptografia",
              "Banco de dados e compilação"
            ],

            correta: 0
          }

        ]
      },

      {
        id: 2,

        titulo: "Princípios de UI",

        material: {

          titulo: "Introdução ao UI",

          conteudo: `
UI Design significa User Interface, ou Interface do Usuário.

O UI é responsável pela parte visual dos sistemas, aplicativos e sites.

O profissional de UI trabalha com cores, botões, tipografia, ícones e layout das páginas.
          `
        },

        questoes: [

          {
            pergunta: "O que significa UI?",

            alternativas: [
              "Ultra Interface",
              "Universal Interface",
              "User Interface",
              "User Internet"
            ],

            correta: 2
          },

          {
            pergunta:
              "Qual é o principal objetivo do UI Design?",

            alternativas: [
              "Melhorar servidores",
              "Criar interfaces visuais agradáveis",
              "Programar banco de dados",
              "Configurar redes"
            ],

            correta: 1
          }

        ]
      }

    ]
  },

  {
    id: 2,

    nome: "Desenvolvimento Web",

    categoria: "DESENVOLVIMENTO",

    descricao:
      "Curso introdutório sobre tecnologias utilizadas no desenvolvimento web.",

    imagem:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",

    aulas: [

      {
        id: 1,

        titulo: "Fundamentos do Desenvolvimento Web",

        material: {

          titulo: "Introdução ao Desenvolvimento Web",

          conteudo: `
O desenvolvimento web envolve a criação de sites, sistemas e aplicações acessadas pela internet.

O HTML é utilizado para estruturar páginas web.

O CSS é responsável pela estilização visual das páginas.

O JavaScript adiciona interatividade aos sistemas.
          `
        },

        questoes: [

          {
            pergunta:
              "Qual linguagem é utilizada para estruturar páginas web?",

            alternativas: [
              "CSS",
              "HTML",
              "Python",
              "Java"
            ],

            correta: 1
          },

          {
            pergunta:
              "Qual tecnologia é usada para estilizar páginas web?",

            alternativas: [
              "CSS",
              "SQL",
              "PHP",
              "C#"
            ],

            correta: 0
          },

          {
            pergunta:
              "O JavaScript é utilizado principalmente para:",

            alternativas: [
              "Criar banco de dados",
              "Montar servidores físicos",
              "Adicionar interatividade às páginas",
              "Formatar textos acadêmicos"
            ],

            correta: 2
          }

        ]
      }

    ]
  }

];


/* =========================
   CURSOS DISPONÍVEIS
========================= */

let cursosDisponiveis = [...cursosBase];


/* =========================
   ADMIN PADRÃO
========================= */

function criarAdminPadrao() {

  let existe =
  admins.find(a => a.login === "god");

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

    if (aluno.xp == null)
      aluno.xp = 0;

    if (!aluno.foto)
      aluno.foto =
      "https://i.pravatar.cc/300?u=" + aluno.login;

    if (!aluno.cursos)
      aluno.cursos = [];

    if (!aluno.certificados)
      aluno.certificados = [];

    if (!aluno.notas)
      aluno.notas = [];

    if (!aluno.documentos)
      aluno.documentos = [];

    if (!aluno.dataCadastro)
      aluno.dataCadastro =
      new Date().toLocaleDateString("pt-BR");

  });

}


/* =========================
   SALVAR
========================= */

function salvar() {

  localStorage.setItem(
    "admins",
    JSON.stringify(admins)
  );

  localStorage.setItem(
    "gestores",
    JSON.stringify(gestores)
  );

  localStorage.setItem(
    "alunos",
    JSON.stringify(alunos)
  );

  localStorage.setItem(
    "logsLogin",
    JSON.stringify(logsLogin)
  );

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

    admins.find(u =>
      u.login === login &&
      u.senha === senha
    ) ||

    gestores.find(u =>
      u.login === login &&
      u.senha === senha
    ) ||

    alunos.find(u =>
      u.login === login &&
      u.senha === senha
    )

  );

}


/* =========================
   TIPO USUÁRIO
========================= */

function tipoUsuario(login) {

  if (admins.find(a => a.login === login))
    return "admin";

  if (gestores.find(g => g.login === login))
    return "gestor";

  if (alunos.find(a => a.login === login))
    return "aluno";

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

function cadastrarGestor(
  nome,
  login,
  senha
) {

  if (loginExiste(login)) {

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
   CADASTRAR ALUNO
========================= */

function cadastrarAluno(
  nome,
  cpf,
  nascimento,
  login,
  senha
) {

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

    foto:
    "https://i.pravatar.cc/300?u=" + login,

    cursos: [],

    certificados: [],

    notas: [],

    documentos: [],

    dataCadastro:
    new Date().toLocaleDateString("pt-BR")

  });

  salvar();

  return true;

}


/* =========================
   CURSOS / AÇÕES
========================= */

function matricularCurso(login, curso) {

  let aluno =
  alunos.find(a => a.login === login);

  if (!aluno) return;

  let existe =
  aluno.cursos.find(c => c.id === curso.id);

  if (existe) return;

  aluno.cursos.push(curso);

  salvar();

}


function concluirCurso(
  login,
  nomeCertificado
) {

  let aluno =
  alunos.find(a => a.login === login);

  if (!aluno) return;

  aluno.certificados.push(
    nomeCertificado
  );

  salvar();

}


function adicionarNota(
  login,
  materia,
  valor
) {

  let aluno =
  alunos.find(a => a.login === login);

  if (!aluno) return;

  aluno.notas.push({
    materia,
    valor
  });

  salvar();

}


function adicionarDocumento(
  login,
  documento
) {

  let aluno =
  alunos.find(a => a.login === login);

  if (!aluno) return;

  aluno.documentos.push(documento);

  salvar();

}


function ganharXP(login, valor) {

  let aluno =
  alunos.find(a => a.login === login);

  if (!aluno) return;

  aluno.xp += valor;

  salvar();

}


/* =========================
   LISTAGENS
========================= */

function getAdmins() {
  return admins;
}

function getGestores() {
  return gestores;
}

function getAlunos() {
  return alunos;
}

function getLogs() {
  return logsLogin;
}


/* =========================
   ALUNO TESTE
========================= */

function criarAlunoTeste() {

  let existe =
  alunos.find(a => a.login === "kevin");

  if (!existe) {

    alunos.push({

      nome: "Kevin Luiz",

      cpf: "000.000.000-00",

      nascimento: "2000-01-01",

      login: "kevin",

      senha: "123",

      xp: 750,

      foto:
      "https://i.pravatar.cc/300?img=12",

      cursos: [],

      certificados: [
        "React_Avancado_Certificado.pdf"
      ],

      notas: [

        {
          materia: "UX E UI",
          valor: "9.5"
        },

        {
          materia: "Banco de Dados",
          valor: "8.7"
        }

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
   INICIALIZAR CURSOS
========================= */

if (!localStorage.getItem("cursos")) {

  localStorage.setItem(
    "cursos",
    JSON.stringify(cursosBase)
  );

}


/* =========================
   INICIALIZAÇÃO
========================= */

criarAdminPadrao();

corrigirEstrutura();

criarAlunoTeste();

salvar();
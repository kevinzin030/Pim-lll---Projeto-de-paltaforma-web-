function init(){

  let user =
  JSON.parse(localStorage.getItem("logado"));

  if(!user){

    window.location.href = "login.html";
    return;

  }

  carregarAluno(user);

}


/* =========================
   MENU MOBILE
========================= */

function toggleSidebar(){

  let sidebar =
  document.getElementById("sidebar");

  let overlay =
  document.getElementById("overlay");

  sidebar.classList.toggle("ativo");

  overlay.classList.toggle("ativo");

}


/* =========================
   DASHBOARD
========================= */

function carregarAluno(user){

  let progresso =
  Math.min(user.xp / 10, 100);

  let html = `

  <!-- TOPO -->
  <div class="dashboard-topo">

    <div>

      <h1>
        Olá, ${user.nome}
      </h1>

      <p>
        Bem-vindo de volta.
      </p>

    </div>

    <!-- FOTO -->
    <div
    class="perfil-mini"
    onclick="abrirPerfil()">

      <img src="${user.foto}">

    </div>

  </div>

  <!-- PROGRESSO -->
  <div class="progresso-box">

    <h2>📊 Progresso</h2>

    <p>XP Total</p>

    <div class="barra">

      <div
      class="barra-fill"
      style="width:${progresso}%">

      </div>

    </div>

    <strong>
      ${user.xp} XP
    </strong>

  </div>

  <!-- CURSOS -->
  <h2 class="titulo-section">

    📚 Meus Cursos

  </h2>

  <div class="cursos-grid">

    ${gerarCursos(user)}

  </div>

  <!-- INFERIOR -->
  <div class="bottom-grid">

    <!-- NOTAS -->
    <div class="box-dark">

      <h2>⭐ Notas</h2>

      ${gerarNotas(user)}

    </div>

    <!-- DOCS -->
    <div class="box-dark">

      <h2>📁 Documentos</h2>

      ${gerarDocumentos(user)}

    </div>

  </div>

  `;

  document.getElementById("app")
  .innerHTML = html;

}


/* =========================
   CURSOS
========================= */

function gerarCursos(user){

  if(user.cursos.length === 0){

    return `
      <p>Nenhum curso.</p>
    `;
  }

  let html = "";

  user.cursos.forEach(curso => {

    html += `

    <div class="curso-card">

      <img src="
      https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop
      ">

      <div class="curso-info">

        <span class="categoria">
          CURSO
        </span>

        <h3>
          ${curso.nome}
        </h3>

        <button>
          CONTINUAR
        </button>

      </div>

    </div>

    `;
  });

  return html;

}


/* =========================
   NOTAS
========================= */

function gerarNotas(user){

  if(user.notas.length === 0){

    return `
      <p>Nenhuma nota.</p>
    `;
  }

  let html = "";

  user.notas.forEach(nota => {

    html += `

    <div class="nota-item">

      <span>
        ${nota.materia}
      </span>

      <strong>
        ${nota.valor}
      </strong>

    </div>

    `;
  });

  return html;

}


/* =========================
   DOCUMENTOS
========================= */

function gerarDocumentos(user){

  if(user.documentos.length === 0){

    return `
      <p>Nenhum documento.</p>
    `;
  }

  let html = "";

  user.documentos.forEach(doc => {

    html += `

    <p class="doc">

      📄 ${doc}

    </p>

    `;
  });

  return html;

}


/* =========================
   PERFIL
========================= */

function abrirPerfil(){

  window.location.href =
  "perfil.html";

}
function init(){
  renderAlunoDashboard();
}

function renderAlunoDashboard(){
  const usuario = JSON.parse(localStorage.getItem("usuario")) || { nome: "Kevin" };

  document.getElementById("app").innerHTML = `
  
  <div class="dashboard">

    <h2 class="saudacao">Olá, ${usuario.nome} 👋</h2>

    <!-- BUSCA -->
    <div class="busca">
      <input type="text" placeholder="Buscar cursos...">
    </div>

    <!-- CARDS INFO -->
    <div class="info-cards">
      <div class="info-card">
        <h3>📚 Meus Cursos</h3>
        <span>0</span>
      </div>

      <div class="info-card">
        <h3>📈 Em andamento</h3>
        <span>0</span>
      </div>
    </div>

    <!-- TABS -->
    <div class="tabs">
      <button class="ativo">Meus Cursos</button>
      <button>Explorar</button>
    </div>

    <!-- CONTEÚDO -->
    <div class="conteudo-vazio">
      <div class="icone">📖</div>
      <h3>Nenhum curso matriculado</h3>
      <p>Explore nossa biblioteca e comece a aprender hoje!</p>
      <button onclick="explorarCursos()">Explorar cursos</button>
    </div>

  </div>
  `;
}

function init(){
  verificarLogin();

  let user = JSON.parse(localStorage.getItem("logado"));

  if(user.tipo === "aluno") carregarAluno(user);
  if(user.tipo === "gestor") carregarGestor();
  if(user.tipo === "admin") carregarAdmin();
}
function init(){
  carregarDashboard();
}

function carregarDashboard(){
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="cursos-section">
      <h2>SEUS CURSOS</h2>

      <div class="cursos">

        <div class="card" onclick="abrirCurso('web')">
          <h3>DESENVOLVIMENTO WEB RESPONSIVO</h3>
          <p>Este curso transforma sua visão técnica em uma força de impacto positivo, ensinando você a construir produtos que respeitam o ser humano e o planeta.</p>

          <div class="tempo">⏱ 2h 30min</div>

          <button>Acessar</button>
        </div>

        <div class="card" onclick="abrirCurso('sql')">
          <h3>BANCO DE DADOS COM SQL</h3>
          <p>Aprenda a gerenciar o coração de qualquer aplicação com foco em integridade, segurança e responsabilidade social. Este curso vai além do SELECT e JOIN, capacitando você a projetar bancos de dados que respeitam a LGPD/GDPR..</p>

          <div class="tempo">⏱ 2h 30min</div>

          <button>Acessar</button>
        </div>

        <div class="card" onclick="abrirCurso('eng')">
          <h3>ENGENHARIA DE SOFTWARE</h3>
          <p>Este curso é o divisor de águas para quem deseja deixar de ser apenas um "escritor de código" para se tornar um arquiteto de soluções sustentáveis..</p>

          <div class="tempo">⏱ 2h 30min</div>

          <button>Acessar</button>
        </div>
        <div class="card" onclick="abrirCurso('eng')">
          <h3>ENGENHARIA DE SOFTWARE</h3>
          <p>Este curso é o divisor de águas para quem deseja deixar de ser apenas um "escritor de código" para se tornar um arquiteto de soluções sustentáveis..</p>

          <div class="tempo">⏱ 2h 30min</div>

          <button>Acessar</button>
        </div>

        

      </div>
    </section>
  `;
}
function abrirCurso(curso){
  alert("Abrindo curso: " + curso);

  // exemplo:
  // window.location.href = "curso.html?id=" + curso;
}

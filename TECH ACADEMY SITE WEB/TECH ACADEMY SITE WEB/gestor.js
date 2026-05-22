function carregarGestor(){
  document.getElementById("app").innerHTML = `
  <h2>Gestor</h2>

  <input id="titulo">
  <button onclick="criarConteudo()">Criar Conteúdo</button>
  `;
}

function criarConteudo(){
  conteudos.push({titulo: titulo.value});
  salvar();
  alert("Criado!");
}
function verRelatorio(){

  let usuarios = JSON.parse(localStorage.getItem("usuarios"));

  let html = "<h2>Relatório de Alunos</h2>";

  usuarios.forEach(u => {
    if(u.tipo === "aluno"){
      html += `
      <div class="card">
        <h4>${u.nome}</h4>
        <p>XP: ${u.xp}</p>
        <p>Nível: ${Math.floor(u.xp/100)}</p>
      </div>
      `;
    }
  });

  document.getElementById("app").innerHTML = html;
}

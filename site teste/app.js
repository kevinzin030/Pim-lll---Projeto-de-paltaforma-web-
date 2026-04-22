function init(){
  verificarLogin();

  let user = JSON.parse(localStorage.getItem("logado"));

  if(user.tipo === "aluno") carregarAluno(user);
  if(user.tipo === "gestor") carregarGestor();
  if(user.tipo === "admin") carregarAdmin();
}

let admins = JSON.parse(localStorage.getItem("admins")) || [];
let gestores = JSON.parse(localStorage.getItem("gestores")) || [];
let alunos = JSON.parse(localStorage.getItem("alunos")) || [];

/* ADMIN PADRÃO */
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

criarAdminPadrao();

/* SALVAR */
function salvar(){
  localStorage.setItem("admins", JSON.stringify(admins));
  localStorage.setItem("gestores", JSON.stringify(gestores));
  localStorage.setItem("alunos", JSON.stringify(alunos));
}

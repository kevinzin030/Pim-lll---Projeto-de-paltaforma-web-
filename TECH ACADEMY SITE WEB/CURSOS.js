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

Um profissional de UX pensa em como as pessoas usam aplicativos e páginas da internet no dia a dia. Ele busca criar telas organizadas, fáceis de entender e intuitivas, para que qualquer pessoa consiga navegar sem dificuldades. Quando um sistema possui um bom UX, o usuário encontra as informações rapidamente e consegue realizar tarefas com facilidade.

Além disso, o UX melhora a navegação, deixando menus, botões e funções mais simples de usar. Isso aumenta a satisfação do usuário e faz com que as pessoas tenham mais vontade de continuar utilizando o sistema.

A usabilidade é um fator importante no UX, pois garante facilidade e conforto no uso do sistema. Outro ponto importante é a ergonomia da interface, que ajuda o usuário a interagir melhor com o sistema.

A usabilidade inclui características como inteligibilidade, aprendizado, operacionalidade e atratividade.
          `
        },

        questoes: [

  {
    pergunta: "A usabilidade de um sistema está relacionada principalmente a:",

    alternativas: [
      "Aumento da memória RAM",
      "Facilidade e conforto no uso do sistema",
      "Velocidade do processador",
      "Capacidade do hardware"
    ],

    correta: 1
  },

  {
    pergunta: "Qual requisito está diretamente relacionado à ergonomia de interfaces?",

    alternativas: [
      "Portabilidade",
      "Confiabilidade",
      "Usabilidade",
      "Interoperabilidade"
    ],

    correta: 2
  },

  {
    pergunta: "A usabilidade inclui características como:",

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
UI Design significa User Interface, ou Interface do Usuário. O UI é responsável pela parte visual dos sistemas, aplicativos e sites.

O objetivo do UI é criar telas bonitas, organizadas e fáceis de utilizar. O profissional de UI trabalha com cores, botões, tipografia, ícones e layout das páginas.

Um bom UI melhora a experiência do usuário e facilita a navegação dentro do sistema.
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
            pergunta: "Qual é o principal objetivo do UI Design?",

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

O HTML é utilizado para estruturar páginas web. O CSS é responsável pela estilização visual das páginas. Já o JavaScript adiciona interatividade aos sistemas.

Os processos iterativos permitem desenvolver versões progressivas de um sistema, facilitando melhorias contínuas.
          `
        },

        questoes: [

          {
            pergunta: "Qual linguagem é utilizada para estruturar páginas web?",

            alternativas: [
              "CSS",
              "HTML",
              "Python",
              "Java"
            ],

            correta: 1
          },

          {
            pergunta: "Qual tecnologia é usada para estilizar páginas web?",

            alternativas: [
              "CSS",
              "SQL",
              "PHP",
              "C#"
            ],

            correta: 0
          },

          {
            pergunta: "O JavaScript é utilizado principalmente para:",

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
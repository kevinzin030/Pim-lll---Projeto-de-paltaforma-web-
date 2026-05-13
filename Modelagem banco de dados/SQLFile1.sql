-- =========================
-- TABELA: USUARIO
-- =========================
CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    tipo_usuario VARCHAR(10) CHECK (tipo_usuario IN ('ALUNO', 'TUTOR', 'ADMIN')) NOT NULL
);

-- =========================
-- TABELA: CURSO
-- =========================
CREATE TABLE Curso (
    id_curso INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(100) NOT NULL,
    descricao TEXT
);

-- =========================
-- TABELA: MATRICULA
-- =========================
CREATE TABLE Matricula (
    id_matricula INT PRIMARY KEY IDENTITY(1,1),
    id_usuario INT,
    id_curso INT,
    data_matricula DATE,
    status VARCHAR(50),

    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
);

-- =========================
-- TABELA: CONTEUDO
-- =========================
CREATE TABLE Conteudo (
    id_conteudo INT PRIMARY KEY IDENTITY(1,1),
    titulo VARCHAR(100),
    tipo VARCHAR(50),
    id_curso INT,
    id_tutor INT,

    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso),
    FOREIGN KEY (id_tutor) REFERENCES Usuario(id_usuario)
);

-- =========================
-- TABELA: QUESTIONARIO
-- =========================
CREATE TABLE Questionario (
    id_questionario INT PRIMARY KEY IDENTITY(1,1),
    titulo VARCHAR(100),
    id_conteudo INT,

    FOREIGN KEY (id_conteudo) REFERENCES Conteudo(id_conteudo)
);

-- =========================
-- TABELA: QUESTAO
-- =========================
CREATE TABLE Questao (
    id_questao INT PRIMARY KEY IDENTITY(1,1),
    enunciado TEXT,
    id_questionario INT,

    FOREIGN KEY (id_questionario) REFERENCES Questionario(id_questionario)
);

-- =========================
-- TABELA: ALTERNATIVA
-- =========================
CREATE TABLE Alternativa (
    id_alternativa INT PRIMARY KEY IDENTITY(1,1),
    texto TEXT,
    correta BIT,
    id_questao INT,

    FOREIGN KEY (id_questao) REFERENCES Questao(id_questao)
);

-- =========================
-- TABELA: RESPOSTA
-- =========================
CREATE TABLE Resposta (
    id_resposta INT PRIMARY KEY IDENTITY(1,1),
    id_usuario INT,
    id_questao INT,
    id_alternativa INT,

    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_questao) REFERENCES Questao(id_questao),
    FOREIGN KEY (id_alternativa) REFERENCES Alternativa(id_alternativa)
);

-- =========================
-- TABELA: PROGRESSO
-- =========================
CREATE TABLE Progresso (
    id_progresso INT PRIMARY KEY IDENTITY(1,1),
    id_usuario INT,
    id_curso INT,
    porcentagem DECIMAL(5,2),
    ultimo_acesso DATETIME,

    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
);

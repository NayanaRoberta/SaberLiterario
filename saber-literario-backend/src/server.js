const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para ler JSON no corpo da requisição
app.use(express.json());

// ------------------ Dados e funções auxiliares ------------------

const STATUS = {
  DISPONIVEL: 'disponível',
  EMPRESTADO: 'emprestado',
};

let livros = [
  { id: 1, titulo: "O Pequeno Príncipe", status: STATUS.DISPONIVEL },
  { id: 2, titulo: "Dom Casmurro", status: STATUS.DISPONIVEL },
  { id: 3, titulo: "O homem que copiava", status: STATUS.DISPONIVEL },
];

const acharLivro = (id) => livros.find(l => l.id === Number(id));

// ------------------ Rotas ------------------

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor está rodando com sucesso! 🚀');
});

// Saudação
app.get('/api/saudacao', (req, res) => {
  res.json({ mensagem: 'Olá! Esta é a rota /api/saudacao funcionando! 🎉' });
});

// Listar todos os livros
app.get('/livros', (req, res) => {
  res.json(livros);
});

// Obter um livro por ID
app.get('/livros/:id', (req, res) => {
  const livro = acharLivro(req.params.id);
  if (!livro) return res.status(404).json({ erro: 'Livro não encontrado.' });
  res.json(livro);
});

// Cadastrar novo livro
app.post('/livros', (req, res) => {
  const { titulo, status } = req.body;

  // Validações
  if (!titulo) {
    return res.status(400).json({ erro: 'O campo "titulo" é obrigatório.' });
  }

  if (status && ![STATUS.DISPONIVEL, STATUS.EMPRESTADO].includes(status)) {
    return res.status(400).json({ erro: `Status inválido. Use "${STATUS.DISPONIVEL}" ou "${STATUS.EMPRESTADO}".` });
  }

  // Cria novo livro
  const novoLivro = {
    id: livros.length > 0 ? livros[livros.length - 1].id + 1 : 1, // gera ID automático
    titulo,
    status: status || STATUS.DISPONIVEL // se não mandar status, assume "disponível"
  };

  livros.push(novoLivro);

  res.status(201).json({ mensagem: 'Livro cadastrado com sucesso!', livro: novoLivro });
});

// Atualizar apenas o status de um livro
app.put('/livros/:id/status', (req, res) => {
  const livro = acharLivro(req.params.id);
  if (!livro) {
    return res.status(404).json({ erro: 'Livro não encontrado.' });
  }

  const { status } = req.body;
  if (!status || ![STATUS.DISPONIVEL, STATUS.EMPRESTADO].includes(status)) {
    return res.status(400).json({ erro: `Status inválido. Use "${STATUS.DISPONIVEL}" ou "${STATUS.EMPRESTADO}".` });
  }

  livro.status = status;
  res.json({ mensagem: 'Status atualizado com sucesso!', livro });
});

// 🔥 Atualizar título e status de um livro
app.put('/livros/:id', (req, res) => {
  const livro = acharLivro(req.params.id);
  if (!livro) {
    return res.status(404).json({ erro: 'Livro não encontrado.' });
  }

  const { titulo, status } = req.body;

  if (titulo) {
    livro.titulo = titulo;
  }

  if (status && [STATUS.DISPONIVEL, STATUS.EMPRESTADO].includes(status)) {
    livro.status = status;
  } else if (status) {
    return res.status(400).json({ erro: `Status inválido. Use "${STATUS.DISPONIVEL}" ou "${STATUS.EMPRESTADO}".` });
  }

  res.json({ mensagem: 'Livro atualizado com sucesso!', livro });
});

// Deletar um livro por ID
app.delete('/livros/:id', (req, res) => {
  const livroId = Number(req.params.id);
  const index = livros.findIndex(l => l.id === livroId);

  if (index === -1) {
    return res.status(404).json({ erro: 'Livro não encontrado.' });
  }

  const livroRemovido = livros.splice(index, 1)[0];
  res.json({ mensagem: 'Livro removido com sucesso!', livro: livroRemovido });
});

// ------------------ Inicia o servidor ------------------

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

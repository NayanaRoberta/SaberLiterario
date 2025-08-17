const express = require('express');
const app = express();
const PORT = 3000;

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor está rodando com sucesso! 🚀');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


// Nova rota de teste
app.get('/api/saudacao', (req, res) => {
  res.json({ mensagem: 'Olá! Esta é a rota /api/saudacao funcionando! 🎉' });
});


// Rota de teste principal
app.get('/', (req, res) => {
  res.send('Servidor está rodando com sucesso! 🚀');
});

// Nova rota de teste
app.get('/api/saudacao', (req, res) => {
  res.json({ mensagem: 'Olá! Esta é a rota /api/saudacao funcionando! 🎉' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use(express.json()); // Para ler JSON no corpo da requisição

// Dados de exemplo
let livros = [
  { id: 1, titulo: "O Pequeno Príncipe", status: "disponível" },
  { id: 2, titulo: "Dom Casmurro", status: "disponível" }
];

// Rota para atualizar status do livro
app.put('/api/livros/:id/status', (req, res) => {
  const livroId = parseInt(req.params.id);
  const { status } = req.body; // Espera { "status": "emprestado" } ou "disponível"

  // Validação do status
  if (!["disponível", "emprestado"].includes(status)) {
    return res.status(400).json({ erro: "Status inválido. Use 'disponível' ou 'emprestado'." });
  }

  // Encontrar o livro
  const livro = livros.find(l => l.id === livroId);
  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado." });
  }

  // Atualizar status
  livro.status = status;
  res.json({ mensagem: "Status atualizado com sucesso!", livro });
});

app.use(express.json()); // habilita receber JSON no body

const STATUS = {
  DISPONIVEL: 'disponível',
  EMPRESTADO: 'emprestado',
};

const acharLivro = (id) => livros.find(l => l.id === Number(id));

// Listar todos os livros

app.get('/api/livros', (req, res) => {
  res.json(livros);
});

// Obter um livro por ID
app.get('/api/livros/:id', (req, res) => {
  const livro = acharLivro(req.params.id);
  if (!livro) return res.status(404).json({ erro: 'Livro não encontrado.' });
  res.json(livro);
});

app.use(express.json());

// Atualizar status do livro
app.put('/api/livros/:id/status', (req, res) => {
  const livro = acharLivro(req.params.id);
  if (!livro) {
    return res.status(404).json({ erro: 'Livro não encontrado.' });
  }

  // Pega o status enviado no corpo da requisição
  const { status } = req.body;
  if (!status || !['disponível', 'emprestado'].includes(status)) {
    return res.status(400).json({ erro: 'Status inválido. Use "disponível" ou "emprestado".' });
  }

  livro.status = status; // Atualiza o status
  res.json({ mensagem: 'Status atualizado com sucesso!', livro });
});


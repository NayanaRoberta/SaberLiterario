const express = require('express');
const app = express();
const STATUS = {
  DISPONIVEL: 'disponível',
  EMPRESTADO: 'emprestado',
};

app.use(express.json());

let livros = [
  { id: 1, titulo: "O Pequeno Príncipe", status: STATUS.DISPONIVEL },
  { id: 2, titulo: "Dom Casmurro", status: STATUS.DISPONIVEL },
  { id: 3, titulo: "O homem que copiava", status: STATUS.DISPONIVEL },
];

const acharLivro = (id) => livros.find(l => l.id === Number(id));

// GET

app.get('/', (req, res) => res.send('Servidor está rodando com sucesso! 🚀'));
app.get('/api/saudacao', (req, res) => res.json({ mensagem: 'Olá! Esta é a rota /api/saudacao funcionando! 🎉' }));
app.get('/livros', (req, res) => res.json(livros));

app.get('/livros/:id', (req, res) => {
  const livro = acharLivro(req.params.id);
  if (!livro) return res.status(404).json({ erro: 'Livro não encontrado.' });
  res.json(livro);
});

// POST

app.post('/livros', (req, res) => {
  const { titulo, status } = req.body;
  if (!titulo) return res.status(400).json({ erro: 'O campo "titulo" é obrigatório.' });
  if (status && ![STATUS.DISPONIVEL, STATUS.EMPRESTADO].includes(status)) {
    return res.status(400).json({ erro: `Status inválido. Use "${STATUS.DISPONIVEL}" ou "${STATUS.EMPRESTADO}".` });
  }
  const novoLivro = {
    id: livros.length > 0 ? livros[livros.length - 1].id + 1 : 1,
    titulo,
    status: status || STATUS.DISPONIVEL
  };
  livros.push(novoLivro);
  res.status(201).json({ mensagem: 'Livro cadastrado com sucesso!', livro: novoLivro });
});

// PUT

app.put('/livros/:id', (req, res) => {
  const livro = acharLivro(req.params.id);
  if (!livro) return res.status(404).json({ erro: 'Livro não encontrado.' });

  const { titulo, status } = req.body;

  if (!titulo) {
    return res.status(400).json({ erro: 'O campo "titulo" é obrigatório.' });
  }

  if (status && ![STATUS.DISPONIVEL, STATUS.EMPRESTADO].includes(status)) {
    return res.status(400).json({
      erro: `Status inválido. Use "${STATUS.DISPONIVEL}" ou "${STATUS.EMPRESTADO}".`
    });
  }

  livro.titulo = titulo;
  if (status) livro.status = status;

  res.json({ mensagem: 'Livro atualizado com sucesso!', livro });
});


// DELETE

app.delete('/livros/:id', (req, res) => {
  const livroIndex = livros.findIndex(l => l.id === Number(req.params.id));
  if (livroIndex === -1) {
    return res.status(404).json({ erro: 'Livro não encontrado.' });
  }

  const removido = livros.splice(livroIndex, 1)[0];
  res.json({ mensagem: `Livro "${removido.titulo}" deletado com sucesso!` });
});

module.exports = app;

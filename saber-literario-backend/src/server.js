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

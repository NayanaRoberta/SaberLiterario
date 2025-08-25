const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


const livros = [
    { id: 1, titulo: "O Pequeno Príncipe", status: "disponível" },
    { id: 2, titulo: "Dom Casmurro", status: "disponível" }
];


const acharLivro = (id) => livros.find(l => l.id === Number(id));


app.get('/', (req, res) => {
    res.send('Servidor está rodando com sucesso! 🚀');
});

app.get('/api/saudacao', (req, res) => {
    res.json({ mensagem: 'Olá! Esta é a rota /api/saudacao funcionando! 🎉' });
});


app.get('/api/livros', (req, res) => {
    res.json(livros);
});


app.get('/api/livros/:id', (req, res) => {
    const livro = acharLivro(req.params.id);
    if (!livro) {
        return res.status(404).json({ erro: 'Livro não encontrado.' });
    }
    res.json(livro);
});


app.put('/api/livros/:id/status', (req, res) => {
    const livro = acharLivro(req.params.id);
    if (!livro) {
        return res.status(404).json({ erro: 'Livro não encontrado.' });
    }

    const { status } = req.body;
    if (!status || !['disponível', 'emprestado'].includes(status)) {
        return res.status(400).json({ erro: 'Status inválido. Use "disponível" ou "emprestado".' });
    }

    livro.status = status;
    res.json({ mensagem: 'Status atualizado com sucesso!', livro });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

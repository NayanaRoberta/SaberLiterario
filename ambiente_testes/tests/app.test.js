const request = require('supertest');
const app = require('../app');

describe('Testes das rotas da API de livros', () => {

  // -----------------------GET-----------------------

  it('Deve responder na rota raiz /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Servidor está rodando');
  });
  
  // --------------------GET/livros--------------------

  it('Deve listar todos os livros em /livros', async () => {
    const res = await request(app).get('/livros');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // ----------------------POST----------------------

  it('Deve cadastrar um novo livro com POST /livros', async () => {
  const novo = { titulo: 'Livro Teste' };
  const res = await request(app).post('/livros').send(novo);
  expect(res.statusCode).toBe(201);
  expect(res.body.livro).toHaveProperty('id');
  expect(res.body.livro.titulo).toBe('Livro Teste');

  idCriado = res.body.livro.id; // 👈 armazena para PUT e DELETE
});

  // ------------------------PUT-----------------------

  it('Deve atualizar um livro existente com PUT /livros/:id', async () => {
  const res = await request(app)
    .put(`/livros/${idCriado}`)
    .send({ titulo: 'Livro Atualizado' });

  expect(res.statusCode).toBe(200);
  expect(res.body.livro.titulo).toBe('Livro Atualizado');
});

  it('Não deve atualizar livro inexistente', async () => {
    const res = await request(app)
      .put('/livros/9999')
      .send({ titulo: 'Nada' });

    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('erro');
  });

  // ----------------------DELETE----------------------

  it('Deve deletar um livro existente com DELETE /livros/:id', async () => {
    const res = await request(app).delete(`/livros/${idCriado}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.mensagem).toContain('deletado');
  });

  it('Não deve deletar livro inexistente', async () => {
    const res = await request(app).delete('/livros/9999');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('erro');
  });
});


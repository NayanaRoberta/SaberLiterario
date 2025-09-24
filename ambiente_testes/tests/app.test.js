const request = require('supertest');
const app = require('../app');

describe('Testes das rotas da API de livros', () => {
  it('Deve responder na rota raiz /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Servidor está rodando');
  });

  it('Deve listar todos os livros em /livros', async () => {
    const res = await request(app).get('/livros');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('Deve cadastrar um novo livro com POST /livros', async () => {
    const novo = { titulo: 'Teste Jest' };
    const res = await request(app).post('/livros').send(novo);
    expect(res.statusCode).toBe(201);
    expect(res.body.livro.titulo).toBe('Teste Jest');
  });
});
